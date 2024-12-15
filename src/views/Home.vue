<template>
  <div class="bg-color-thirty">
    <div v-if="loading">
      <Spinner />
    </div>
    <div v-else>
      <Navbar />
      <Header />
      <GameAppCard />
      <GameDatabaseOverview />
      <CategoryList :isCategory="true" />
      <FooterSection />
    </div>
  </div>
</template>

<script>
import Spinner from "../components/Spinner.vue";
import Carrusel from "../components/Carrusel.vue";
import Navbar from "../components/Navbar.vue";
import Header from "../components/Header.vue";
import GameAppCard from "../components/GameAppCard.vue";
import GameDatabaseOverview from "../components/GameDatabaseOverview.vue";
import CategoryList from "../components/CategoryList.vue";
import FooterSection from "../components/FooterSection.vue";

export default {
  name: "Home",
  data() {
    return {
      loading: true,
    };
  },
  components: {
    Spinner,
    Navbar,
    Carrusel,
    Header,
    GameAppCard,
    GameDatabaseOverview,
    CategoryList,
    FooterSection,
  },
  mounted() {
    setTimeout(() => {
      this.loading = false;
    }, 1500);
  },
};
</script>

<style scoped></style>
