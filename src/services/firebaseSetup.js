import { collection, addDoc } from 'firebase/firestore'

export const fillBlocksCollection = async (db, blocks) => {
  blocks.forEach(block => {
    addDoc(collection(db, 'blocks'), {
      name: block
    })
  })
}