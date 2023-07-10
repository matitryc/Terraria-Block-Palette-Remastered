import { collection, addDoc } from 'firebase/firestore'
import { db } from '@/services/firebaseCalls.js'

export const fillBlocksCollection = async (blocks) => {
  blocks.forEach(block => {
    addDoc(collection(db, 'blocks'), {
      name: block
    })
  })
}