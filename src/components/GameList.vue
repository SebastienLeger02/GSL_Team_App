<template>
  <div class="container mx-auto px-4 py-10 bg-color-thirty">
    <h1 class="text-2xl font-bold mb-4 text-white">List Game</h1>
    <div v-if="randomGames.length" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      <div v-for="(game, index) in randomGames" :key="game.id" class="bg-gray-800 shadow-md rounded-lg p-4">
        <!-- Imagen y enlace al juego -->
        <a :href="`/game?id=${game.id}`" class="block h-32 rounded-md mb-4">
          <img :src="game.thumbnail" alt="Game Thumbnail" class="w-full h-full object-cover rounded-md" />
        </a>
        <!-- Categoría del juego -->
        <p class="text-sm text-gray-200">{{ game.genre || "Unknown" }}</p>
        <!-- Título del juego -->
        <h2 class="font-semibold text-lg text-gray-100">
          <a :href="`/game?id=${game.id}`">{{ game.title }}</a>
        </h2>
        <!-- Descripción del juego -->
        <p class="text-gray-300 text-sm">
          {{ game.short_description || "No description available." }}
        </p>
      </div>
    </div>
    <p v-else class="text-gray-400 text-center">No games available.</p>
  </div>
</template>

<script>
import { useApiStore } from "../stores/apiStore";
import { mapStores } from "pinia";

export default {
  name: "GameList",
  data() {
    return {
      randomGames: [], // Juegos aleatorios que se mostrarán
    };
  },
  computed: {
    ...mapStores(useApiStore),
  },
  methods: {
    /**
     * Selecciona juegos aleatorios del store.
     */
    getRandomGames() {
      // Comprueba que apiStore.games existe y es un array
      if (!this.apiStore.games || !Array.isArray(this.apiStore.games) || !this.apiStore.games.length)
        return;

      // Selecciona 8 juegos aleatorios
      const shuffled = [...this.apiStore.games].sort(() => 0.5 - Math.random());
      this.randomGames = shuffled.slice(0, 8);
    },
  },

  async mounted() {
    if (!this.apiStore || !this.apiStore.fetchGames) {
      return;
    }
    await this.apiStore.fetchGames("games");
    this.getRandomGames();
  },
};
</script>

<style scoped>
.container {
  max-width: 1200px;
}
</style>
