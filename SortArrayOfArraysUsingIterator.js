
const arrOfArrays = [
  [100, 1,4,5,-1,32,9],
  [0,-3,-6,7],
  [15,-8,-8,5,22,12],
  [-64,-12,2,3,22,19],
  [1],
]

const sumOfArr = (arr) => (arr.reduce((acc, e) => (acc + e), 0))

const totalSum = arrOfArrays.reduce((acc, arr) => acc + sumOfArr(arr), 0)

console.log('initial lenght',totalSum)

const arrCount = arrOfArrays.reduce((acc, arr)=> (acc += arr.length), 0)
console.log(arrCount)

class Iterator{
  constructor(arr){
    this._arr = arr.sort((a,b)=>(a-b));
    this.pos = 0;
  }

  get topVal(){
    return this._arr[this.pos];
  }

  get position(){
    return this.pos;
  }

  get arr(){
    return this._arr;
  }

  get isInRange(){
    return this.pos < this._arr.length;
  }

  shiftPosition(){
    this.pos += 1;
  }
}

function sort(arrOfArrs){
  const arrOfItr = arrOfArrs.map(arr => new Iterator(arr));
  console.log(arrOfItr);

  const sortedValues = [];
  
  while(arrOfItr.length > 1){
    let smallestItr = arrOfItr[0];
    if(!smallestItr.isInRange){
      arrOfItr.shift();
      continue;
    }

    let smallestVal = smallestItr.topVal;

    let j = 1;
    let nextItr;
    while(j < arrOfItr.length){
      nextItr = arrOfItr[j];
      if(nextItr.isInRange){
        let nextVal = nextItr.topVal;
        console.log('smallestVal', smallestVal)
        console.log("nextVal", nextVal)
        console.log("nextVal < smallestVal", nextVal < smallestVal)

        if(nextVal < smallestVal){
          smallestVal = nextVal;
          smallestItr = nextItr;
        }
      }
      j++;
    }
    console.log("smallestVal -----", smallestVal);
    smallestItr.shiftPosition();
    sortedValues.push(smallestVal);
  }

  console.log(sortedValues.length);
  
  return ([ ...sortedValues ])
}

const result = sort(arrOfArrays)
console.log(result)
console.log(result.length)
