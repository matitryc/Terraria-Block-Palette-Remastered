<template>
  <header class="relative">
    <div class="wrapper relative z-10">
      <div class="upper-content flex flex-col justify-center items-center gap-7 w-full h-full px-7">
        <h1 class="text-4xl text-center w-full  max-w-2xl md:w-2/3">
          The <span>best</span> and <span>easiest</span> to use tool for building in <span>Terraria</span>.
        </h1>
      </div>
    </div>
    <div class="background-fill absolute bottom-0 w-full h-16" />
  </header>
</template>

<script setup>

</script>

<style lang="scss" scoped>
header {
  height: 100vh;
  background-image: linear-gradient(rgba($header-light, 25%), rgba($header-dark, 25%)), url('@/assets/header_bg.webp');
  background-position: 25% 58%;
  background-size: cover;

  .background-fill {
    background-color: $gradient-one-light;
  }
}
h1 {
  color: $white-main;
  span {
    font-size: 2.7rem;
  }
}
.max-logo {
  max-width: 300px;
  max-height: 300px;
}
@media (min-width: 576px){
  h1 {
    font-size: 2.6rem;
    span {
      font-size: 3rem;
    }
  }
}
</style>