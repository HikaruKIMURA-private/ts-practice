// const message: string = 'Hello, world'

// console.log(message)

// const repeat = <T extends { name: string }>(
//   element: T,
//   length: number,
// ): T[] => {
//   const result: T[] = []
//   for (let i = 0; i < length; i++) {
//     result.push(element)
//   }

//   return result
// }

// type HasNameAndAge = {
//   name: string
//   age: number
// }

// console.log(repeat<HasNameAndAge>({ name: 'a', age: 5 }, 3))

const map = (
  array: number[],
  callback: (value: number) => number
): number[] => {
  const result: number[] = []
  for (const elm of array) {
    result.push(callback(elm))
  }
  return result
}

const data = [1, 1, 2, 3, 5, 8, 13]
const result = map(data, (x) => x * 10)
console.log(result)
