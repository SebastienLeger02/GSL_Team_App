<template>
  <section class="py-12 bg-background-thirty">
    <div class="max-w-6xl mx-auto space-y-8">
      <!-- Recorre las categorías o plataformas únicas -->
      <div v-for="(group, index) in randomGroups" :key="index">
        <h2 class="text-lg font-semibold text-gray-100 mb-4">
          {{ isCategory ? "Category" : "Platform" }}: {{ group.name }}
        </h2>
        <div v-for="game in group.games" :key="game.id" class="bg-white shadow-md rounded-lg flex overflow-hidden mb-4">
          <!-- Enlace al juego -->
          <a :href="`/game?id=${game.id}`" class="w-1/4 bg-gray-200 flex items-center justify-center">
            <img :src="game.thumbnail" alt="">
          </a>
          <!-- Detalles del juego -->
          <div class="w-3/4 p-4 bg-background-default">
            <h3 class="text-xl font-bold text-gray-100">{{ game.title }}</h3>
            <ul class="text-gray-300 text-sm mb-4">
              <li><strong>Creator:</strong> {{ game.developer || "Unknown" }}</li>
              <li><strong>Platform:</strong> {{ game.platform || "N/A" }}</li>
              <li><strong>Start year:</strong> {{ game.release_date || "N/A" }}</li>
            </ul>
            <p class="text-gray-300 text-sm">
              {{ game.short_description || "No description available." }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { useApiStore } from "../stores/apiStore";
import { mapStores } from "pinia";

export default {
  name: "CategoryList",
  props: {
    isCategory: {
      type: Boolean,
      required: true,
    },
  },
  data() {
    return {
      randomGroups: [], // Almacenará las categorías o plataformas aleatorias
    };
  },
  computed: {
    // apiStore() {
    //   return useApiStore();
    // },
    ...mapStores(useApiStore), // Mapea directamente el store
  },
  methods: {
    getRandomGroups() {
      if (!this.apiStore.games.length) return [];

      // Agrupar juegos por categoría o plataforma
      const groupKey = this.isCategory ? "genre" : "platform";
      const groups = this.apiStore.games.reduce((acc, game) => {
        if (!acc[game[groupKey]]) {
          acc[game[groupKey]] = [];
        }
        acc[game[groupKey]].push(game);
        return acc;
      }, {});

      // Transformar a un array de objetos con nombre y juegos
      const groupArray = Object.entries(groups).map(([name, games]) => ({
        name,
        games: games.slice(0, 3), // Limitar a 3 juegos por grupo
      }));

      // Mezclar aleatoriamente y tomar 3 grupos
      this.randomGroups = this.shuffleArray(groupArray).slice(0, 3);
    },
    shuffleArray(array) {
      for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
      }
      return array;
    },
  },
  async mounted() {
    if (!this.apiStore.games.length) {
      try {
        await this.apiStore.fetchGames("games");
      } catch (error) {
        console.error("Error al obtener los juegos:", error);
      }
    }
    this.getRandomGroups();
  },
  watch: {
    // Actualizar grupos aleatorios si cambia el tipo (categoría o plataforma)
    isCategory() {
      this.getRandomGroups();
    },
  },
};
</script>

<style scoped>
/* Estilos personalizados */
</style>
