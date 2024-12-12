<template>
  <div>
    <Navbar />
    <h2 class="text-2xl font-bold">Platform: {{ platform }}</h2>
    <p class="text-lg">Asociación: {{ associatedRelation }}</p>

    <div v-if="filteredGames.length">
      <h3 class="text-xl font-semibold mt-4">Juegos en la plataforma: {{ associatedRelation }}</h3>
      <ul>
        <li v-for="game in filteredGames" :key="game.id" class="py-2">
          <router-link :to="`/game?id=${game.id}`">{{ game.title }}</router-link>
        </li>
      </ul>
    </div>
    <p v-else class="mt-4 text-gray-500">No hay juegos disponibles para esta plataforma.</p>
  </div>
</template>

<script>
import { useApiStore } from "../stores/apiStore";
import Navbar from "../components/Navbar.vue";

export default {
  name: "Platform",
  components: {
    Navbar,
  },
  data() {
    return {
      filteredGames: [], // Almacenará los juegos filtrados
    };
  },
  computed: {
    platform() {
      return this.$route.params.platform; // Plataforma actual de la URL
    },
    associatedRelation() {
      return this.getRelation(this.platform); // Obtener la asociación
    },
    apiStore() {
      return useApiStore(); // Acceder al store
    },
  },
  methods: {
    /**
     * Devuelve la relación asociada a una plataforma.
     * @param {string} platform - La plataforma en formato URL.
     * @returns {string} La relación asociada.
     */
    getRelation(platform) {
      const associations = {
        "pc-windows": "PC (Windows)",
        "web-browser": "Web Browser",
        "pc-windows-web-browser": "PC (Windows), Web Browser",
      };

      return associations[platform] || platform; // Devolver la relación o la plataforma original
    },

    /**
     * Filtra los juegos asociados a la plataforma actual.
     */
    async fetchGamesByPlatform() {
      await this.apiStore.fetchGames("games"); // Obtener los juegos desde el endpoint
      const relatedPlatforms = this.associatedRelation.split(", "); // Dividir múltiples plataformas
      console.log(relatedPlatforms);
      this.filteredGames = this.apiStore.games.filter((game) =>
        relatedPlatforms.includes(game.platform)
      );
    },
  },
  async mounted() {
    await this.fetchGamesByPlatform(); // Filtrar los juegos al montar el componente
  },
  watch: {
    /**
     * Observa los cambios en la plataforma de la ruta.
     * Cuando cambia, vuelve a cargar los juegos filtrados.
     */
    platform: {
      immediate: true, // Ejecuta la función al montar el componente
      handler() {
        this.fetchGamesByPlatform();
      },
    },
  },
};
</script>

<style>
</style>
