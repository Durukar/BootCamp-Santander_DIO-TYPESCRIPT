const array: Array<number> = [1, 2, 3, 4];

array.map(num => {
  if(num > 2 && num % 2 === 0) {
    console.log(num * 2)
  }
})

// array.map(num => console.log(num))