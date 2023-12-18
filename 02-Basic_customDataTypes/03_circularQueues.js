
// A circular queue is a variation of the regular queue where the last element is connected to the first element to form a circle. This prevents the waste of space that can occur in a regular queue when elements are dequeued and new elements need to be enqueued. Implementing a circular queue in JavaScript involves handling the circular nature of the structure to efficiently manage the elements. Here's an example:

// javascript
// Copy code
class CircularQueue {
  constructor(capacity) {
    this.capacity = capacity;
    this.front = 0; // Index of the front element
    this.rear = 0;  // Index where the next element will be added
    this.size = 0;  // Current size of the circular queue
    this.elements = new Array(capacity);
  }

  // Enqueue (add element to the circular queue)
  enqueue(element) {
    if (this.isFull()) {
      console.log("Queue is full. Cannot enqueue.");
      return;
    }

    this.elements[this.rear] = element;
    this.rear = (this.rear + 1) % this.capacity;
    this.size++;
  }

  // Dequeue (remove and get the element from the front of the circular queue)
  dequeue() {
    if (this.isEmpty()) {
      console.log("Queue is empty. Cannot dequeue.");
      return null;
    }

    const dequeuedElement = this.elements[this.front];
    this.front = (this.front + 1) % this.capacity;
    this.size--;
    return dequeuedElement;
  }

  // Peek at the front element without removing it
  peek() {
    if (this.isEmpty()) {
      console.log("Queue is empty. Cannot peek.");
      return null;
    }

    return this.elements[this.front];
  }

  // Check if the circular queue is empty
  isEmpty() {
    return this.size === 0;
  }

  // Check if the circular queue is full
  isFull() {
    return this.size === this.capacity;
  }

  // Get the size of the circular queue
  getSize() {
    return this.size;
  }

  // Clear the circular queue
  clear() {
    this.front = 0;
    this.rear = 0;
    this.size = 0;
    this.elements = new Array(this.capacity);
  }
}

// Example usage of the CircularQueue class
let myCircularQueue = new CircularQueue(3);
myCircularQueue.enqueue(1);
myCircularQueue.enqueue(2);
myCircularQueue.enqueue(3);

console.log(myCircularQueue.dequeue()); // Removes and returns the first element (1)
console.log(myCircularQueue.peek());    // Returns the front element without removing it (2)
console.log(myCircularQueue.getSize()); // Returns the size of the circular queue (2)
myCircularQueue.enqueue(4);              // Enqueues element 4
console.log(myCircularQueue.getSize()); // Returns the size of the circular queue (3)
myCircularQueue.clear();                 // Clears the circular queue
// In this example, the circular nature of the queue is managed using the modulo operation (%) when updating the front and rear indices. The isFull and isEmpty methods are used to check if the circular queue is full or empty, respectively. The circular queue ensures efficient use of space and supports basic queue operations.





