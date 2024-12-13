<template>
  <div class="bg-background-thirty">
    <Navbar />
    <Header />
    <GameAppCard />
    <GameDatabaseOverview />
    <CategoryList :isCategory="true" />
    <FooterSection />


  </div>
  
</template>

<script>
import Carrusel from "../components/Carrusel.vue";
import Navbar from "../components/Navbar.vue";
import Header from "../components/Header.vue";
import GameAppCard from "../components/GameAppCard.vue";
import GameDatabaseOverview from "../components/GameDatabaseOverview.vue";
import CategoryList from "../components/CategoryList.vue";
import FooterSection from "../components/FooterSection.vue";

export default {
  name: "Home",
  components: {
    Navbar,
    Carrusel,
    Header,
    GameAppCard,
    GameDatabaseOverview,
    CategoryList,
    FooterSection
  },
};
</script>

<style scoped></style>
