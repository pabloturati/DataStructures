// Add any extra import statements you may need here


// Add any helper functions you may need here
const swap = (s, firstIdx = 0, secondIdx = s.length-1) => {
  const newS = [ ...s ];
  const s1 = s[firstIdx];
  newS[firstIdx] = s[secondIdx];
  newS[secondIdx] = s1;
  return newS;
}

function matchingPairs(s, t) {
  // Write your code here
  const swappers = s.split('').map((e, i)=>({ e, i })).filter((sElem, idx) => (sElem.e !== t[idx])).map(item => item.i);   
  return swap(s, ...swappers).reduce((acc, newSItem, currIdx)=>((newSItem === t[currIdx]) ? acc + 1 : acc), 0);
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

var s_1 = "abcde";
var t_1 = "adcbe";
var expected_1 = 5;
var output_1 = matchingPairs(s_1, t_1);
check(expected_1, output_1);

var s_2 = "abcd";
var t_2 = "abcd";
var expected_2 = 2;
var output_2 = matchingPairs(s_2, t_2);
check(expected_2, output_2); 

// Add your own test cases here
const s_3 = "mno";
const t_3 = "mno";
const expected_3 = 1;
var output_3 = matchingPairs(s_3, t_3);
check(expected_3, output_3); 

const s_4 = "";
const t_4 = "";
const expected_4 = 1;
var output_4 = matchingPairs(s_3, t_3);
check(expected_3, output_3); 
