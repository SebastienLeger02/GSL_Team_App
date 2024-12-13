<template>
    <section class="bg-color-thirty">
    <div
        class="grid sm:grid-cols-1 md:grid-cols-2 border-solid border-4 rounded-lg custom-shadow my-12 mx-auto max-w-[95%] md:max-w-[800px] lg:max-w-[1000px] p-4 items-center gap-6 text-white">
        <!-- Columna izquierda -->
        <div class="text-center md:text-left px-4">
            <h1 class="font-jaro font-bold text-shadow text-center md:text-left text-[40px] lg:text-[60px] pt-2">Game
                App</h1>
            <p class="font-urbanist text-justify pt-4 text-sm md:text-base">
                Estamos creando una aplicación web enfocada en videojuegos, utilizando una stack tecnológica moderna
                compuesta por Vue.js y Tailwind CSS, junto con una API para el backend. <br><br>
                La plataforma permitirá a los usuarios explorar una amplia selección de videojuegos, proporcionando
                información detallada como descripciones, especificaciones y características clave.
                Antes de iniciar el desarrollo, hemos trabajado en prototipos y diagramas de flujo para diseñar una
                experiencia de usuario intuitiva y estable.
            </p>
            <div class="flex flex-wrap justify-center md:justify-start gap-4 pt-6 pb-6">
                <button class="font-jaro border-2 border-[#5271ff] px-4 py-2 rounded hover:bg-[#ff00ff]">
                    Contact</button>
                <button class="font-jaro border-2 border-[#5271ff] px-4 py-2 rounded hover:bg-[#ff00ff]">
                    Github</button>
            </div>
        </div>

        <!-- Columna derecha -->
        <div class="flex justify-center items-center">
            <img src="../assets/logo.png" alt="Logo" class="w-[250px] sm:w-[300px] md:w-[350px] lg:w-[400px] max-w-full">
        </div>
    </div>
</section>
</template>
<script>
export default {
  name: "GameAppCard",
};
</script>

<style scoped>
</style>
