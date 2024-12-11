<template class="bg-color">
  <section class="bg-[#1b1b22e6] z-[-10] relative pt-[70px] flex items-center justify-center min-h-screen flex-col">
    <div class="neon-ring-container relative w-[200px] h-[200px] flex justify-center items-center">
      <div class="neon-ring absolute w-[200px] h-[200px] rounded-full"></div> 
      <img
        src="../assets/logo_gsl.png"
        alt="Image Logo GSL _ Game App"
        class="absolute w-[160px] h-auto z-[1]"
      />
    </div>
    <h1 class="hidden">Project : GSL _ Game App</h1>
    <p class="text-color w-[44em] text-center pt-4 text-slate-100">
      Estamos desarrollando una aplicación web sobre videojuegos con Vue.js,
      Tailwind CSS y una API para el backend. La plataforma permitirá explorar
      juegos con descripciones y especificaciones detalladas. Antes del
      desarrollo, creamos prototipos y diagramas para asegurar una experiencia
      intuitiva y una arquitectura sólida. Un equipo de tres desarrolladores
      colabora estrechamente para llevar a cabo el proyecto.
    </p>
  </section>
</template>

<script>
export default {
  name: "Header",
  data() {
    return {};
  },
};
</script>

<style>
/* 
@keyframes rotateY {
      0% {
        transform: rotateY(0deg);
      }
      100% {
        transform: rotateY(360deg);
      }
    }

   .neon-ring {
      position: relative;
      width: 200px;
      height: 200px;
      border-radius: 50%;
      background: conic-gradient(from 0deg, #ff0080, #00ffff,#ff0080); 
      mask: radial-gradient(circle, transparent 65%, black 61%);
      -webkit-mask: radial-gradient(circle, transparent 65%, black 70%);
      animation: rotateY 4s linear infinite;      
    } */
.text-color {
  color: rgb(252, 252, 252);
}

@keyframes rotateY {
  0% {
    transform: rotateY(0deg);
  }
  100% {
    transform: rotateY(360deg);
  }
}

.neon-ring {
 /*  background: conic-gradient(from 0deg, #ff0080, #00ffff, #ff0080);
  mask: radial-gradient(circle, transparent 65%, black 61%);
  -webkit-mask: radial-gradient(circle, transparent 65%, black 70%); */
  background-image:url("../assets/circle-neon.png");
  background-repeat: no-repeat;
  animation: rotateY 4s linear infinite;
  
}

/* Ombre lumineuse via pseudo-élément */
.neon-ring-container::after {
  content: "";
  position: absolute;
  top: -10%;
  left: -10%;
  width: 120%;
  height: 120%;
  border-radius: 50%;
  background: conic-gradient(
    rgba(255, 0, 128, 0.6),
    rgba(0, 255, 255, 0.6),
    rgba(255, 0, 128, 0.6)
  );
  filter: blur(30px); /* Ombre lumineuse floue */
  z-index: -1; /* Derrière l'anneau */
}
</style>
