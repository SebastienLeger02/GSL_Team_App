import { defineStore } from "pinia";
export const useApiStore = defineStore("apiStore", {
    state: () => ({
        platforms: [], // Listado de plataformas
        categories: [], // Listado de categorías
        game: [],
        loading: false, // Estado de carga
        error: null, // Errores en la API
      }),

      actions: {
        // Acción para obtener datos de la API
        async fetchGames(endpoint) {
          this.loading = true;
          this.error = null;
    
          try {
            const response = await fetch(
              `https://free-to-play-games-database.p.rapidapi.com/api/${endpoint}`,
              {
                method: "GET",
                headers: {
                  "X-RapidAPI-Key": "bdc2242cafmsh4c0302abdc3a647p1a6d33jsn5b561224ba73",
                  "X-RapidAPI-Host": "free-to-play-games-database.p.rapidapi.com",
                },
              }
            );
            const data = await response.json();
            console.log("data: ", data);
            if (endpoint.includes("game?id=")) {
              this.game = data;
            }
            // Extraer plataformas y categorías únicas con New Set
            this.platforms = [...new Set(data.map((game) => game.platform))];
            this.categories = [...new Set(data.map((game) => game.genre))];
          } catch (error) {
            this.error = "Error al obtener datos de la API";
            console.error(error);
          } finally {
            this.loading = false;
          }
        },
      },
    });