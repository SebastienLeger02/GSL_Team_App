<template>
  <div>
    <Navbar />
    <h2 class="text-2xl font-bold">Category: {{ category }}</h2>
    <p class="text-lg">Asociación: {{ associatedRelation }}</p>

    <div v-if="filteredGames.length">
      <h3 class="text-xl font-semibold mt-4">Juegos en la categoría: {{ associatedRelation }}</h3>
      <ul>
        <li v-for="game in filteredGames" :key="game.id" class="py-2">
          <router-link :to="`/game?id=${game.id}`">{{ game.title }}</router-link>
        </li>
      </ul>
    </div>
    <p v-else class="mt-4 text-gray-500">No hay juegos disponibles para esta categoría.</p>
  </div>
</template>

<script>
import { useApiStore } from "../stores/apiStore";
import Navbar from "../components/Navbar.vue";
import Carrusel from "../components/Carrusel.vue";


export default {
  name: "Category",
  components: {
    Navbar,
    Carrusel,
  },
  data() {
    return {
      filteredGames: [], // Almacenará los juegos filtrados
    };
  },
  computed: {
    category() {
      return this.$route.params.category; // Categoría actual de la URL
    },
    associatedRelation() {
      return this.getRelation(this.category); // Obtener la asociación
    },
    apiStore() {
      return useApiStore(); // Acceder al store
    },
  },
  methods: {
    /**
     * Devuelve la relación asociada a una categoría.
     * @param {string} category - La categoría en formato URL.
     * @returns {string} La relación asociada.
     */
    getRelation(category) {
      const associations = {
        mmorpg: "MMORPG",
        shooter: "Shooter",
        strategy: "Strategy",
        "action-rpg": "Action RPG",
        "battle-royale": "Battle Royale",
        arpg: "ARPG",
        mmoarpg: "MMOARPG",
        fighting: "Fighting",
        moba: "MOBA",
        "card-game": "Card Game",
        "action-game": "Action Game",
        action: "Action",
        sports: "Sports",
        mmo: "MMO",
        racing: "Racing",
        social: "Social",
        "-mmorpg": "MMORPG",
        fantasy: "Fantasy",
      };

      return associations[category] || category; // Devolver la relación o la categoría original
    },

    /**
     * Filtra los juegos asociados a la categoría actual.
     */
    async fetchGamesByCategory() {
      await this.apiStore.fetchGames("games"); // Obtener los juegos desde el endpoint
      this.filteredGames = this.apiStore.games.filter(
        (game) => game.genre === this.associatedRelation
      );
    },
  },
  async mounted() {
    await this.fetchGamesByCategory(); // Filtrar los juegos al montar el componente
  },
  watch: {
    /**
     * Observa los cambios en la categoría de la ruta.
     * Cuando cambia, vuelve a cargar los juegos filtrados.
     */
    category: {
      immediate: true, // Ejecuta la función al montar el componente.
      handler() {
        this.fetchGamesByCategory();
      },
    },
  },
};
</script>

<style>
</style>