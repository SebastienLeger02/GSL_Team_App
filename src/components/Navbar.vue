<template>
    <section class="px-4 py-2">
        <div class="flex items-center justify-between">
            <img class="w-28 h-9" src="../assets/logo_gsl.png" alt="GSL Gane App">
            <div class="flex space-x-6 items-center">
                <!-- Dropdown Plataforma -->
                <div class="relative group">
                    <button class="text-gray-700 font-semibold flex items-center" @mouseover="showPlatform = true"
                        @mouseleave="showPlatform = false">
                        Plataforma
                        <svg class="w-4 h-4 ml-1" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                        </svg>
                    </button>
                    <div v-show="showPlatform"
                        class="absolute w-[300px] shadow-lg rounded z-50 grid grid-cols-1 gap-2 cursor-pointer py-4 bg-bg-color/70"
                        @mouseover="showPlatform = true" @mouseleave="showPlatform = false">
                        <a class="whitespace-nowrap p-1" v-for="platform in platforms" :key="platform">
                            {{ platform }}
                        </a>
                    </div>
                </div>


                <div class="relative group">
                    <button class="text-gray-700 font-semibold flex items-center" @mouseover="showCategory = true"
                        @mouseleave="showCategory = false">
                        Categorías
                        <svg class="w-4 h-4 ml-1" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                        </svg>
                    </button>
                    <div v-show="showCategory"
                        class="absolute w-[600px] shadow-lg rounded z-50 grid grid-cols-3 grid-rows-5 gap-2 cursor-pointer py-4 bg-bg-color/70"
                        @mouseover="showCategory = true" @mouseleave="showCategory = false">
                        <a class="whitespace-nowrap p-1" v-for="category in categories" :key="category">
                            {{ category }}
                        </a>
                    </div>
                </div>
                <div>
                    <a href="#" class="text-blue-500">Blog</a>
                </div>
            </div>
            <!-- Otros enlaces -->

            <!-- Buscador -->
            <div class="flex space-x-6 items-center">
                <div class="relative">
                    <label class="sr-only" for="search">Search</label>
                    <input type="search" v-model="searchQuery" @input="onSearch" placeholder="Find a game" id="search"
                        class="input-search w-58 h-8 p-5 border-2 border-gray-400 font-gilroyregular text-base rounded-full bg-gray-600/70 placeholder:text-slate-400" />
                    <div class="absolute top-1 right-1">
                        <img class="w-9 h-9 sepia" src="../assets/search-icon.svg" alt="Search Icon" aria-hidden="true">
                    </div>
                    <ul v-if="suggestions.length" class="absolute bg-white shadow-lg rounded-mg ml-[6%] w-[89%] p-2 z-10 bg-bg-color/70">
                        <!-- padding 6 width 90 -->
                        <li v-for="(name, index) in suggestions" :key="index" @click="selectSuggestion(name)"
                            class="hover:bg-gray-100 px-4 py-2 text-gray-700 cursor-pointer">
                            {{ name }}
                        </li>
                    </ul>
                </div>

                <!-- <a href="#" class="text-blue-500">Search</a> -->
                <a href="#" class="text-gray-700 hover:text-black">GitHub</a>
            </div>
        </div>
        <!-- Resultados de búsqueda -->
        <div v-if="gameById" class="mt-4">
            <h3 class="font-bold">Resultados:</h3>
            <ul>
                <li>{{ gameById.title }} ({{ gameById.screenshots[0].image }})</li>
            </ul>
        </div>
    </section>
    <!-- <div class="container-full h-[1000px] bg-color"></div> -->
</template>

<script>


import { useApiStore } from "../stores/apiStore";

export default {
    name: "Navbar",
    data() {
        return {
            showPlatform: false, // Estado para controlar la visibilidad del contenido
            showCategory: false, // Estado para controlar la visibilidad del contenido
            searchQuery: "", // Almacena el texto del buscador
            suggestions: [], // Sugerencias para autocompletar
        };
    },
    computed: {
        // Acceso a los getters del store
        platforms() {
            return useApiStore().platforms;
        },
        categories() {
            return useApiStore().categories;
        },
        gameStore() {
            return useApiStore();
        },
        gameById() {
            return this.gameStore.gameById;
        },
    },
    mounted() {
        if (!this.gameStore.games.length) {
            this.gameStore.fetchGames("games");
        }
},
methods: {
    onSearch() {
        // Si el campo de búsqueda está vacío, vaciar las sugerencias
        if (!this.searchQuery.trim()) {
            this.suggestions = [];
            return;
        }

        this.suggestions = this.gameStore.games
            .map((game) => game.title)
            .filter((name) => name.toLowerCase().includes(this.searchQuery.toLowerCase()));
    },
    selectSuggestion(name) {
        const selectedGame = this.gameStore.games.find((game) => game.title === name);
        if (selectedGame) {
            this.gameStore.fetchGames(`game?id=${selectedGame.id}`);
        }
        this.searchQuery = "";
        this.suggestions = [];
    },
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

.input-search {
    color: #151516;
}

button:hover+ul,
ul:hover {
    display: block;
}

.container-full {
    background-color: #1B001E;
}
</style>