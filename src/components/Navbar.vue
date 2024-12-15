<template>
    <section class="px-4 py-2 bg-color-secondary">
        <div class="flex items-center justify-between">
            <router-link to="/">
                <img class="w-28 h-9" src="../assets/logo_gsl.png" alt="GSL Gane App">
            </router-link>
            <div class="flex space-x-6 items-center text-slate-200">
                <!-- Dropdown Plataforma -->
                <div class="relative group">
                    <button class="flex items-center" @mouseover="showPlatform = true"
                        @mouseleave="showPlatform = false">
                        Plataforma
                        <svg class="w-4 h-4 ml-1" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                        </svg>
                    </button>
                    <div v-show="showPlatform"
                        class="absolute w-[300px] shadow-lg rounded z-50 grid grid-cols-1 gap-2 cursor-pointer py-4 bg-color-thirty/70"
                        @mouseover="showPlatform = true" @mouseleave="showPlatform = false">
                        <router-link v-for="platform in apiStore.platforms" :key="platform"
                            :to="`/platform/${formatToUrl(platform)}`" class="whitespace-nowrap p-1">
                            {{ platform }}
                        </router-link>
                    </div>
                </div>


                <div class="relative group">
                    <button class="flex items-center" @mouseover="showCategory = true"
                        @mouseleave="showCategory = false">
                        Categorías
                        <svg class="w-4 h-4 ml-1" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                        </svg>
                    </button>
                    <div v-show="showCategory"
                        class="absolute w-[600px] shadow-lg rounded z-50 grid grid-cols-3 grid-rows-5 gap-2 cursor-pointer py-4 bg-color-thirty/70"
                        @mouseover="showCategory = true" @mouseleave="showCategory = false">
                        <router-link v-for="category in apiStore.categories" :key="category"
                            :to="`/category/${formatToUrl(category)}`" class="whitespace-nowrap p-1">
                            {{ category }}
                            <!-- {{ console.log("categoria: ", category, " relacion: ", formatToUrl(category)) }} -->
                        </router-link>
                    </div>
                </div>
                <div>
                    <a href="#">Contact</a>
                </div>
            </div>

            <!-- Buscador -->
            <div class="flex space-x-6 items-center">
                <div class="relative">
                    <label class="sr-only" for="search">Search</label>
                    <input type="search" autocomplete="off" v-model="searchQuery" @input="onSearch"
                        @keyup.enter="navigateToFirstSuggestion" placeholder="Find a game" id="search"
                        class="w-58 h-8 p-5 border-2 border-gray-400 text-slate-200 font-gilroyregular text-base rounded-full bg-gray-600/80 placeholder:text-slate-300" />
                    <div class="absolute top-1 right-1" @click="navigateToFirstSuggestion">
                        <img class="w-9 h-9 sepia" src="../assets/search-icon.svg" alt="Search Icon" aria-hidden="true">
                    </div>
                    <ul v-if="suggestions.length"
                        class="absolute shadow-lg rounded-mg ml-[6%] w-[89%] p-2 z-10 bg-color-thirty/70">
                        <li v-for="(name, index) in suggestions" :key="index" @click="navigateToGame(name)"
                            class="hover:bg-gray-500 px-4 py-2 text-gray-200 cursor-pointer">
                            {{ name }}
                        </li>
                    </ul>
                </div>

                <!-- Github Link -->
                <a href="https://github.com/FEPT07/GSL_Team_App" target="_blank" rel="noopener noreferrer"
                    class="text-white-700 hover:text-black flex items-center space-x-2">
                    <img src="../assets/github-icon.svg" alt="GitHub Icon" class="text-white-700 w-8 h-8" />
                    <span>GitHub</span>
                </a>
            </div>
        </div>
    </section>
</template>

<script>


import { useApiStore } from "../stores/apiStore";
import { mapStores } from "pinia";

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
        ...mapStores(useApiStore),
    },
    mounted() {
        if (!this.apiStore.games.length) {
            console.log("Obj apiStore->", this.apiStore.fetchGames("games"));
            this.apiStore.fetchGames("games");
        }
    },
    methods: {
        onSearch() {
            // Si el campo de búsqueda está vacío, vaciar las sugerencias
            if (!this.searchQuery.trim()) {
                this.suggestions = [];
                return;
            }
            this.suggestions = this.apiStore.games
                .map((game) => game.title)
                .filter((name) => name.toLowerCase().includes(this.searchQuery.toLowerCase()));
        },
        navigateToGame(name) {
            const selectedGame = this.apiStore.games.find(
                (game) => game.title === name
            );
            if (selectedGame) {
                this.$router.push(`/game?id=${selectedGame.id}`);
            }
            this.searchQuery = "";
            this.suggestions = [];
        },
        navigateToFirstSuggestion() {
            if (this.suggestions.length > 0) {
                const firstSuggestion = this.suggestions[0];
                this.navigateToGame(firstSuggestion);
            }
        },
        formatToUrl(text) {
            return text
                .toLowerCase() // Convertir todo a minúsculas
                .replace(/\s+/g, "-") // Reemplazar espacios por guiones
                .replace(/[^a-z0-9\-]/g, ""); // Eliminar caracteres no alfanuméricos excepto guiones
        },
    },
};
</script>

<style scoped>
section {
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