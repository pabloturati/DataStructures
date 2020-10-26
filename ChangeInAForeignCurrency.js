// Add any extra import statements you may need here


// Add any helper functions you may need here
function isDivisibleBy(num, denominations, i){
  const modulus = num % denominations[i];
  if(modulus === 0) return 0;
  else if(i === 0) return modulus;
  else return isDivisibleBy(modulus, denominations, i-1)
}

function canGetExactChange(targetMoney, denominations) {
  // Write your code here
  return isDivisibleBy(targetMoney, denominations, denominations.length-1) === 0;
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

var target_1 = 94;
var arr_1 = [5, 10, 25, 100, 200];
var expected_1 = false;
var output_1 = canGetExactChange(target_1, arr_1);
check(expected_1, output_1);

var target_2 = 75;
var arr_2 = [4, 17, 29];
var expected_2 = true;
var output_2 = canGetExactChange(target_2, arr_2);
check(expected_2, output_2);

// Add your own test cases here
