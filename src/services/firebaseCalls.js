import { firebase } from '@/main.js'
import { getFirestore, collection, getDocs, query, where, limit, orderBy, startAfter, or, and, doc, setDoc } from 'firebase/firestore'
export const db = getFirestore(firebase)

export const fetchAllResources = async (collectionName) => {
  return await getDocs(collection(db, collectionName))
}
export const addResourceWithGeneratedIdInDatabase = async (collectionName, resource) => {
  const docRef = doc(collection(db, collectionName))
  await setDoc(docRef, resource)
}
export const fetchResourceOnConditions = async (collectionName, passedConditions) => {
  let conditions = []
  const passedConditionsCloned = {...passedConditions}
  if(passedConditionsCloned.andConditions){
    const ands = []
    passedConditionsCloned.andConditions.forEach(choice => {
      //column, operation(equals, greater than), value'
      ands.push(where(choice[0], choice[1], choice[2]))
    })
    conditions.push(and(...ands))
  }
  if(passedConditionsCloned.orConditions){
    const ors = []
    passedConditionsCloned.orConditions.forEach(choice => {
      console.log(choice)
      ors.push(where(choice[0], choice[1], choice[2]))
    })
    conditions.push(or(...ors))
  }
  if(passedConditionsCloned.where){
    conditions.push(where(...passedConditionsCloned.where))
  }
  if(passedConditionsCloned.limit){
    conditions.push(limit(passedConditionsCloned.limit))
  }
  if(passedConditionsCloned.orderBy){
    conditions.push(orderBy(passedConditionsCloned.orderBy))
  }
  if(passedConditionsCloned.startAfter){
    conditions.push(startAfter(passedConditionsCloned.startAfter))
  }
  const q = query(collection(db, collectionName), ...conditions)
  return await getDocs(q)
}