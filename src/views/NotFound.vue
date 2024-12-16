<template>

  <section class="a bg-gradient  flex flex-col justify-center items-center h-screen w-screen">
    <h3 class="text-color-fifth text-2xl font-semibold ">error</h3>
    <h1 class="text-[12em] font-semibold text-stroke text-transparent leading-[0.7] ">404</h1>
    <p class="pt-8 text-color-first text-2xl">This page is not found, try another or return to the home.</p>
    <router-link :to="'/'"
      class="mt-8 text-xl text-color-first font-jaro border-2 border-color-fourth px-4 py-2 rounded hover:bg-color-fifth hover:scale-105 transition-all duration-500 hover:shadow-[0px_2px_45px_5px_rgba(108,218,251,1)]">
      Home</router-link>
  </section>
</template>

<script>
export default {
  name: "NotFound",
  data() {
    return {

    }

  }

}
</script>

<style>
.text-stroke {
  -webkit-text-stroke: 1px #6CDAFB;
}

.a {
  background-image: url(../assets/circle-neon.png),
    radial-gradient(270.17% 139.44% at 99.27% 1%,
      #483c9e 0%,
      #68088b 31.27%,
      #bc168d 65.27%,
      #000 99.77%);
  background-position: center, center;
  background-repeat: no-repeat, no-repeat;
  background-size: cover;

}
</style>