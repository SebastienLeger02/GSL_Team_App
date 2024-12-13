<template>
  <section class="text-center py-12 bg-color-thirty text-slate-100">
    <h1 class="text-2xl font-bold mb-4">
      La base de datos más grande de juegos
    </h1>
    <p class="text-gray-300 max-w-2xl mx-auto mb-8">
      Rhoncus morbi et augue nec, in id ullamcorper at sit. Condimentum sit nunc
      in eros scelerisque sed. Commodo in viverra nunc, ullamcorper ut. Non,
      amet, aliquet scelerisque nullam sagittis, pulvinar. Fermentum scelerisque
      sit consectetur hac mi. Mollis leo eleifend ultricies purus iaculis.
    </p>
    <div class="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl mx-auto">
      <!-- Item 1 -->
      <div class="flex flex-col items-center shadow-md rounded-lg p-6">
        <div class="text-4xl text-gray-700 mb-2">😊</div>
        <p class="text-xl font-bold text-gray-100">250+</p>
        <p class="text-gray-400">juegos</p>
      </div>
      <!-- Item 2 -->
      <div class="flex flex-col items-center shadow-md rounded-lg p-6">
        <div class="text-4xl text-gray-700 mb-2">📂</div>
        <p class="text-xl font-bold text-gray-100">600+</p>
        <p class="text-gray-400">categorías</p>
      </div>
      <!-- Item 3 -->
      <div class="flex flex-col items-center shadow-md rounded-lg p-6">
        <div class="text-4xl text-gray-700 mb-2">🍕</div>
        <p class="text-xl font-bold text-gray-100">1.8K+</p>
        <p class="text-gray-400">plataformas</p>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "GameDatabaseOverview",
};
</script>

<style scoped></style>
