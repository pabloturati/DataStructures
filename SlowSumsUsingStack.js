// Add any extra import statements you may need here


// Add any helper functions you may need here
class Node {
  constructor(val){
    this.val = val;
    this.next = null;
  }
}


class Stack {
  constructor(){
    this.head = null;
  }
  
  get next(){
    if(this.head) return this.head.next;
    return null;
  }
  
  get isEmpty(){
    return !this.head;
  }
  push(val){
    const newNode = new Node(val);
    if(!this.head) this.head = newNode;
    else{
      const currHead = this.head;
      this.head = newNode;
      newNode.next = currHead;
    }
  }
  popHead(){
    if(this.isEmpty) return null;
    const currHeadVal = this.head.val;
    this.head = this.head.next;
    return currHeadVal;
  }
  printStack(){
    let curr = this.head;
    const stackArr = []
    while(curr){
      stackArr.push(curr.val);
      curr = curr.next;
    }
    console.log(stackArr);
  }
} 


function getTotalTime(arr) {
  // Write your code here
  if(arr.length === 1) return arr[0]; 
  const numStack = new Stack();
  [ ...arr ].sort().forEach(e =>{ numStack.push(e) })
  
  let totalPenalty = 0;
  while(numStack.next){
    const penalty = numStack.popHead() + numStack.popHead()
    numStack.push(penalty);
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
