<template>
  <div>
    <Navbar />
    <Carrusel />
  </div>
  
</template>

<script>
import Carrusel from "../components/Carrusel.vue";
import Navbar from "../components/Navbar.vue";

export default {
  name: "Home",
  components: {
    Navbar,
    Carrusel
  },
};
</script>

<style scoped></style>
