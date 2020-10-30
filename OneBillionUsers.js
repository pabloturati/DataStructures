// Add any extra import statements you may need here


// Add any helper functions you may need here
const ONE_BILLION = 1000000000;

function calcUsers(gArr, i){
  return gArr.reduce((acc, item )=>{
    return acc + Math.floor(Math.pow(item, i));
  }, 0)
}

function binarySearch(gArr, lowLim, highLim){
  let mid;
  let high = highLim;
  let low = lowLim;
  while (high > low){
    mid = Math.floor((high - low)/2) + low;
    if(calcUsers(gArr,mid) < ONE_BILLION) low = mid + 1;
    else high = mid;
  }
  return high;
}

function recursiveSearch(gArr, lowLim, highLim){
  
  //Rec. Base case happens when highLim is lower then lowLim;
  if(lowLim >= highLim) return lowLim;

  const mid = Math.floor((highLim - lowLim)/2) + lowLim;
  const users = calcUsers(gArr, mid);
  if(users < ONE_BILLION) return recursiveSearch(gArr, mid+1, highLim);
  else return recursiveSearch(gArr, lowLim, mid);
}

function rangeAproximation(gArr){
  let i = 1; //first day
  let upperLimit = calcUsers(gArr, i); //Calculate users on first day.
  if(upperLimit >= ONE_BILLION) return 1;

  //Quickly Finds the day when one billion has been exceeded.
  while(upperLimit < ONE_BILLION){
    i *= 2;
    upperLimit = calcUsers(gArr, i);
  }

  //Returns approximation to create a range.
  return { minAprox: Math.floor(i/2), maxAprox: i}
}

function getBillionUsersDay(growthRates) {
  // Write your code here
  // Finds
  const { minAprox, maxAprox } = rangeAproximation(growthRates);

  // Solves with recursive binarySearch loop. Uncomment next line to solve by recursion.
  //return recursiveSearch(growthRates, minAprox, maxAprox);

  //Solves with recursive binary binarySearch. Comment next line to solve by loop.
  return recursiveSearch(growthRates, minAprox, maxAprox);
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

var test_1 = [1.1, 1.2, 1.3];
var expected_1 = 79;
var output_1 = getBillionUsersDay(test_1);
check(expected_1, output_1);

var test_2 = [1.01, 1.02];
var expected_2 = 1047;
var output_2 = getBillionUsersDay(test_2);
check(expected_2, output_2);

// Add your own test cases here
var test_3 = [1.5];
var expected_3 = 52;
var output_3 = getBillionUsersDay(test_3);
check(expected_3, output_3);
