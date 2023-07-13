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
          if(tag.name.includes(phrase)){
            matchingTags.push(tag)
          }
        })
        return matchingTags
      }
    }
  },
  actions: {
    setOne(tag){
      const isSet = this.tags.find(el => el.id === tag.id)
      if(!isSet){
        this.tags.push(tag)
      }
    },
    async fetchAll(){
      const tagDocs = await fetchAllResources('tags')
      tagDocs.forEach(doc => {
        this.setOne({id: doc.id, name: doc.data().name})
      })
    },
    async fetchOnConditions(conditions){
      const tagDocs = await fetchResourceOnConditions('tags', conditions)
      tagDocs.forEach(doc => {
        this.setOne({id: doc.id, name: doc.data().name})
      })
    },
    clearTags(){
      this.tags = []
    }
  }
})