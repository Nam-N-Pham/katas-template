function count(array){
  let uniqueElements = {}
  let count = 0

  for (let index = 0; index < array.length; index++) 
  {
    if (!(array[index] in uniqueElements))
    {
      for (let j = index; j < array.length; j++) 
      {
        if (array[index] === array[j])
        {
          count++
        }
      }

      uniqueElements.array[index] = count
      count = 0
    }
  }

  return uniqueElements
}