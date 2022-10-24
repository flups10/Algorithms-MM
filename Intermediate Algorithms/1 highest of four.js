function largestOfFour(arr) {
    maxArray = []
    for (i = 0; i < arr.length; i++){
        thisArray = (arr[i])
        max = Math.max.apply(null, thisArray);
        console.log(max)
        maxArray.push(max);
    }
    console.log(maxArray)
    return maxArray;
  }
  largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);
  //Returns [5,27,39,1001]
  