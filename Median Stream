// Add any extra import statements you may need here


// Add any helper functions you may need here
class Heap{
  constructor(){
    this.arr = []
  }
  get size(){
    return this.arr.length;
  }
  get top(){
    return this.arr[0];
  }
  get heap(){
    return this.arr;
  }
  
  swap(idx1, idx2){
    const val1 = this.arr[idx1];
    this.arr[idx1] = this.arr[idx2];
    this.arr[idx2] = val1;
  }
  inRange(idx){
    return idx < this.size;
  }
  handleHeapify(){
    for(let i = Math.floor(this.size / 2) - 1; i >= 0; i--){
      this.heapify(i)
    }
  }
  insert(newVal){
    this.arr.push(newVal);
    if(this.size === 1) return;
    this.handleHeapify();
  }
  popRoot(){
    if(this.size < 1) return null;
    const topValue = this.top;
    this.swap(0, this.size - 1);
    this.arr.pop();
    this.handleHeapify();
    return topValue;
  }
}

class MaxHeap extends Heap{
  heapify(i){
    let largest = i;
    const left = 2 * i + 1;
    const right = 2 * i + 2;
    if(this.inRange(left) && this.arr[left] > this.arr[largest]) largest = left;
    if(this.inRange(right) && this.arr[right] > this.arr[largest]) largest = right;
    if(i !== largest){
      this.swap(i, largest);
      this.heapify(largest);
    }
  }
}
class MinHeap extends Heap{
  heapify(i){
    let smallest = i;
    const left = 2 * i + 1;
    const right = 2 * i + 2;
    if(this.inRange(left) && this.arr[left] < this.arr[smallest]) smallest = left;
    if(this.inRange(right) && this.arr[right] < this.arr[smallest]) smallest = right;
    if(i !== smallest){
      this.swap(i, smallest);
      this.heapify(smallest);
    }
  }
}

function balanceHeaps(hi, lo){
  if(lo.size > hi.size + 1){
    //drop lo top and give it to hi
    const loRoot = lo.popRoot();
    hi.insert(loRoot);
  }else if(lo.size < hi.size){
    //drop hi.top and give it to hi
    const hiRoot = hi.popRoot();
    lo.insert(hiRoot);
  }

}
function addToHeaps(hi, lo, val){
  if(val > lo.top){
     hi.insert(val);
   }
   else{
     lo.insert(val);
   }
}
function calculateMedian(hi, lo){
  if(lo.size === hi.size + 1) return lo.top;
  return Math.floor((lo.top + hi.top)/2)
}

function findMedian(arr) {
  const hi = new MinHeap();
  const lo = new MaxHeap();
  return arr.map((val, idx)=>{
   if(idx === 0){ 
     lo.insert(val)
     return val;
   }
   addToHeaps(hi, lo, val);
   balanceHeaps(hi, lo);
   const median = calculateMedian(hi, lo);
   return median
  })
}











// These are the tests we use to determine if the solution is correct.
// You can add your own at the bottom, but they are otherwise not editable!
function printintegerArray(array) {
  var size = array.length;
  var res = '';
  res += '[';
  var i = 0;
  for (i = 0; i < size; i++) {
    if (i !== 0) {
    	res += ', ';
    }
    res += array[i];
  }
  res += ']';
  return res;
}

var test_case_number = 1;

function check(expected, output) {
  var expected_size = expected.length;
  var output_size = output.length;
  var result = true;
  if (expected_size != output_size) {
    result = false;
  }
  for (var i = 0; i < Math.min(expected_size, output_size); i++) {
    result &= (output[i] == expected[i]);
  }
  var rightTick = "\u2713";
	var wrongTick = "\u2717";
  if (result) {
  	var out = rightTick + ' Test #' + test_case_number;
  	console.log(out);
  }
  else {
  	var out = '';
  	out += wrongTick + ' Test #' + test_case_number + ': Expected ';
  	out += printintegerArray(expected);
  	out += ' Your output: ';
  	out += printintegerArray(output);
  	console.log(out);
  }
  test_case_number++;
}

var arr_1 = [5, 15, 1, 3];
var expected_1 = [5, 10, 5, 4];
var output_1 = findMedian(arr_1);
check(expected_1, output_1);

var arr_2 = [2, 4, 7, 1, 5, 3];
var expected_2 = [2, 3, 4, 3, 4, 3];
var output_2 = findMedian(arr_2);
check(expected_2, output_2);

// Add your own test cases here
