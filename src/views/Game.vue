<template>
    <h2 class="text-2xl font-bold">Game</h2>
  
</template>

<script>
import { useApiStore } from "../stores/apiStore";

export default {
    name : "Game",
    data() {
        return{
            game: null
        }

    },
    getGameDetail() {
      this.game = useApiStore.find(game => game.id === Number(this.$route.params.id))
    },
    async mounted() {
        // Usamos el store de Pinia para obtener los datos
        const gameStore = useApiStore();
        this.getGameDetail();

        try {
            // Llamada a la API desde el store - Le pasamos como agumento el nombre del endpoint al cual llamaremos
            // await gameStore.fetchGames("games");
            let id = 545;
            await gameStore.fetchGames(`game?id=${id}`);

            // Sincronizamos los datos del store con el estado local del componente
            // Lo llamamos gameStore porque llamamos al endpoint general de games
            // Cogemos las plataformas y las categorias para los menus desplegables del navbar
            console.log("games: ", gameStore.game);
            this.game = gameStore.game;
            // this.platforms = gameStore.platforms;
            // this.categories = gameStore.categories;

            // console.log("platforms: ", this.platforms);
            // console.log("categorias: ", this.categories);
        } catch (error) {
            console.error("Error al obtener los datos desde el store:", error);
        }
    },
      watch: {
        "$route.params.id": "getGameDetail"
  }

}
</script>

<style>

</style>