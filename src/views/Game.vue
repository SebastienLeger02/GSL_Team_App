<template>
    <!-- <h2 class="text-2xl font-bold">Game {{ $route.params.id }}</h2> -->
    <div>
    <h2 class="text-2xl font-bold">Game: {{ gameDetail?.title }}</h2>
    <h3>{{ gameDetail.publisher }}</h3>
    <img v-if="gameDetail" :src="gameDetail.thumbnail" :alt="gameDetail.title" />
    <p v-if="gameDetail" class="mt-4">{{ gameDetail.short_description }}</p>

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
  computed: {
    // Obtener los datos del juego desde el store
    gameDetail() {
      const gameStore = useApiStore();
      return gameStore.gameById;
    },
  },
  mounted() {
    const gameStore = useApiStore();
    // const gameId = this.$route.params.id; // Obtenemos el ID desde la URL

    // Llamar a la API para obtener los detalles del juego
    const gameID = ordered
    let gameId = 545;
    if (gameId) {
      gameStore.fetchGames(`game?id=${gameId}`);
    }
  },
  watch: {
    // Observar cambios en el ID de la ruta para recargar los datos
    "$route.params.id"(newId) {
      const gameStore = useApiStore();
      if (newId) {
        gameStore.fetchGames(`game?id=${newId}`);
      }
    },
  },
};
</script>

<style>

</style>