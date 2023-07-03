import { defineStore } from 'pinia'
import { fetchAllResources, fetchResourceOnConditions } from '@/services/firebaseCalls.js'
import { refactorUsingSplitWithUppercaseLetters } from '@/helpers'

export const useBlockStore = defineStore('BlockStore', {
  state: () => {
    return {
      blocks: []
    }
  },
  getters: {
    getOnesContainingPhrase: (state) => {
      return (phrase) => {
        const matchingBlocks = state.blocks.filter(block => block.toLowerCase().includes(phrase))
        return matchingBlocks.map(block => refactorUsingSplitWithUppercaseLetters(block).toLowerCase())
      }
    }
  },
  actions: {
    setOne(block){
      if(!this.blocks.includes(block)){
        this.blocks.push(block)
      }
    },
    async fetchAll(){
      const blockDocs = await fetchAllResources('blocks')
      blockDocs.forEach(doc => {
        this.setOne(doc.data().name)
      })
    },
    async fetchOnConditions(conditions){
      const blockDocs = await fetchResourceOnConditions('blocks', conditions)
      blockDocs.forEach(doc => {
        this.setOne(doc.data().name)
      })
    },
    clearBlocks(){
      this.blocks = []
    }
  }
})