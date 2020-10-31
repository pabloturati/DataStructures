// Add any extra import statements you may need here


// Add any helper functions you may need here
function areSameTriangle(triA, triB){
  let j = 0;
  while(j < triA.length){
    if(triA[j] !== triB[j]) return false;
    j++;
  }
  return true;
}

function sortSetAndTriangles(arr){
  //Sort all of the triangles based on the sum of thir lengths and sort each triangle within it.
  return sortedTriangles = arr
    .map(triangle => ({
      tri: triangle.sort(),
      sum: triangle.reduce((acc, curr)=>(acc+curr))
    }))
    .sort((a,b)=>(a.sum - b.sum))
    .map(item => item.tri);
}

function countDistinctTriangles(arr) {
  // Write your code here
  if(!arr || arr.length < 1) return 0;
  
  const sortedTriangles = sortSetAndTriangles(arr);
  let triCount = 1;
  let currTri = sortedTriangles[0];
      
  for(let i = 1; i < sortedTriangles.length; i++){
    const nextTri = sortedTriangles[i];  
    if(areSameTriangle(currTri, nextTri)) continue;
    triCount += 1;
    currTri = nextTri;
  }
  return triCount;
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

var arr_1 = [[7, 6, 5], [5, 7, 6], [8, 2, 9], [2, 3, 4], [2, 4, 3]];
var expected_1 = 3;
var output_1 = countDistinctTriangles(arr_1);
check(expected_1, output_1);

var arr_2 = [[3, 4, 5], [8, 8, 9], [7, 7, 7]];
var expected_2 = 3;
var output_2 = countDistinctTriangles(arr_2);
check(expected_2, output_2);

// Add your own test cases here
var arr_3 = [[5, 8, 9], [5, 9, 8], [9, 5, 8], [9, 8, 5], [8, 9, 5], [8, 5, 9]];
var expected_3 = 1;
var output_3 = countDistinctTriangles(arr_3);
check(expected_3, output_3);

var arr_4 = [[8, 4, 6], [100, 101, 102], [84, 93, 173]];
var expected_4 = 3;
var output_4 = countDistinctTriangles(arr_4);
check(expected_4, output_4);

var arr_5 = [[8, 4, 6]];
var expected_5 = 1;
var output_5 = countDistinctTriangles(arr_5);
check(expected_5, output_5);
