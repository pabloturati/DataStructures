
class Iterator{
  constructor(arr){
    this._arr = this.sortArr(arr);
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
  
  sortArr(unsortedArr){
    const arr = [...unsortedArr]
    for(let i = 0; i < arr.length-1; i++){
      let j = i+1;
      while(j < arr.length){
        if(arr[i] > arr[j]){
          const val = arr[i];
          arr[i] = arr[j];
          arr[j] = val;
        }
        j++;
      }
    }
    return arr;
  }

  shiftPosition(){
    this.pos += 1;
  }
}

function sort(arrOfArrs){
  const arrOfItr = arrOfArrs.map(arr => new Iterator(arr));

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

        if(nextVal < smallestVal){
          smallestVal = nextVal;
          smallestItr = nextItr;
        }
      }
      j++;
    }
    smallestItr.shiftPosition();
    sortedValues.push(smallestVal);
  }
  return ([ ...sortedValues ])
}

//Sample input
const arrOfArrays = [
  [100, 1,4,5,-1,32,9],
  [0,-3,-6,7],
  [15,-8,-8,5,22,12],
  [-64,-12,2,3,22,19],
  [1],
];

// Run algorithm
const iterativeSolution = sort(arrOfArrays);

// Run alternate solution
let altSol = [];
arrOfArrays.forEach(arr=>(altSol = [ ...altSol, ...arr ]))
altSol.sort((a,b)=>(a-b))

/* TESTS */

// Test for same length
const arrCount = arrOfArrays.reduce((acc, arr)=> (acc += arr.length), 0);

const bothSolutionLenghtsAreEqual = 
  iterativeSolution.length === altSol.length;

console.assert(bothSolutionLenghtsAreEqual);

// Test for same sum on input, iterative and alternate solutions

const sumOfArr = (arr) => 
  (arr.reduce((acc, e) => (acc + e), 0));

const totalSum = arrayWithArrays =>
  arrayWithArrays.reduce((acc, arr) => acc + sumOfArr(arr), 0);

console.assert(
  totalSum(arrOfArrays) ===
  sumOfArr(iterativeSolution) === sumOfArr(altSol)
)

// Test for same values

const bothSolutionsAreEqual = iterativeSolution
    .reduce((acc, item, idx) => (acc && item === altSol[idx]), true)

console.assert(bothSolutionsAreEqual)

console.log('Iterative solution', iterativeSolution);
console.log('Alternate solution', altSol);
