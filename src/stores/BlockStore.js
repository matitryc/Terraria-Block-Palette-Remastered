import { defineStore } from 'pinia'
import { fetchAllResources, fetchResourceOnConditions } from '@/services/firebaseCalls.js'

export const useBlockStore = defineStore('BlockStore', {
  state: () => {
    return {
      blocks: []
    }
  },
  getters: {
    getBlockContainingPhrase: (state) => {
      return (phrase) => {
        const matchingBlocks = []
        state.blocks.forEach(block => {
          if(block.includes(phrase)){
            matchingBlocks.push(block)
          }
        })
        return matchingBlocks
      }
    }
  },
  actions: {
    async fetchAll(){
      const blockDocs = await fetchAllResources('blocks')
      blockDocs.forEach(doc => {
        this.blocks.push(doc.data().name)
      })
    },
    async fetchOnConditions(conditions){
      const blockDocs = await fetchResourceOnConditions('blocks', conditions)
      blockDocs.forEach(doc => {
        this.blocks.push(doc.data().name)
      })
    },
    clearBlocks(){
      this.blocks = []
    }
  }
})