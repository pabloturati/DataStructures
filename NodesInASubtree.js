// Add any extra import statements you may need here


// Definition for a Node
function Node(val, children) {
  this.val = val === undefined ? 0 : val;
  this.children = children === undefined ? [] : children;
};

// Add any helper functions you may need here
function findNode(node, val){
  if(node){
    if(node.val === val) return node;
    else{
      let nodeFound = findNode(node.children[0], val);
      if(!nodeFound) nodeFound = findNode(node.children[1], val);
      return nodeFound;
    }
  }else{
    return null;
  }
}

function nodeTraverseCounter(node, queryIndexes, counterArr){
  if(queryIndexes.includes(node.val)) counterArr.push(true);
  node.children.forEach(child=>{
    nodeTraverseCounter(child, queryIndexes, counterArr)
  })
}

function countOfNodes(root, queries, string) {
  // Write your code here
  const queryResults = []
  
  //for each query
  queries.forEach(query=>{
    const [ u, c ] = query
    const counterArr = [];
  
    // Create list of 1-indexed values taht match query character
    const queryIndexes = string.split('')
      .map((item, i) =>({ letter: item, idx: i+1 }))
      .filter(item => item.letter === c)
      .map(item=> item.idx);
  
    const targetNode = findNode(root, u);
    const childResults = nodeTraverseCounter(targetNode, queryIndexes, counterArr);
    queryResults.push(counterArr.length)
  })
  return queryResults;
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

// Testcase 1
var n_1 = 3, q_1 = 1;
var s_1 = "aba";
var node_1 = new Array(n_1 + 1);
for (var i = 1; i <= n_1; i++) {
  node_1[i] = new Node(i);
}
var root1 = node_1[1];
node_1[1].children = [node_1[2], node_1[3]];
var queries_1 = [[1, 'a']];
var output_1 = countOfNodes(root1, queries_1, s_1); 
var expected_1 = [2];
check(expected_1, output_1);

// Testcase 2
var n_2 = 7, q_2 = 3;
var s_2 = "abaacab";
var node_2 = new Array(n_2 + 1);
for (var i = 1; i <= n_2; i++) {
  node_2[i] = new Node(i);
}
var root2 = node_2[1];
node_2[1].children = [node_2[2], node_2[3], node_2[7]];
node_2[2].children = [node_2[4], node_2[5]];
node_2[3].children = [node_2[6]];
var queries_2 = [[1, 'a'], [2, 'b'], [3, 'a']]; 
var output_2 = countOfNodes(root2, queries_2, s_2); 
var expected_2 = [4, 1, 2];
check(expected_2, output_2); 

// Add your own test cases here
