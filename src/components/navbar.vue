<template>
    <section class="px-4 py-2">
        <div class="flex items-center justify-between">
            <img class="w-20 h-20" src="../assets/logo.png" alt="GSL Gane App">
            <div class="flex space-x-6 items-center">
                <!-- Dropdown Plataforma -->
                <div class="relative group">
                    <button class="text-gray-700 hover:text-black font-semibold flex items-center">
                        Plataforma
                        <svg class="w-4 h-4 ml-1" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                        </svg>
                    </button>
                    <ul
                        class="absolute hidden group-hover:block bg-white shadow-md rounded mt-2 p-2 min-w-[150px] z-10">
                        <li v-for="platform in platforms" :key="platform"
                            class="hover:bg-gray-100 px-4 py-2 text-gray-700">
                            {{ platform }}
                        </li>
                    </ul>
                </div>
                
                
                <div class="relative group">
                    <button class="text-gray-700 hover:text-black font-semibold flex items-center">
                        Categorías
                        <svg class="w-4 h-4 ml-1" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                        </svg>
                    </button>
                    <ul
                        class="absolute hidden group-hover:block bg-white shadow-lg rounded mt-2 p-2 min-w-[150px] z-10">
                        <li v-for="category in categories" :key="category" class="hover:bg-gray-100 p-2">
                            {{ category }}
                        </li>
                    </ul>
                </div>
                <div>
                    <a href="#" class="text-blue-500">Blog</a>
                </div>
            </div>
            <!-- Otros enlaces -->
            <div class="flex space-x-6 items-center">
                <div class="relative">
            <label class="sr-only" for="search">Search</label>
            <input type="search" placeholder="Find a game" id="search"
              class="w-58 h-8 p-5 border-2 border-gray-400 font-gilroyregular text-lg rounded-full bg-gray-600/70 placeholder:text-white">
            <div class="absolute top-1 right-1">
              <img class="w-9 h-9" src="../assets/search-icon.svg" alt="Search Icon" aria-hidden="true">
            </div>
          </div>

                    <!-- <a href="#" class="text-blue-500">Search</a> -->
                    <a href="#" class="text-gray-700 hover:text-black">GitHub</a>
            </div>
        </div>
    </section>
    <div class="container-full h-[1000px] bg-color"></div>
</template>

<script>
import { useApiStore } from "../stores/apiStore";

export default {
    name: "Navbar",
    data() {
        return {
            // Seteamos como array vacio las propiedades a usar en el navbar
            platforms: [],
            categories: [],
        };
    },
    async mounted() {
        // Usamos el store de Pinia para obtener los datos
        const gameStore = useApiStore();

        try {
            // Llamada a la API desde el store - Le pasamos como agumento el nombre del endpoint al cual llamaremos
            await gameStore.fetchGames("games");

            // Sincronizamos los datos del store con el estado local del componente
            // Lo llamamos gameStore porque llamamos al endpoint general de games
            // Cogemos las plataformas y las categorias para los menus desplegables del navbar
            this.platforms = gameStore.platforms;
            this.categories = gameStore.categories;

            console.log("platforms: ", this.platforms);
            console.log("categorias: ", this.categories);
        } catch (error) {
            console.error("Error al obtener los datos desde el store:", error);
        }
    },
};
</script>

<style scoped>
section {
    background: var(--Gradiente-Radial, radial-gradient(270.17% 139.44% at 99.27% 1%, #483c9e 0%, #68088b 31.27%, #6c2c4a 65.27%, #000 99.77%));
    color: #fff;
    font-weight: 600;
    border-bottom: 2px solid #8cb7eb;
}

button:hover+ul,
ul:hover {
    display: block;
}

.container-full {
    background-color: #1B001E;
}
</style>