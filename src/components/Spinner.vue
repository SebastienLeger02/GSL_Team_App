<template>
  <div class="flex justify-center items-center h-full">
    <div class="image-container relative flex items-center justify-center w-[300px] h-[300px]">
      <img src="../assets/circle-neon.png" alt="Image Spinner GSL _ Game App"
        class="image-circle absolute w-[60%] h-[60%] z-20" />
      <img src="../assets/logo_gsl.png" alt="Image SpinnerB GSL _ Game App" 
        class=" absolute w-[30%] h-[12%] z-10" />
    </div>
  </div>
</template>

<script>
export default {
  name: "Spinner",
};
</script>

<style>

@keyframes spinZ {
  0% {
    transform: rotateZ(0deg);
  }
  100% {
    transform: rotateZ(360deg);
  }
}

 .image-circle {
  animation: spinZ 1s linear infinite;
}
</style>
