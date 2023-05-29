export const refactorUsingSplitWithUppercaseLetters = (string) => {
  let wordRefactored = ''
  const words = string.split(/(?=[A-Z])/)
  words.forEach(word => wordRefactored += `${word} `)
  return wordRefactored.trim()
}