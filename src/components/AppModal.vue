<template>
  <div class="modal-box absolute inset-0 z-40">
    <div
      v-click-outside="{ toggler, perform: () => emit('close') }"
      class="modal-outer"
    >
      <div class="modal-nav">
        <button
          class="p-2"
          @click.prevent="emit('close')"
        >
          <img
            src="@/assets/x-icon.svg"
            alt=""
            class="w-10"
          >
        </button>
      </div>
      <div class="modal-inner relative">
        <slot />
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  toggler: {
    type: String,
    required: true
  }
})
const emit = defineEmits(['close'])
</script>

<style lang="scss">
.modal-box {
  display: flex;
  justify-content: center;
  align-items: center;
  color: $black-main;
  opacity: 1;
  border-radius: 12px;
  background-image: linear-gradient(rgba($black-main, .8), rgba($black-light, .9));
  transition: opacity .2s;
}
.modal-outer {
  width: 90%;
  height: 90%;
  max-width: 600px;
}
.modal-inner {
  background-color: $white-main;
  border: 3px solid $black-main;
  height: Calc(100% - 40px - 1rem);
  overflow-y: scroll;
  overflow-x: hidden;
}
.modal-nav {
  display: flex;
  justify-content: flex-end;
  background-color: $white-main;
  border: 3px solid $black-main;
  border-bottom: 0;
}
.modal-title {
  font-size: 2rem;
  left: 0;
}
.modal-form {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  justify-content: flex-start;
  align-items: flex-start;
  padding: 1rem;
}
.modal-option {
  display: flex;
  flex-direction: column;
  gap: .2em;
  width: 100%;
  &.obtainability {
    min-width: 35%;
  }
  & > div {
    line-height: 1em;
  }
  &.tags {
    width: 100%;
  }
}
::-webkit-scrollbar {
  border-radius: 0;
}
::-webkit-scrollbar-track {
  margin-blocK: .1em
}
@media (min-width: 576px) {
  .modal-nav {
    border-radius: 12px 12px 0 0;
  }
  .modal-inner {
    border-radius: 0 0 12px 12px;
  }
  .modal-form {
    padding: 1.5rem;
    align-items: center;
  }
}
@media (min-width: 1200px) {
  .modal-option > span {
    font-size: 2rem;
  }
}
</style>