<template>
  <footer class="footer">
    <div class="wrapper">
      <span class="footer-author text-2xl mb-4">edek strazak 2023</span>
      <div class="footer-content flex text-xl">
        <div class="footer-content-inner">
          <a href="#">
            <img
              src="@/assets/github.svg"
              alt=""
            >
          </a>
          <a href="#">
            <img
              src="@/assets/linkedin.svg"
              alt=""
            >
          </a>
        </div>
        <div class="footer-content-inner">
          <a href="www.youtube.com">YouTube</a>
          <a href="#">Patronite</a>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>

</script>

<style lang="scss" scoped>
.wrapper {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 1em;
}
.footer {
  background-image: linear-gradient($black-main, black);
  &-content {
    gap: 1.5rem;
    &-inner {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      gap: 4px;
    }
  }
}
img {
  filter: $svg-to-white-main;
  width: 28px;
  height: 28px;
}
@media (min-width: 576px) {
  .footer{
    &-content{
      &-inner {
        flex-direction: row;
        gap: 1rem;
      }
    }
  }
}
</style>