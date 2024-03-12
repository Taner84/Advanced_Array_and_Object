// //letter counter
// const letterCounter = () => {


//   //counter
//   let result = 0;

//   for (const index in phrase) {
//     console.log(Number(index) + 1)
//     result = Number(index) + 1
//   }

//   // return { result:  phrase.length }
//   return { result }
// }

// // const phrase = prompt('Write your phrase.')

// const phrase = ('Write your phrase.')
// console.log(letterCounter(phrase))


//sumArray

// const sumArray = (numbers) => {
//   let result = 0;

//   for (const number of numbers) {
//     //console.log(numbers);
//     result = result + number;
//   }
//   return { result } 
// }

// const nums = [1,2,3,4,5]
// console.log(sumArray(nums))


//loop
// const max = (numbers) => {
//   let result = numbers[0]

//   for (const number of numbers) {
//     if (number > result) {
//       result = number
//     }
//   }
//   return { result }  
// }

// console.log(max([1,2,3,4,5]))

// letter frequency 

//const letterFrequency = (phrase) => {
//  console.log(phrase)
  
//  let frequency  ={}
//  for (const letter of phrase){
//    if (letter in frequency){
//       frequency[letter]+=1
//    }else{
//      frequency [letter] = 1
//    }

//    }
//    return frequency
//}

//console.log(letterFrequency('lol, what are you doing tonight, lol, haha!'))

//const wordFrequency = (phrase) => {
//      let frequency = {}
//      words = phrase.split(' ')
//      console.log(words)
//      return frequency
//}
//console.log (wordFrequency('lol what lol'))

const wordFrequency = (phrase) => {
      let frequency = {}
        words = phrase.split(' ')
      for (const word of words) {
        console.log(word)
        if (word in frequency) {
          frequency [word] += 1
        }else{
          frequency [word] = 1
        }
      }
      console.log(words)
      return frequency 
  }

console.log(wordFrequency ('lol what lol'))