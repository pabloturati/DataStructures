// Add any extra import statements you may need here


// Add any helper functions you may need here

class Heap{
  constructor(){
    this.arr = []
  }
  
  get size(){
    return this.arr.length
  }

  get heap(){
    return this.arr;
  }

  isInRange(index){
    return index < this.size
  }

  swap(index1, index2){
    const val1 = this.arr[index1];
    this.arr[index1] = this.arr[index2];
    this.arr[index2] = val1;
  }

  heapify(i){
    let largest = i;
    const left = 2 * i + 1;
    const right = 2 * i + 2;
    if(this.isInRange(left) && this.arr[left] > this.arr[largest]){
      largest = left;
    }
    if(this.isInRange(right) && this.arr[right] > this.arr[largest]){
      largest = right
    }
    if(i !== largest){
      this.swap(i, largest);
      this.heapify(largest);
    }
  }

  handleHeapify(){
    for(let i = parseInt(this.size/2)-1; i >= 0; i--){
      this.heapify(i);
    }
  }

  insert(item){
    //add to back of arr
    this.arr.push(item);
    if(this.size === 1) return;
    this.handleHeapify();
  }
  
  popRoot(){
    //save the root value 
    const rootVal = this.heap[0];
    
    //swap the root (idx = 0) with the last value (idx = this.size -1)
    this.swap(0, this.size-1);
    
    // Eliminate last item
    this.heap.pop()
    
    //Heapify!
    this.handleHeapify()
    return rootVal;
  }
}


function findMaxProduct(arr) {
  // Write your code here
  const myHeap = new Heap();
  return arr.map((item, idx)=>{
    myHeap.insert(item);
    if(idx < 2) return -1;
    
    
    // Get top three items and their product
    const topThree = []
    let maxTripleProduct = 1; 
    for(let i = 0; i < 3; i++){
      const rootVal = myHeap.popRoot();
      topThree.push(rootVal)
      maxTripleProduct *= rootVal;
    }
    // Put back the current top three items
    topThree.forEach(e => myHeap.insert(e))
    
    // Save their triple product.
    return maxTripleProduct;
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

var arr_1 = [1, 2, 3, 4, 5];
var expected_1 = [-1, -1, 6, 24, 60];
var output_1 = findMaxProduct(arr_1);
check(expected_1, output_1);

var arr_2 = [2, 4, 7, 1, 5, 3];
var expected_2 = [-1, -1, 56, 56, 140, 140];
var output_2 = findMaxProduct(arr_2);
check(expected_2, output_2);

// Add your own test cases here
