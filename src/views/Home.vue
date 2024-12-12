<template>
  <div>
    <Navbar />
    <Carrusel />
    <Header />
  </div>
  
</template>

<script>
import Carrusel from "../components/Carrusel.vue";
import Navbar from "../components/Navbar.vue";
import Header from "../components/Header.vue";


export default {
  name: "Home",
  components: {
    Navbar,
    Carrusel,
    Header,
  },
};
</script>

<style scoped></style>
