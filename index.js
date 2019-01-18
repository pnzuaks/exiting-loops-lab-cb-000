function breakOut(array, changeValue, stopValue) {
  for (let i = 0 l = array.length; i < array.length; i++) {
    if (array[i] !== stopValue) {
      array[i] = changeValue
      return array
    }
  }
}
