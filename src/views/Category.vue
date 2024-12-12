<template>
  <div>
    <Navbar />
    <h2 class="text-2xl font-bold">Category: {{ category }}</h2>
    <p class="text-lg">Asociación: {{ associatedRelation }}</p>

    <div v-if="filteredGames.length">
      <h3 class="text-xl font-semibold mt-4">Juegos en la categoría: {{ associatedRelation }}</h3>
      <ul>
        <li v-for="game in filteredGames" :key="game.id" class="py-2">
          <router-link :to="`/game?id=${game.id}`">{{ game.title }}</router-link>
        </li>
      </ul>
    </div>
    <p v-else class="mt-4 text-gray-500">No hay juegos disponibles para esta categoría.</p>
  </div>
</template>

<script>
import Carrusel from "../components/Carrusel.vue";
import Navbar from "../components/Navbar.vue";
export default {
  name: "Category",
  components: {
    Navbar,
    Carrusel
  },
};
</script>

<style>

</style>