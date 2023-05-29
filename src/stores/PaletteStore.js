import { defineStore } from 'pinia'
import { fetchAllResources, fetchResourceOnConditions } from '@/services/firebaseCalls.js'

export const usePaletteStore = defineStore('PaletteStore', {
  state: () => {
    return {
      palettes: []
    }
  },
  actions: {
    setPalette(id, data){
      this.palettes.push({
        id,
        ...data
      })
    },
    async fetchAll(){
      const paletteDocs = await fetchAllResources('palettes')
      paletteDocs.forEach(doc => {
        this.setPalette(doc.id, doc.data())
      })
    },
    async fetchOnConditions(conditions){
      this.clearPalettes()
      const paletteDocs = await fetchResourceOnConditions('palettes', conditions)
      paletteDocs.forEach(doc => {
        this.setPalette(doc.id, doc.data())
      })
    },
    clearPalettes(){
      this.palettes = []
    }
  }
})