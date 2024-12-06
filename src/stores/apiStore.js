import { defineStore } from "pinia";

export const useApiStore = defineStore("apiStore", {
  state: () => ({
    games: [], // Almacenamos todos los juegos aquí
  }),

  getters: {
    // Getter para obtener plataformas únicas
    platforms(state) {
      return [...new Set(state.games.map((game) => game.platform))];
    },
    // Getter para obtener categorías únicas
    categories(state) {
      return [...new Set(state.games.map((game) => game.genre))];
    },
  },

  actions: {
    // Acción para obtener los datos desde la API
    fetchGames(endpoint) {
      return fetch(
        `https://free-to-play-games-database.p.rapidapi.com/api/${endpoint}`,
        {
          method: "GET",
          headers: {
            "X-RapidAPI-Key": "bdc2242cafmsh4c0302abdc3a647p1a6d33jsn5b561224ba73",
            "X-RapidAPI-Host": "free-to-play-games-database.p.rapidapi.com",
          },
        }
      )
        .then((response) => response.json())
        .then((data) => {
          this.games = data; // Asignamos los datos de los juegos al estado
        })
        .catch((error) => {
          console.error("Error fetching games data:", error);
        });
    },
  },
});
