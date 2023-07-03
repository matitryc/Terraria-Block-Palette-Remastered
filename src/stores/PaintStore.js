import { defineStore } from 'pinia'
import { fetchAllResources, fetchResourceOnConditions } from '@/services/firebaseCalls.js'
import { refactorUsingSplitWithUppercaseLetters } from '@/helpers/'

export const usePaintStore = defineStore('PaintStore', {
  state: () => {
    return {
      paints: []
    }
  },
  getters: {
    getOnesContainingPhrase: (state) => {
      return (phrase) => {
        return state.paints.filter(paint => paint.includes(phrase.toLowerCase()))
      }
    }
  },
  actions: {
    setPaint(paint){
      if(!this.paints.includes(paint)){
        const paintRefactored = refactorUsingSplitWithUppercaseLetters(paint).toLowerCase()
        this.paints.push(paintRefactored)
      }
    },
    async fetchAll(){
      const paintDocs = await fetchAllResources('paint')
      paintDocs.forEach(doc => {
        this.setPaint(doc.data().name)
      })
    },
    async fetchOnConditions(conditions){
      const paintDocs = await fetchResourceOnConditions('paint', conditions)
      paintDocs.forEach(doc => {
        this.setPaint(doc.data().name)
      })
    },
    clearPaint(){
      this.paint = []
    }
  }
})