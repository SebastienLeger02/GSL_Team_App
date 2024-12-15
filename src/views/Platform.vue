<template>
  <section class="bg-color-thirty">
    <Navbar />
    <Carrusel />
    <!-- ---------------- -->
    <!-- <h2 class="text-2xl font-bold">Platform: {{ platform }}</h2>
    <p class="text-lg">Asociación: {{ associatedRelation }}</p>

    <div v-if="filteredGames.length">
      <h3 class="text-xl font-semibold mt-4">Juegos en la plataforma: {{ associatedRelation }}</h3>
      <ul>
        <li v-for="game in filteredGames" :key="game.id" class="py-2">
          <router-link :to="`/game?id=${game.id}`">{{ game.title }}</router-link>
        </li>
      </ul>
    </div>
    <p v-else class="mt-4 text-gray-500">No hay juegos disponibles para esta plataforma.</p> -->
    <CategoryList :isCategory="false" />
    <FooterSection />
  </section>
</template>

<script>
import { useApiStore } from "../stores/apiStore";
import { mapStores } from "pinia";
import Navbar from "../components/Navbar.vue";
import Carrusel from "../components/Carrusel.vue";
import CategoryList from "../components/CategoryList.vue";
import FooterSection from "../components/FooterSection.vue";

export default {
  name: "Platform",
  components: {
    Navbar,
    Carrusel,
    CategoryList,
    FooterSection,
  },
  computed: {
    ...mapStores(useApiStore),

    platform() {
      return this.$route.params.platform;
    },
    associatedRelation() {
      return this.getRelation(this.platform);
    },
    filteredGames() {
      const relatedPlatforms = this.associatedRelation.split(", ");
      return this.apiStore?.games?.filter((game) =>
        relatedPlatforms.includes(game.platform)
      ) || [];
    },
  },
  methods: {
    getRelation(platform) {
      const associations = {
        "pc-windows": "PC (Windows)",
        "web-browser": "Web Browser",
        "pc-windows-web-browser": "PC (Windows), Web Browser",
      };

      return associations[platform] || platform;
    },
    async fetchGamesByPlatform() {
      if (!this.apiStore) {
        console.error("El store no está inicializado.");
        return;
      }

      if (!this.apiStore.games.length) {
        try {
          await this.apiStore.fetchGames("games");
        } catch (error) {
          console.error("Error al obtener los juegos:", error);
        }
      }
    },
  },
  mounted() {
    this.fetchGamesByPlatform();
  },
  watch: {
    "$route.params.platform": {
      immediate: true,
      handler() {
        this.fetchGamesByPlatform();
      },
    },
  },
};
</script>


<style></style>
