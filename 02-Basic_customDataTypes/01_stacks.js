// In JavaScript, you can implement a stack, which is a data structure that follows the Last In, First Out (LIFO) principle. This means that the last element added to the stack is the first one to be removed. You can use an array or create a custom stack class to represent a stack in JavaScript.

// Using an Array as a Stack:
// // Creating an empty stack
// let stack = [];

// // Pushing elements onto the stack
// stack.push(1);
// stack.push(2);
// stack.push(3);

// // Popping elements from the stack
// let poppedElement = stack.pop(); // Removes and returns the last element (3 in this case)
// Creating a Custom Stack Class:
// You can also create a custom stack class for a more structured implementation:

// class Stack{
//   constructor(){
//     this.items=[];

//   }

//   //pushing elements to the stack

//   push(element){
//     this.items.push(element);
//   }
//   // removing the element from stack
//   pop(){
//     this.items.pop();
//   }
//   // peek element at top 
//   peek(){
//     return this.items[this.items.length-1];
//   }
//   // check if the stack is empty
//   isEmpty(){
//     return this.items.length===0;
//   }
//   //size of the stack 
//   size(){
//     return this.items.length;
//   }
//   // print stack

//   print(){
//     console.log(this.items.toString());
//   }
//   //clear stack
//   clear(){
//     this.items=[];

//   }

//   //reverse the stack
//   reverse(){
//     let reversedStack=new Stack();
//     while(!this.isEmpty()){
//       reversedStack.push(this.pop());
//     }
//     return reversedStack;
//   }
//   //merge two stacks
//   merge(stackOne,stackTwo){
//     while(!stackOne.isEmpty()){
//       this.push(stackOne.pop());
//     }
//     while(!stackTwo.isEmpty()){
//       this.push(stackTwo.pop());
//     }
//   }
//   // reverse the stack using recursion
//   reverseRecursion(stack){
//     if(stack.size()==1){
//       return stack;
//     }
//     let item=stack.pop();
//     let reversedStack=this.reverseRecursion(stack);
//     reversedStack.push(item);
//     return reversedStack;
//   }

// }

// // Example usage of the custom Stack class
// let myStack = new Stack();
// myStack.push(1);
// myStack.push(2);
// myStack.push(3);

// console.log(myStack.pop()); // Removes and returns the last element (3)
// console.log(myStack.peek()); // Returns the top element without removing it (2)
// console.log(myStack.size()); // Returns the size of the stack (2)
// myStack.clear(); // Clears the stack
// In this custom Stack class, push is used to add elements, pop is used to remove and return the top element, peek returns the top element without removing it, isEmpty checks if the stack is empty, size returns the size of the stack, and clear empties the stack.

// Both the array-based and custom class implementations achieve the same result, and you can choose the one that fits your specific use case and preferences. Custom classes provide a more organized and encapsulated way to work with stacks in larger applications.
//==================================================================


class Stack {
  constructor() {
    this.items = {};
    this.count = 0; // To keep track of the number of elements in the stack
  }

  // Push element onto the stack
  push(element) {
    this.items[this.count] = element;
    this.count++;
  }

  // Pop element from the stack
  pop() {
    if (this.isEmpty()) {
      return null; // or throw an error
    }
    this.count--;
    const poppedElement = this.items[this.count];
    delete this.items[this.count];
    return poppedElement;
  }

  // Peek at the top element without removing it
  peek() {
    if (this.isEmpty()) {
      return null; // or throw an error
    }
    return this.items[this.count - 1];
  }

  // Check if the stack is empty
  isEmpty() {
    return this.count === 0;
  }

  // Get the size of the stack
  size() {
    return this.count;
  }

  // Clear the stack
  clear() {
    this.items = {};
    this.count = 0;
  }
}

// Example usage of the custom Stack class
let myStack = new Stack();
myStack.push(1);
myStack.push(2);
myStack.push(3);

console.log(myStack.pop()); // Removes and returns the last element (3)
console.log(myStack.peek()); // Returns the top element without removing it (2)
console.log(myStack.size()); // Returns the size of the stack (2)
myStack.clear(); // Clears the stack
