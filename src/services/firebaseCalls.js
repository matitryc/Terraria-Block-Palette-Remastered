import { firebase } from '@/main.js'
import { getFirestore, collection, getDocs, query, where, limit, orderBy, startAfter, or, and } from 'firebase/firestore'
const db = getFirestore(firebase)
export const fetchAllResources = async (collectionName) => {
  return await getDocs(collection(db, collectionName))
}
export const fetchResourceOnConditions = async (collectionName, passedConditions) => {
  let conditions = []
  if(passedConditions.andConditions){
    console.log(passedConditions.andConditions)
    const ands = []
    passedConditions.andConditions.forEach(choice => {
      ands.push(where(choice[0], choice[1], choice[2]))
    })
    conditions.push(and(...ands))
  }
  if(passedConditions.orConditions){
    const ors = []
    passedConditions.orConditions.forEach(choice => {
      ors.push(where(choice[0], choice[1], choice[2]))
    })
    conditions.push(or(...ors))
  }
  if(passedConditions.where){
    conditions.push(where(...passedConditions.where))
  }
  else if(passedConditions.limit){
    conditions.push(limit(passedConditions.limit))
  }
  else if(passedConditions.orderBy){
    conditions.push(orderBy(passedConditions.orderBy))
  }
  else if(passedConditions.startAfter){
    conditions.push(startAfter(passedConditions.startAfter))
  }
  const q = query(collection(db, collectionName), ...conditions)
  return await getDocs(q)
}