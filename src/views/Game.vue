<template>
    <h2 class="text-2xl font-bold">Game {{ $route.params.id }}</h2>
  
</template>

<script>
import { useApiStore } from "../stores/apiStore";

export default {
    name : "Game",
    data() {
        return{
            game: []
        }

    },
    getGameDetail() {
      this.game = useApiStore.find(game => game.id === Number(this.$route.params.id))
    },
    mounted() {
        // Usamos el store de Pinia para obtener los datos
        const gameStore = useApiStore();

        // Llamada a la API desde el store - Le pasamos como agumento el nombre del endpoint al cual llamaremos
       // gameStore.fetchGames("games");
        let id = 545;
        gameStore.fetchGames(`game?id=${id}`);

        // Sincronizamos los datos del store con el estado local del componente
        // Lo llamamos gameStore porque llamamos al endpoint general de games
        // Cogemos las plataformas y las categorias para los menus desplegables del navbar
        // console.log("games: ", gameStore.game);
        this.game = gameStore.game;
        this.categories = gameStore.categories;

        console.log("game: ", this.game);
   
    },
    watch: {
        "$route.params.id": "getGameDetail"
  }

}
</script>

<style>

</style>