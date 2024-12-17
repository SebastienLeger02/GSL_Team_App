<template>
  <section
    class="bg-gradient relative flex items-center justify-center min-h-screen flex-col"
    role="region"
    aria-labelledby="main-logo-heading"
  >
    <div
      class="image-container relative flex items-center justify-center w-[300px] h-[300px] m-12"
    >
      <img
        src="../assets/circle-neon.png"
        alt="Image Logo Circle GSL _ Game App"
        class="image-a absolute w-full h-full z-20"
      />
      <img
        src="../assets/logo_gsl.png"
        alt="Image Logo GSL _ Game App"
        class="image-b absolute w-[60%] h-[20%] z-10"
      />
    </div>
    <h1 id="main-logo-heading" class="hidden">Project: GSL _ Game App</h1>
    <p class="mx-10 md:w-[45%] text-center leading-10 text-color-first text-lg md:text-2xl">
      Aplicación web enfocada en videojuegos, utilizando Vue.js y Tailwind CSS, que se integra con un backend a través de una API.
    </p>
  
    <!-- Game Section -->
    <section
      class="text-color-first grid grid-cols-1 md:grid-cols-3 gap-6 relative top-[5em] mx-[5%] md:mx-[20%] mt-15"
      aria-labelledby="game-section-heading"
    >
      <h2 id="game-section-heading" class="sr-only">Game Section</h2>
      <div
        v-for="(game, index) in limitedGames"
        :key="index"
        class="w-full md:w-[250px] flex flex-col justify-self-center rounded-2xl"
        role="article"
        aria-labelledby="game-title-{{ game.id }}"
      >
        <div
          v-show="game"
          class="rounded-[18px] border border-solid border-color-secondary bg-color-secondary group overflow-hidden"
          @mouseenter="onHover(game.id)"
          @mouseleave="onLeave"
        >
          <router-link :to="`/game?id=${game.id}`" aria-label="Go to {{ game.title }}">
            <!-- Default image -->
            <img
              v-if="!hoveredGameId || hoveredGameId !== game.id || !videoAvailability[game.id]"
              class="rounded-t-2xl transition-all duration-300"
              :src="game.thumbnail"
              :alt="game.title"
            />
            <!-- Hover video -->
            <video
              v-else
              class="featuredvideo3 rounded-t-2xl transition-all duration-300"
              loop
              preload="none"
              muted
              :src="`https://www.freetogame.com/g/${game.id}/videoplayback.webm`"
              aria-label="Gameplay video of {{ game.title }}"
            ></video>
          </router-link>
          <h2 id="game-title-{{ game.id }}" class="text-xl md:text-2xl font-bold mx-2">{{ game.title }}</h2>
          <p class="text-xs md:text-sm mt-[-6px] mb-3 mx-2">{{ game.genre }}</p>
          <p class="text-sm mx-2 mb-5">{{ game.short_description }}</p>
        </div>
      </div>
    </section>
  </section>
  <section class="h-[10em] w-full bg-color-thirty"></section>
</template>

<script>
import { useApiStore } from "../stores/apiStore";

export default {
  name: "Header",
  data() {
    return {
      limit: 3, // Número máximo de juegos a mostrar
      hoveredGameId: null, // ID del juego en el que se hace hover
      videoAvailability: {}, // Almacena si el video está disponible por juego
    };
  },
  computed: {
    // Computed que filtra y devuelve los primeros N juegos
    limitedGames() {
      const gameStore = useApiStore();
      return gameStore.orderby?.slice(0, this.limit) || []; // Maneja el caso donde orderby no está definido
    },
  },
  methods: {
    /**
     * Verifica si un video existe para un juego dado.
     * @param {Number} gameId - El ID del juego.
     */
    async checkVideoAvailability(gameId) {
      const videoUrl = `https://www.freetogame.com/g/${gameId}/videoplayback.webm`;

      try {
        const response = await fetch(videoUrl, { method: "HEAD" });
        this.videoAvailability[gameId] = response.ok; // Actualiza el estado reactivo directamente
      } catch (error) {
        this.videoAvailability[gameId] = false; // Maneja el error marcando el video como no disponible
        console.error(`Error al verificar el video del juego ${gameId}:`, error);
      }
    },

    /**
     * Activa el hover para el juego actual y verifica el video.
     * @param {Number} gameId - ID del juego sobre el que se hace hover.
     */
    async onHover(gameId) {
      this.hoveredGameId = gameId;

      if (!(gameId in this.videoAvailability)) {
        await this.checkVideoAvailability(gameId);
      }
    },

    /**
     * Desactiva el hover.
     */
    onLeave() {
      this.hoveredGameId = null;
    },
  },
};
</script>

<style>
@keyframes spinY {
  0% {
    transform: rotateY(0deg);
  }

  100% {
    transform: rotateY(360deg);
  }
}

.image-a {
  animation: spinY 4s linear infinite;
}
</style>
