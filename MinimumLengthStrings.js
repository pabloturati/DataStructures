// Add any extra import statements you may need here


// Add any helper functions you may need here


function minLengthSubstring(s, t) {
  // Write your code here
  const itemCount = {};
  const sArr = s.split('')
  const tArr = t.split('')
  const tSet = Array.from(new Set(sArr));
  
  //count occurances of each unique t letter in s. There should be as many or more in s then there are in t
  let i = 0;
  while(i < tSet.length){
    const { length: sCount} = sArr.filter(e => (e === tSet[i]));
    const { length: tCount} = tArr.filter(e => (e === tSet[i]));
    if(tCount > sCount){ return -1 }
    i++;
  }
  
  //Lets find the match index table
  const indexTable = tArr.map(e=>(sArr.indexOf(e)));
  console.log(indexTable);
  return Math.abs(indexTable[0] - indexTable[indexTable.length -1]) + 1;
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

var s_1 = "dcbefebce";
var t_1 = "fd";
var expected_1 = 5;
var output_1 = minLengthSubstring(s_1, t_1);
check(expected_1, output_1);

var s_2 = "bfbeadbcbcbfeaaeefcddcccbbbfaaafdbebedddf";
var t_2 = "cbccfafebccdccebdd";
var expected_2 = -1;
var output_2 = minLengthSubstring(s_2, t_2);
check(expected_2, output_2);

// Add your own test cases here
var s_3 = "abcdefghijk";
var t_3 = "kb";
var expected_3 = 10;
var output_3 = minLengthSubstring(s_3, t_3);
check(expected_3, output_3);

var s_4 = "acbdefghijk";
var t_4 = "kb";
var expected_4 = 9;
var output_4 = minLengthSubstring(s_4, t_4);
check(expected_4, output_4);
