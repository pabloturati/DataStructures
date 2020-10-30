// Add any extra import statements you may need here


// Add any helper functions you may need here


function balancedSplitExists(arr) {
  // Write your code here
  const initialArr = [ ...arr ].sort(); //Requieres sorted order.
  let i = 0;
  const { length: size } = initialArr; 
  
  while(i < size){
    const initialSum = initialArr.slice(0, i+1).reduce((acc, curr) =>(acc+curr));
    const finalSum = i < size-1 ? initialArr.slice(i+1, size).reduce((acc, curr) =>(acc+curr)) : arr[size-1];
    if(initialSum > finalSum) break;
    if((initialSum === finalSum) && (initialArr[i] < initialArr[i+1])) return true;
    i++;
  }
  return false;
}











// These are the tests we use to determine if the solution is correct.
// You can add your own at the bottom, but they are otherwise not editable!
function printString(str) {
  var out = '["' + str + '"]';
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
    out += printString(expected);
    out += ' Your output: ';
    out += printString(output);
    console.log(out);
  }
  test_case_number++;
}

var arr_1 = [2, 1, 2, 5];
var expected_1 = true;
var output_1 = balancedSplitExists(arr_1); 
check(expected_1, output_1); 

var arr_2 = [3, 6, 3, 4, 4];
var expected_2 = false;
var output_2 = balancedSplitExists(arr_2); 
check(expected_2, output_2); 

// Add your own test cases here
var arr_3 = [1, 5, 7, 1];
var expected_3 = true;
var output_3 = balancedSplitExists(arr_3); 
check(expected_3, output_3); 

var arr_4 = [12, 7, 6, 7, 6];
var expected_4 = false;
var output_4 = balancedSplitExists(arr_4); 
check(expected_4, output_4); 
