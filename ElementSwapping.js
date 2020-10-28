// Add any extra import statements you may need here


// Add any helper functions you may need here
  function getIdx(lexArr, j, start){
    const myval = (lexArr.length > j) ? j+1 : lexArr.length;
    return myval
  }

function findMinArray(arr, k) {
  // Write your code here
  let j = k; //2
  let start = 0;
  let arrPtr = [ ...arr ];
  let testcount = 0;
  
  while(j > 0 && start < arr.length){
    const lexArr = arrPtr.map((e, i)=>({ e, i }));
    const smallestElement = lexArr
      .slice(start, start + getIdx(lexArr,j)) //this creates an sub array from start to as many k are left
      .sort((a,b) =>(a.e - b.e))[0];
    
    const { i:smallesIdx, e:smallestVal } = smallestElement;
    
    if(lexArr[smallesIdx] != lexArr[start]){
      lexArr.splice(smallesIdx, 1);
      lexArr.splice(start, 0, smallestElement);
      j = j - (smallesIdx - start);
    }
    start++;
    if(start === lexArr.length) start = 0;
    arrPtr = lexArr.map(item=>item.e)
  }
  
  return arrPtr;
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


var n_1 = 3, k_1 = 2;
var arr_1 = [5, 3, 1];
var expected_1 = [1, 5, 3];
var output_1 = findMinArray(arr_1, k_1);
check(expected_1, output_1);

var n_2 = 5, k_2 = 3;
var arr_2 = [8, 9 ,11, 2, 1];
var expected_2 = [2, 8, 9, 11, 1];
var output_2 = findMinArray(arr_2, k_2);
check(expected_2, output_2);

// Add your own test cases here
var n_3 = 5, k_3 = 5;
var arr_3 = [8, 9 ,11, 2, 1];
var expected_3 = [1, 8, 9, 2, 11];
var output_3 = findMinArray(arr_3, k_3);
check(expected_3, output_3);
