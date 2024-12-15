<template>
  <div class="bg-color-thirty">
    <div v-if="loading">
      <Spinner />
    </div>
    <div v-else>
      <navbar />
      <section class="h-screen bg-gradient text-color-first">
        <section class="flex flex-col items-center gap-5 pt-[3%] px-4">
          <h1 class="text-4xl md:text-6xl font-bold text-center">Team Dev</h1>
          <p class="text-lg md:text-2xl text-center">
            Esta plataforma es el resultado del trabajo colaborativo de nuestro
            equipo de desarrollo.
          </p>
        </section>

        <!-- Section Perfil -->
        <section
          class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-6 md:px-[5%] mt-20"
        >
          <!-- Perfil Lenin -->
          <div class="flex flex-col items-center text-center">
            <img
              class="w-[150px] md:w-[200px] rounded-full mb-6 shadow-[0px_2px_45px_5px_rgba(62,11,66,1)]"
              src="../../public/DevPictures/Lenin-Ruiz.jpg"
              alt="Foto Lenin Ruiz"
            />
            <h3 class="text-2xl md:text-4xl font-bold mb-4">Lenin Ruiz</h3>
            <p class="text-sm md:text-base lg:mx-20">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nisi
              totam enim adipisci sequi labore facilis aliquam corrupti, ipsa
              dolor, quas minus?
            </p>
            <div class="flex items-center gap-4 mt-4">
              <a href="#">
                <img
                  class="w-6 md:w-8 lg:w-auto"
                  src="../assets/github-icon.svg"
                  alt="Repository Github Lenin"
                />
              </a>
              <a href="#">
                <img
                  class="w-6 md:w-8 lg:w-auto"
                  src="../assets/linkedin-icon.svg"
                  alt="Linkedin Lenin"
                />
              </a>
            </div>
          </div>

          <!-- Perfil Gerard -->
          <div class="flex flex-col items-center text-center">
            <img
              class="w-[150px] md:w-[200px] rounded-full mb-6 shadow-[0px_2px_45px_5px_rgba(62,11,66,1)]"
              src="../../public/DevPictures/Gerard-Macias.jpg"
              alt="Foto Gerard Macias"
            />
            <h3 class="text-2xl md:text-4xl font-bold mb-4">Gerard Macias</h3>
            <p class="text-sm md:text-base lg:mx-20">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nisi
              totam enim adipisci sequi labore facilis aliquam corrupti, ipsa
              dolor, quas minus?
            </p>
            <div class="flex items-center gap-4 mt-4">
              <a href="#" class="">
                <img
                  class="w-6 md:w-8 lg:w-auto"
                  src="../assets/github-icon.svg"
                  alt="Repository Github Gerard"
                />
              </a>
              <a href="#">
                <img
                  class="w-6 md:w-8 lg:w-auto"
                  src="../assets/linkedin-icon.svg"
                  alt="Linkedin Gerard"
                />
              </a>
            </div>
          </div>

          <!-- Perfil Sebastien -->
          <div class="flex flex-col items-center text-center">
            <img
              class="w-[150px] md:w-[200px] rounded-full mb-6 shadow-[0px_2px_45px_5px_rgba(62,11,66,1)]"
              src="../../public/DevPictures/Sebastien-Leger.png"
              alt="Foto Gerard Sébastien"
            />
            <h3 class="text-2xl md:text-4xl font-bold mb-4">Sébastien Léger</h3>
            <p class="text-sm md:text-base lg:mx-20">
              
              Desarrollador front-end apasionado por la tecnología y el diseño, con el objetivo de alcanzar la maestría en el área.
            </p>
            <div class="flex items-center gap-4 mt-4">
              <a href="https://github.com/SebastienLeger02">
                <img
                  class="w-6 md:w-8 lg:w-auto"
                  src="../assets/github-icon.svg"
                  alt="Repository Github Sébastien"
                />
              </a>
              <a href="https://www.linkedin.com/in/sebastien-dev/">
                <img
                  class="w-6 md:w-8 lg:w-auto"
                  src="../assets/linkedin-icon.svg"
                  alt="Linkedin Sébastien"
                />
              </a>
            </div>
          </div>
        </section>
      </section>
    </div>
  </div>
</template>

<script>
import Navbar from "../components/Navbar.vue";
import Spinner from "../components/Spinner.vue";

export default {
  name: "TeamDev",
  data() {
    return {
      loading: true,
    };
  },
  components: {
    Spinner,
    Navbar,
  },
  mounted() {
    setTimeout(() => {
      this.loading = false;
    }, 2000);
  },
};
</script>

<style></style>
