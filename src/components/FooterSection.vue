<template>
    <section class="bg-gray-200 py-8">
      <div class="max-w-6xl mx-auto px-4">
        <div class="flex justify-between items-start">
          <!-- Logo -->
          <div class="text-4xl font-bold text-gray-800 transform -rotate-90">Logo</div>
  
          <!-- Navigation Links -->
          <div class="flex space-x-16">
            <!-- Categories -->
            <div>
              <h3 class="text-lg font-semibold text-gray-800 border-b-2 border-blue-500 pb-2 mb-4">Category</h3>
              <ul class="space-y-2 text-gray-600">
                <li><a href="#" class="hover:text-blue-600">Category</a></li>
                <li><a href="#" class="hover:text-blue-600">Category</a></li>
                <li><a href="#" class="hover:text-blue-600">Category</a></li>
                <li><a href="#" class="hover:text-blue-600">Category</a></li>
              </ul>
            </div>
  
            <!-- Platforms -->
            <div>
              <h3 class="text-lg font-semibold text-gray-800 border-b-2 border-green-500 pb-2 mb-4">Platform</h3>
              <ul class="space-y-2 text-gray-600">
                <li><a href="#" class="hover:text-green-600">Platform</a></li>
                <li><a href="#" class="hover:text-green-600">Platform</a></li>
                <li><a href="#" class="hover:text-green-600">Platform</a></li>
                <li><a href="#" class="hover:text-green-600">Platform</a></li>
              </ul>
            </div>
  
            <!-- Other Links -->
            <div>
              <ul class="space-y-4 text-gray-800 font-semibold">
                <li><a href="#" class="hover:text-gray-600">Home</a></li>
                <li><a href="#" class="hover:text-gray-600">Contact</a></li>
                <li><a href="#" class="hover:text-gray-600">Github</a></li>
              </ul>
            </div>
          </div>
        </div>
  
        <!-- Footer -->
        <div class="mt-12 text-center text-gray-600 text-sm">
          <p>Project from: Gerard Macias, Lenin Ruiz, Sébastien Léger</p>
          <p>CODEOP - FEPT07 - 2024</p>
        </div>
      </div>
    </section>
  </template>
  
  <script>
  export default {
    name: "FooterSection",
  };
  </script>
  
  <style scoped>
  </style>
  