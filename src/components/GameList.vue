<template>
    <div class="container mx-auto px-4 py-10 bg-background-default">
      <h1 class="text-2xl font-bold mb-4 text-white">List Game</h1>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div v-for="(item, index) in items" :key="index" class="bg-gray-800 shadow-md rounded-lg p-4">
          <div class="h-32 rounded-md mb-4"></div>
          <p class="text-sm text-gray-200">Category</p>
          <h2 class="font-semibold text-lg text-gray-100">Article Title</h2>
          <p class="text-gray-300 text-sm">Excepteur elit occaecat qui ex pariatur aliquip vitae laboris.</p>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: "GameList",
    data() {
      return {
        items: Array(8).fill({}) // Simula una lista de 8 elementos
      };
    }
  };
  </script>
  
  <style scoped>
  .container {
    max-width: 1200px;
  }
  </style>
  