<template>
  <!-- <h2 class="text-2xl font-bold">Game {{ $route.query.id }}</h2> -->
  <Navbar />
  <section class="section-principal-game text-color-first bg-color-thirty pt-10">
  <section
    class="grid grid-cols-1 md:grid-cols-2 gap-10 mx-auto max-w-5xl px-4 pt-10 md:pt-28"
  >
    <div class="flex justify-center">
      <img
        v-if="gameDetail"
        :src="gameDetail.thumbnail"
        :alt="gameDetail.title"
        class="w-full md:w-[90%] rounded-2xl"
      />
    </div>
    <div>
      <section class="grid grid-cols-2 grid-rows-4 gap-6 max-w-md mx-auto">
        <div class="col-span-2">
          <h2 class="text-2xl md:text-4xl font-bold text-center md:text-left">
            {{ gameDetail?.title }}
          </h2>
        </div>
        <div class="flex items-center row-start-2">
          <img
            src="../assets/publisher.png"
            :alt="gameDetail?.publisher"
            class="w-7 mr-2.5"
          />
          <p class="font-bold">Publisher :</p>
        </div>
        <div class="flex items-center row-start-2">
          <p>{{ gameDetail.publisher }}</p>
        </div>
        <div class="flex items-center">
          <p>{{ gameDetail.platform }}</p>
        </div>
        <div class="flex items-center row-start-3">
          <img
            src="../assets/os.png"
            :alt="gameDetail.platform"
            class="w-7 mr-2.5"
          />
          <p class="font-bold">OS :</p>
        </div>
        <div class="flex items-center">
          <p>{{ gameDetail.release_date }}</p>
        </div>
        <div class="flex items-center row-start-4">
          <img
            src="../assets/release-date.png"
            :alt="gameDetail.release_date"
            class="w-7 mr-2.5"
          />
          <p class="font-bold">Release date :</p>
        </div>
      </section>
    </div>
  </section>
    
    <section class="mx-[12%]">
      <section class="section-description-game bg-color-secondary p-[5%] mt-24 rounded-[25px]">
        <h3 class="text-xl font-bold">Description:</h3>
        <p class="mt-4">{{ gameDetail.description }}</p>
        
      </section>

      <div v-if="gameDetail.screenshots?.length" class="mt-24">
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
    </section>
    <section class="mx-[22%] my-24">
      <div class="grid grid-cols-2 grid-rows-6 border-2 border-white">
        <div
          class="col-span-2 border-b-2 border-white pl-3 py-1.5 font-bold content-center"
        >
          Minimum System Requirements
        </div>
        <div
          class="row-start-2 border-b-2 border-r-2 border-white pl-3 py-1.5 content-center"
        >
          Graphics
        </div>
        <div
          class="row-start-2 border-b-2 border-white pl-3 py-1.5 content-center"
        >
          <p class="content-center">
            {{ gameDetail.minimum_system_requirements?.graphics }}
          </p>
        </div>
        <div class="border-b-2 border-white pl-3 py-1.5 content-center">
          <p class="content-center">
            {{ gameDetail.minimum_system_requirements?.memory }}
          </p>
        </div>
        <div
          class="row-start-3 border-b-2 border-r-2 border-white pl-3 py-1.5 content-center"
        >
          Memory
        </div>
        <div class="border-b-2 border-white pl-3 py-1.5 content-center">
          <p class="content-center">
            {{ gameDetail.minimum_system_requirements?.os }}
          </p>
        </div>
        <div
          class="row-start-4 border-b-2 border-r-2 border-white pl-3 py-1.5 content-center"
        >
          OS
        </div>
        <div class="border-b-2 border-white pl-3 py-1.5 content-center">
          <p class="content-center">
            {{ gameDetail.minimum_system_requirements?.processor }}
          </p>
        </div>
        <div
          class="row-start-5 border-b-2 border-r-2 border-white pl-3 py-1.5 content-center"
        >
          Processor
        </div>
        <div class="border-b-2 border-white pl-3 py-1.5 content-center">
          <p class="content-center">
            {{ gameDetail.minimum_system_requirements?.storage }}
          </p>
        </div>
        <div
          class="row-start-6 border-b-2 border-r-2 border-white pl-3 py-1.5 content-center"
        >
          Storage
        </div>
      </div>
      <a :href="gameDetail.game_url" target="_blank" class="flex justify-center">
          <button
            class="hidden md:block font-jaro border-2 border-[#5271ff] px-4 py-2 rounded hover:bg-[#ff00ff] mt-8"
          > Download Game
          </button>
        </a>
    </section>
  </section>
  <GameList class="mb-24"/>
  <FooterSection />
</template>

<script>
import { useApiStore } from "../stores/apiStore";
import Navbar from "../components/Navbar.vue";
import Header from "../components/Header.vue";
import GameList from "../components/GameList.vue";
import FooterSection from "../components/FooterSection.vue";

export default {
  name: "Game",
  components: {
    Navbar,
    Header,
    GameList,
    FooterSection,
  },
  data() {
    return {
      gameId: null,
    };
  },
  computed: {
    // Obtener los datos del juego desde el store
    gameDetail() {
      const gameStore = useApiStore();
      console.log("GamesDetail :", gameStore.gameById);
      return gameStore.gameById;
    },
  },
  beforeMount() {
    const gameStore = useApiStore();

    const gameId = this.$route.query.id; // Obtenemos el ID desde la URL
    // Llamar a la API para obtener los detalles del juego

    if (gameId) {
      console.log("ID :", gameStore.fetchGames(`game?id=${gameId}`));
      gameStore.fetchGames(`game?id=${gameId}`);
    }
  },
  watch: {
    // Observar cambios en el ID de la ruta para recargar los datos
    "$route.query.id": function (newId) {
      const gameStore = useApiStore();
      if (newId) {
        gameStore.fetchGames(`game?id=${newId}`);
        console.log("fetchGame: ", gameStore.fetchGames(`game?id=${newId}`));
      }
    },
  },
};
</script>

<style>

</style>
