function largestOfFour(arr) {
    maxArray = []
    for (i = 0; i < arr.length; i++){
        thisArray = (arr[i])
        // // Solution 1
        // max = Math.max.apply(null, thisArray);
        // Solution 2
        var max = 0;
        for (let x = 0; x < thisArray.length; x++){
            if (max < thisArray[x]){
                max = thisArray[x]
            }
        }
        maxArray.push(max);
    }
    console.log(maxArray)

  }
  largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);
  //Returns [5,27,39,1001]
  