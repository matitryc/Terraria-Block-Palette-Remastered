<template>
  <section
    id="your_ideas"
    class="your-ideas section"
  >
    <div class="wrapper">
      <h2 class="section-title">
        Your Ideas
      </h2>
      <p class="section-text">
        Here you can suggest your own palette. Add blocks with or without paint, and then submit! We'll verify it and eventually put it on this site :)
      </p>
      <form
        class="w-full"
        @submit.prevent="submitPalette"
      >
        <div class="main-style-outer-container w-full">
          <div class="main-style-inner-container flex flex-row">
            <BlockListElement />
            <button
              class="add-block relative"
              @click.prevent="isBlockModalActive = true"
            >
              <div class="question-mark-box">
                <img
                  class="question-mark"
                  src="@/assets/question-mark.svg"
                  alt=""
                >
              </div>
              <img
                class="plus-sign"
                src="@/assets/plus-sign-circle.svg"
                alt=""
              >
              <div class="plus-sign-fill" />
            </button>
          </div>
          <IdeaBlockModal
            v-if="isBlockModalActive"
            class="block-modal"
            @close="isBlockModalActive = false"
          />
          <IdeaSubmitModal
            v-if="isSubmitModalActive"
            @close="isSubmitModalActive = false"
          />
        </div>
        <AppButton
          primary
          text="Finish"
          class="finish-button mt-10 md:mt-12"
          @click.prevent="isSubmitModalActive = true"
        />
      </form>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'
import BlockListElement from '@/components/BlockListElement.vue'
import IdeaSubmitModal from '@/components/IdeaSubmitModal.vue'
import IdeaBlockModal from '@/components/IdeaBlockModal.vue'
const isSubmitModalActive = ref(false)
const isBlockModalActive = ref(false)
</script>

<style lang="scss" scoped>

</style>