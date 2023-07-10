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
            v-if="isSubmitModalActive && !error"
            :palette="blocks"
            @close="isSubmitModalActive = false"
            @success="celebrateSubmitSuccess"
          />
          <Transition name="show">
            <p
              v-if="error && !success"
              class="absolute bottom-0 w-full text-red-800 text-2xl text-center p-5"
            >
              To submit a palette, you need <span class="font-bold">at least 3</span> different blocks.
            </p>
          </Transition>
          <Transition name="show">
            <p
              v-if="success"
              class="absolute bottom-0 w-full text-green-900 text-2xl text-center p-5"
            >
              Thanks for your contribution Terrarian! Check out the page soon and be ready to see the palette you submitted : )
            </p>
          </Transition>
        </div>
        <AppButton
          primary
          text="Finish"
          class="finish-button mt-10 md:mt-12"
          @click.prevent="checkIfSubmitPossible"
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
const blocks = ref([])
const editedBlock = ref({})
const addBlock = (block) => {
  blocks.value.push({
    ...block,
    id: Math.random()
 })
}
const error = ref(false)
const success = ref(false)
const editBlock = (passedBlock) => {
  const blockIndex = blocks.value.findIndex(block => block.id === passedBlock.id)
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
const checkIfSubmitPossible = () => {
  if(blocks.value.length >= 3){
    isSubmitModalActive.value = true
    error.value = false
  }
  else {
    error.value = true
  }
}
const celebrateSubmitSuccess = () => {
  blocks.value = []
  success.value = true
  setTimeout(() => {
    success.value = false
  }, 5000)
}
</script>

<style lang="scss" scoped>
.show-enter-active,
.show-leave-active {
  transition: opacity 0.5s;
}
.show-enter-from,
.show-leave-to {
  opacity: 0;
}
</style>