import { defineStore } from 'pinia'
import { fetchAllResources, fetchResourceOnConditions } from '@/services/firebaseCalls.js'

export const useBlockStore = defineStore('BlockStore', {
  state: () => {
    return {
      blocks: []
    }
  },
  getters: {
    getOnesContainingPhrase: (state) => {
      return (phrase) => {
        return state.blocks.filter(block => block.name.toLowerCase().includes(phrase))
      }
    }
  },
  actions: {
    setOne(block){
      const isSet = this.blocks.find(el => el.id === block.id)
      if(!isSet){
        this.blocks.push(block)
      }
    },
    async fetchAll(){
      const blockDocs = await fetchAllResources('blocks')
      blockDocs.forEach(doc => {
        this.setOne({id: doc.id, name: doc.data().name})
      })
    },
    async fetchOnConditions(conditions){
      const blockDocs = await fetchResourceOnConditions('blocks', conditions)
      blockDocs.forEach(doc => {
        this.setOne({id: doc.id, name: doc.data().name})
      })
    },
    clearBlocks(){
      this.blocks = []
    }
  }
})