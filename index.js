function map(array, callback) { 
   let newArray = []
   for (let i = 0; i < array.length; i++) {
       let element = array[i]
       newArray.push(callback(element))
   }
   return newArray;
}

function reduce(array, callback, value) {
    let a = (!!value) ? value : array[0]
    let i = (!!value) ? 0 : 1

    for (; i < array.length; i++) {
        a = callback(array[i], a)
    }
    return a
}