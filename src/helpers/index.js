export const refactorUsingSplitWithUppercaseLetters = (string) => {
  let wordRefactored = ''
  const words = string.split(/(?=[A-Z])/)
  words.forEach(word => wordRefactored += `${word} `)
  return wordRefactored.trim()
}

export const refactorStringToCapitalCase = (string) => {
  if(string){
    const stringSplit = string.split(' ')
    //remove potential empty words
    stringSplit.forEach((word, index) => {
      if(word === ''){
        stringSplit.splice(index, 1)
      }
    })
    const searchValueCapitalized = stringSplit.map(word => word = word[0].toUpperCase() + word.slice(1, word.length))
    let stringRefactored = ''
    searchValueCapitalized.forEach(word => {
      stringRefactored += word
    })
    return stringRefactored
  }
  return ''
}