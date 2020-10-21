/* Heap example
  Condition for a heap: The value of each node is always greater (for maxHeap) or smaller (for minHeap) than that of its children.
*/

class Heap{

  constructor(values = []){
    this.arr = []
    values.forEach(value => this.insertNode(value));
  }

  get heap(){
    return this.arr;
  }

  get size(){
    return this.arr.length;
  }

  withinRange(index){
    return index < this.size;
  }

  swap(indexA, indexB){
    const valueA = this.arr[indexA];
    this.arr[indexA] = this.arr[indexB];
    this.arr[indexB] = valueA;
  }

  handleHeapify(){
    for(let i = parseInt(this.size / 2) - 1; i >= 0; i--){
      this.heapifyTree(i);
    }
  }

  heapifyTree(i){
    console.log('i is ', i)
    let largestIndex = i;
    const leftIndex = i * 2 + 1;
    const rightIndex = i * 2 + 2;
    
    if(this.withinRange(leftIndex, this.arr) && this.arr[leftIndex] > this.arr[largestIndex]){
      largestIndex = leftIndex;
    } 
    if(this.withinRange(rightIndex, this.arr) && this.arr[rightIndex] > this.arr[largestIndex]){
      largestIndex = rightIndex;
    }
    if(i !== largestIndex){
      this.swap(largestIndex, i);
      this.heapifyTree(largestIndex);
    }
  }

  insertNode(newValue){
    this.arr.push(newValue);
    // console.log('in insert', arr);
    if(this.size === 1) return;
    this.handleHeapify()
  }

  deleteNode(valueToDelete){
    //find the index of the item to remove
    let i = 0;
    while(i < this.size){
      if(this.arr[i] === valueToDelete) break;
      i += 1;
    }
    console.log('i is: ', i)

    //swap the last item with item to remove
    this.swap(i, this.size-1)
    
    //pop the last item
    this.arr.pop()
    this.handleHeapify()
  }
}

const myHeap = new Heap([3,4,9,5,2]);
console.log(myHeap.heap)
myHeap.deleteNode(9)
console.log(myHeap.heap)
