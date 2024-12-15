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
    <CategoryList />
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
    FooterSection
  },
    mounted() {
    // Simuler un délai de chargement avec setTimeout ou attendre que les données soient récupérées
    // Par exemple, si tu fais une requête API, tu attendras que celle-ci soit terminée

    setTimeout(() => {
      // Une fois le délai écoulé ou les données récupérées, on met à jour loading à false
      this.loading = false;
    }, 1500); // ici, on attend 3 secondes pour simuler un chargement (remplacer avec ton propre code logique)

    // Exemple si tu fais un fetch() ou un appel API pour récupérer des données :
    /*
    this.fetchData();
    */
  },
};
</script>

<style scoped></style>
