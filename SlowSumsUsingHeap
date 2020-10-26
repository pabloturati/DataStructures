// Add any extra import statements you may need here


// Add any helper functions you may need here
class Node {
  constructor(val){
    this.val = val;
    this.next = null;
  }
}


class MaxHeap{
  constructor(){
    this.arr = [];
  }
  
  get size(){
    return this.arr.length;
  }
  
  hasNext(){
    return this.size > 1;
  }
  
  isInRange(idx){
    return idx < this.size;
  }
  
  swap(i1, i2){
    const val1 = this.arr[i1];
    this.arr[i1] = this.arr[i2];
    this.arr[i2] = val1;
  }
  
  heapify(i){
    let largest = i;
    const left = 2 * i + 1;
    const right = 2 * i + 2;
    if(this.isInRange(left) && this.arr[left] > this.arr[largest]) largest = left;
    if(this.isInRange(right) && this.arr[right] > this.arr[largest]) largest = right;
    if(i != largest){
      this.swap(i, largest);
      this.heapify(largest);
    }
  }
  
  handleHeapify(){
    for(let i = Math.floor(this.size/2) - 1; i >= 0; i--){
      this.heapify(i)
    } 
  }
  
  push(val){
    this.arr.push(val)
    if(this.size === 1) return;
    this.handleHeapify();
  }
  
  popRoot(){
    if(this.size < 1) return null;
    const rootVal = this.arr[0];
    this.swap(0, this.size-1);
    this.arr.pop();
    this.handleHeapify();
    return rootVal;
  }
}


function getTotalTime(arr) {
  // Write your code here
  if(arr.length === 1) return arr[0]; 
  
  const numHeap = new MaxHeap();
  arr.forEach(e =>{ numHeap.push(e) })
  
  let totalPenalty = 0;
  while(numHeap.hasNext()){
    const penalty = numHeap.popRoot() + numHeap.popRoot()
    numHeap.push(penalty);
    totalPenalty += penalty;
  }
 
  return totalPenalty;
}











// These are the tests we use to determine if the solution is correct.
// You can add your own at the bottom, but they are otherwise not editable!
function printInteger(n) {
  var out = '[' + n + ']';
  return out;
}

var test_case_number = 1;

function check(expected, output) {
  var result = (expected == output);
  var rightTick = "\u2713";
  var wrongTick = "\u2717";
  if (result) {
    var out = rightTick + ' Test #' + test_case_number;
    console.log(out);
  }
  else {
    var out = '';
    out += wrongTick + ' Test #' + test_case_number + ': Expected ';
    out += printInteger(expected);
    out += ' Your output: ';
    out += printInteger(output);
    console.log(out);
  }
  test_case_number++;
}

var arr_1 = [4, 2, 1, 3];
var expected_1 = 26;
var output_1 = getTotalTime(arr_1);
check(expected_1, output_1);

var arr_2 = [2, 3, 9, 8, 4];
var expected_2 = 88;
var output_2 = getTotalTime(arr_2);
check(expected_2, output_2);

// Add your own test cases here
var arr_3 = [2, 3];
var expected_3 = 5;
var output_3 = getTotalTime(arr_3);
check(expected_3, output_3);

var arr_4 = [3];
var expected_4 = 3;
var output_4 = getTotalTime(arr_4);
check(expected_4, output_4);
