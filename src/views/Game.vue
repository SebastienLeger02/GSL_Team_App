<template>
     <h2 class="text-2xl font-bold">Game {{ $route.query.id }}</h2> 

    <div className="grid grid-cols-2 grid-rows-1 gap-4 m-[auto] container">
      <div >
        <img v-if="gameDetail" :src="gameDetail.thumbnail" :alt="gameDetail.title" 
        class="w-[120%]"/>
      </div>
      <div >
         <h2 class="text-2xl font-bold">Game: {{ gameDetail?.title }}</h2>
        <p v-if="gameDetail" class="mt-4">{{ gameDetail.description }}</p>
      </div>
    </div>
    <div>
   

    <div v-if="gameDetail?.screenshots?.length" class="mt-6">
      <h3 class="text-xl font-bold">Screenshots:</h3>
      <div class="flex flex-wrap mt-2">
        <img
          v-for="screenshot in gameDetail.screenshots"
          :key="screenshot.id"
          :src="screenshot.image"
          class="w-1/3 p-1"
          :alt="`Screenshot ${screenshot.id}`"
        />
      </div>
    </div>
  </div>
  
</template>

<script>
import { useApiStore } from "../stores/apiStore";

export default {
  name: "Game",
  data() {
    return {
      gameId : null
    }
  },
  computed: {
    // Obtener los datos del juego desde el store
    gameDetail() {
      const gameStore = useApiStore();
      console.log("GamesDetail :", gameStore.gameById);
      return gameStore.gameById;
    },
    
  },
  mounted() {
    const gameStore = useApiStore();
   
    const gameId =  this.$route.query.id; // Obtenemos el ID desde la URL
    // Llamar a la API para obtener los detalles del juego
    //let gameId = 545;
    if (gameId) {
      console.log("ID :",gameStore.fetchGames(`game?id=${gameId}`));
      gameStore.fetchGames(`game?id=${gameId}`);
    }
  },
  watch: {
    // Observar cambios en el ID de la ruta para recargar los datos
/*     "$route.params.id"(newId) {
      const gameStore = useApiStore();
      if (newId) {
        gameStore.fetchGames(`game?id=${newId}`);
      }
    }, */
  },
};
</script>

<style>

</style>