<template class="bg-color">
  <section class=" bg-gradient relative pt-[50px] pb-[13%] flex items-center justify-center min-h-screen flex-col"> <!-- bg-[#3e0b42] -->
    <div class="image-container relative flex items-center justify-center w-[300px] h-[300px]">
      <img src="../assets/circle-neon.png" alt="Image Logo Circle GSL _ Game App"
        class="image-a absolute w-full h-full z-20" />
      <img src="../assets/logo_gsl.png" alt="Image Logo GSL _ Game App" 
        class="image-b absolute w-[60%] h-[20%] z-10" />
    </div>
    <h1 class="hidden">Project : GSL _ Game App</h1>
    <p class=" w-[45%] text-center pt-4 text-color-first">
      Estamos desarrollando una aplicación web sobre videojuegos con Vue.js,
      Tailwind CSS y una API para el backend. La plataforma permitirá explorar
      juegos con descripciones y especificaciones detalladas. Antes del
      desarrollo, creamos prototipos y diagramas para asegurar una experiencia
      intuitiva y una arquitectura sólida. Un equipo de tres desarrolladores
      colabora estrechamente para llevar a cabo el proyecto.
    </p>
    

   <!--  <section class="text-color grid grid-cols-3 grid-rows-1 gap-6 pt-14 mx-[20%]">
      <div v-for="(game, index) in limitedGames" :key="index"
        class="w-[250px] h-[100%] flex flex-col justify-self-center rounded-2xl">
        <div v-show="game" class="rounded-[14px] border border-solid border-[#3e0b42] pb-[25px] bg-[#3e0b42]">
          <img class="rounded-t-2xl" :src="game.thumbnail" :alt="game.title" />
          <h2 class="text-2xl font-bold mx-2">{{ game.title }}</h2>
          <p class="text-sm mt-[-6px] mb-3 mx-2">{{ game.genre }}</p>
          <p class="mx-2">{{ game.short_description }}</p>
        </div>
      </div>
    </section> -->
  </section>
  <section class="h-[20em] w-full bg-color-thirty">
 <section class="text-color-first grid grid-cols-3 grid-rows-1 gap-6 pt-14 mx-[20%] absolute top-[575px]">
      <div v-for="(game, index) in limitedGames" :key="index"
        class="w-[250px] h-[100%] flex flex-col justify-self-center rounded-2xl">
        <div v-show="game" class="rounded-[18px] border border-solid border-color-secondary h-80 bg-color-secondary">
          <router-link :to="`/game?id=${game.id}`">
            <img class="rounded-t-2xl" :src="game.thumbnail" :alt="game.title" />
          </router-link>
          <h2 class="text-2xl font-bold mx-2">{{ game.title }}</h2>
          <p class="text-sm mt-[-6px] mb-3 mx-2">{{ game.genre }}</p>
          <p class="mx-2">{{ game.short_description }}</p>
        </div>
      </div>
    </section>
  </section>
</template>

<script>
import { useApiStore } from "../stores/apiStore";
export default {
  name: "Header",
  data() {
    return {
      limit: 3, // Número máximo de juegos a mostrar
    };
  },
  computed: {
    // Computed que filtra y devuelve los primeros N juegos
    limitedGames() {
      const gameStore = useApiStore();
      return gameStore.orderby?.slice(0, this.limit) || []; // Maneja el caso donde orderby no está definido
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