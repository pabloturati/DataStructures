// Add any extra import statements you may need here


// Add any helper functions you may need here
class Heap{
  constructor(){
    this.arr = [];
  }
  
  get size(){
    return this.arr.length;
  }
  
  isInRange(i){
    return i < this.size;
  }
  
  swap(idx1, idx2){
    const val1 = this.arr[idx1];
    this.arr[idx1] = this.arr[idx2];
    this.arr[idx2] = val1;
  }
  
  handleHeapify(){
     for(let i = Math.floor(this.size/2); i >= 0; i--){
      this.heapify(i);
    }
  }
  
  heapify(i){
    let largest = i;
    const left = 2 * i + 1;
    const right = 2 * i + 2;
    
    if(this.isInRange(left) && this.arr[left] > this.arr[largest]) largest = left;
    if(this.isInRange(right) && this.arr[right] > this.arr[largest]) largest = right;
    
    if(i !== largest){
      this.swap(i, largest);
      this.heapify(largest);
    }
  }
  
  insert(val){
    this.arr.push(val);
    if(this.size === 1) return;
    this.handleHeapify();
  }
  
  popRoot(){
    const rootVal = this.arr[0];
    this.swap(0, this.size-1);
    this.arr.pop()
    this.handleHeapify();
    return rootVal;
  }
}
function refillMagicalBag(initial){
  return Math.floor(initial/2)
}

function maxCandies(arr, k) {
  // Write your code here
  
  // Create a heap and add all arr values to it
  const myHeap = new Heap();
  arr.forEach(item =>  myHeap.insert(item));
  
  let minute = 0;
  let eatenCandyCounter = 0;
  while(minute < k){
    const biggestBag = myHeap.popRoot();
    eatenCandyCounter += biggestBag;
    myHeap.insert(refillMagicalBag(biggestBag))
    minute++
  }
  
  return eatenCandyCounter;
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

var n_1 = 5, k_1 = 3;
var arr_1 = [2, 1, 7, 4, 2];
var expected_1 = 14;
var output_1 = maxCandies(arr_1, k_1);
check(expected_1, output_1);

var n_2 = 9, k_2 = 3;
var arr_2 = [19, 78, 76, 72, 48, 8, 24, 74, 29];
var expected_2 = 228;
var output_2 = maxCandies(arr_2, k_2);
check(expected_2, output_2); 

// Add your own test cases here
