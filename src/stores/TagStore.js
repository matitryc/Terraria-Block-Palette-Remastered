import { defineStore } from 'pinia'
import { fetchAllResources, fetchResourceOnConditions } from '@/services/firebaseCalls.js'

export const useTagStore = defineStore('TagStore', {
  state: () => {
    return {
      tags: []
    }
  },
  getters: {
    getTagsContainingPhrase: (state) => {
      return (phrase) => {
        const matchingTags = []
        state.tags.forEach(tag => {
          if(tag.includes(phrase)){
            matchingTags.push(tag)
          }
        })
        return matchingTags
      }
    }
  },
  actions: {
    async fetchAll(){
      const tagDocs = await fetchAllResources('tags')
      tagDocs.forEach(doc => {
        this.tags.push(doc.data().tag)
      })
    },
    async fetchOnConditions(conditions){
      const tagDocs = await fetchResourceOnConditions('tags', conditions)
      tagDocs.forEach(doc => {
        this.tags.push(doc.data().tag)
      })
    },
    clearTags(){
      this.tags = []
    }
  }
})