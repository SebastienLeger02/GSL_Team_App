<template class="bg-color">
  <section class="bg-[#3e0b42] relative pt-[50px] pb-[80px] flex items-center justify-center min-h-screen flex-col">
    <div class="image-container relative flex items-center justify-center w-[300px] h-[300px]">
      <!-- neon-ring absolute w-[200px] h-[200px] rounded-full -->
      <img src="../assets/circle-neon.png" alt="Image Logo Circle GSL _ Game App"
        class="image-a absolute w-full h-full" />
      <img src="../assets/logo_gsl.png" alt="Image Logo GSL _ Game App" class="image-b" />
    </div>
    <h1 class="hidden">Project : GSL _ Game App</h1>
    <p class="text-color w-[45%] text-center pt-4 text-slate-100">
      Estamos desarrollando una aplicación web sobre videojuegos con Vue.js,
      Tailwind CSS y una API para el backend. La plataforma permitirá explorar
      juegos con descripciones y especificaciones detalladas. Antes del
      desarrollo, creamos prototipos y diagramas para asegurar una experiencia
      intuitiva y una arquitectura sólida. Un equipo de tres desarrolladores
      colabora estrechamente para llevar a cabo el proyecto.
    </p>

    <section class="text-color grid grid-cols-3 grid-rows-1 gap-6 pt-14 mx-[20%]">
      <div v-for="(game, index) in limitedGames" :key="index"
        class="w-[250px] h-[100%] flex flex-col justify-self-center rounded-2xl">
        <div v-show="game">
          <img class="rounded-t-2xl" :src="game.thumbnail" :alt="game.title" />
          <h2 class="text-2xl font-bold mx-2">{{ game.title }}</h2>
          <p class="text-sm mt-[-6px] mb-3 mx-2">{{ game.genre }}</p>
          <p class="mx-2">{{ game.short_description }}</p>
        </div>
      </div>
    </section>
  </section>
</template>

<!-- <script>
import { useApiStore } from "../stores/apiStore";

export default {
  name: "Header",
  data() {
    return {
      limit: 3,
    };
  },
  computed: {
    // Obtener los juegos ordenados desde el store, limitado a la cantidad especificada
    //   gamesOrdered(index) {
    //   const gameStore = useApiStore();
    //   return gameStore.orderby[index];
    // },
  },
  methods: {
    gamesOrdered(index) {
      const gameStore = useApiStore();
      console.log(gameStore.orderby[index]);
      return gameStore.orderby[index];
    },
  },
};
</script> -->
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
.text-color {
  color: rgb(252, 252, 252);
}

@keyframes spinY {
  0% {
    transform: rotateY(0deg);
  }

  100% {
    transform: rotateY(360deg);
  }
}

/* .image-container {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 300px;
  height: 300px;
} */


.image-container .image-a {
  position: absolute;
  width: 100%;
  height: 100%;
  animation: spinY 4s linear infinite;
  z-index: 2;
}


.image-container .image-b {
  position: absolute;
  width: 60%;
  height: 20%;
  z-index: 1;
}
</style>
