const letterCounter = () => {


  //counter
  let result = 0;

  for (const index in phrase) {
    console.log(Number(index) + 1)
    result = Number(index) + 1
  }

  // return { result:  phrase.length }
  return { result }
}

// const phrase = prompt('Write your phrase.')

const phrase = ('Write your phrase.')
console.log(letterCounter(phrase))

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

//letter counter

