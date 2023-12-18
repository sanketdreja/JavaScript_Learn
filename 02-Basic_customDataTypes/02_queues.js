
// In JavaScript, a queue is a data structure that follows the First In, First Out (FIFO) principle. This means that the first element added to the queue is the first one to be removed. You can implement a queue using an array or create a custom queue class. Here's an explanation of both approaches:

// Using an Array as a Queue:

// Creating an empty queue
let queue = [];

// Enqueue (add elements to the back of the queue)
queue.push(1);
queue.push(2);
queue.push(3);

// Dequeue (remove and get the element from the front of the queue)
let dequeuedElement = queue.shift(); // Removes and returns the first element (1)
// Creating a Custom Queue Class:

class Queue {
  constructor() {
    this.items = [];
  }

  // Enqueue (add element to the back of the queue)
  enqueue(element) {
    this.items.push(element);
  }

  // Dequeue (remove and get the element from the front of the queue)
  dequeue() {
    if (this.isEmpty()) {
      return null; // or throw an error
    }
    return this.items.shift();
  }

  // Peek at the front element without removing it
  peek() {
    if (this.isEmpty()) {
      return null; // or throw an error
    }
    return this.items[0];
  }

  // Check if the queue is empty
  isEmpty() {
    return this.items.length === 0;
  }

  // Get the size of the queue
  size() {
    return this.items.length;
  }

  // Clear the queue
  clear() {
    this.items = [];
  }
}

// Example usage of the custom Queue class
let myQueue = new Queue();
myQueue.enqueue(1);
myQueue.enqueue(2);
myQueue.enqueue(3);

console.log(myQueue.dequeue()); // Removes and returns the first element (1)
console.log(myQueue.peek()); // Returns the front element without removing it (2)
console.log(myQueue.size()); // Returns the size of the queue (2)
myQueue.clear(); // Clears the queue
// In this custom Queue class, enqueue is used to add elements to the back of the queue, dequeue removes and returns the element from the front, peek returns the front element without removing it, isEmpty checks if the queue is empty, size returns the size of the queue, and clear empties the queue.

// Both the array-based and custom class implementations achieve the same result, and you can choose the one that fits your specific use case and preferences. Custom classes provide a more organized and encapsulated way to work with queues in larger applications.