function unroll(squareArray) {
   let result = [];

   //while there is something in the given array
   while (squareArray.length) {
      //NOTE: concat: called on an array to merge them without modifying the originals
      result = result.concat(squareArray.shift()); //start by taking the first row as is and add to the result array

      //taking the last element of each row
      for (let i = 0; i < squareArray.length; i++) {
         if (squareArray[i].length) result.push(squareArray[i].pop());
      }

      //add the last row from the given array, but in reverse order
      if (squareArray.length) {
         result = result.concat(squareArray.pop().reverse());
      }

      //take the first element of each row, but in reverse order
      for (let i = squareArray.length - 1; i >= 0; i--) {
         if (squareArray[i].length) result.push(squareArray[i].shift());
      }
      //repeat until squareArray.length is false
   }
   return result;
}

module.exports = unroll;
