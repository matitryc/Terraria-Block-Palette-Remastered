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
            <BlockListElement
              v-for="block in blocks"
              :key="block.id"
              :block="block"
              class="cursor-pointer modal-toggler"
              @click="() => handleBlockEdit(block)"
            />
            <button
              class="add-block relative modal-toggler"
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
            :edited-block="editedBlock"
            @close="closeModal"
            @add-block="addBlock"
            @edit-block="editBlock"
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
import { ref, reactive } from 'vue'
import BlockListElement from '@/components/BlockListElement.vue'
import IdeaSubmitModal from '@/components/IdeaSubmitModal.vue'
import IdeaBlockModal from '@/components/IdeaBlockModal.vue'
const isSubmitModalActive = ref(false)
const isBlockModalActive = ref(false)
const blocks = reactive([])
const editedBlock = ref({})
const addBlock = (block) => {
  blocks.push({
    ...block,
    id: Math.random()
 })
}
const editBlock = (passedBlock) => {
  const blockIndex = blocks.findIndex(block => block.id === passedBlock.id)
  blocks[blockIndex] = passedBlock
}
const closeModal = () => {
  editedBlock.value = {}
  isBlockModalActive.value = false
}
const handleBlockEdit = (block) => {
  editedBlock.value = block
  isBlockModalActive.value = true
}
</script>

<style lang="scss" scoped>

</style>