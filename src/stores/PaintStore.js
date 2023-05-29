import { defineStore } from 'pinia'
import { fetchAllResources, fetchResourceOnConditions } from '@/services/firebaseCalls.js'
import { refactorUsingSplitWithUppercaseLetters } from '@/helpers'

export const usePaintStore = defineStore('PaintStore', {
  state: () => {
    return {
      paint: []
    }
  },
  getters: {
    getPaintContainingPhrase: (state) => {
      return (phrase) => {
        const matchingPaint = []
        state.paint.forEach(paint => {
          if(paint.includes(phrase)){
            matchingPaint.push(paint)
          }
        })
        return matchingPaint
      }
    }
  },
  actions: {
    setPaint(paint){
      this.paint.push(refactorUsingSplitWithUppercaseLetters(paint).toLowerCase())
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