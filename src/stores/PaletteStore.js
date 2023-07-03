import { defineStore } from 'pinia'
import { fetchAllResources, fetchResourceOnConditions } from '@/services/firebaseCalls.js'

export const usePaletteStore = defineStore('PaletteStore', {
  state: () => {
    return {
      palettes: []
    }
  },
  actions: {
    setOne(palette){
      const isSet = this.palettes.find(el => el.id === palette.id)
      if(!isSet){
        this.palettes.push(palette)
      }
    },
    // async submitPalette(){

    // },
    async fetchAll(){
      const paletteDocs = await fetchAllResources('palettes')
      paletteDocs.forEach(doc => {
        this.setOne({id: doc.id, ...doc.data()})
      })
    },
    async fetchOnConditions(conditions){
      this.clearPalettes()
      const paletteDocs = await fetchResourceOnConditions('palettes', conditions)
      paletteDocs.forEach(doc => {
        this.setOne({id: doc.id, ...doc.data()})
      })
    },
    clearPalettes(){
      this.palettes = []
    }
  }
})