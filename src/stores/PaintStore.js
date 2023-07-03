import { defineStore } from 'pinia'
import { fetchAllResources, fetchResourceOnConditions } from '@/services/firebaseCalls.js'

export const usePaintStore = defineStore('PaintStore', {
  state: () => {
    return {
      paints: []
    }
  },
  getters: {
    getOnesContainingPhrase: (state) => {
      return (phrase) => {
        return state.paints.filter(paint => paint.name.toLowerCase().includes(phrase.toLowerCase()))
      }
    }
  },
  actions: {
    setOne(paint){
      const isSet = this.paints.find(el => el.id === paint.id)
      if(!isSet){
        this.paints.push(paint)
      }
    },
    async fetchAll(){
      const paintDocs = await fetchAllResources('paint')
      paintDocs.forEach(doc => {
        this.setOne({id: doc.id, name: doc.data().name})
      })
    },
    async fetchOnConditions(conditions){
      const paintDocs = await fetchResourceOnConditions('paint', conditions)
      paintDocs.forEach(doc => {
        this.setOne({id: doc.id, name: doc.data().name})
      })
    },
    clearPaint(){
      this.paint = []
    }
  }
})