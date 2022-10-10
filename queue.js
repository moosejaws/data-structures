class Queue {
    constructor() {
    this.items = [];
    }

    enqueue(item) {    
    this.items.push(item);
}

    dequeue() {
    return this.items.shift();
    }

    peek() {
    return this.items[0];
    }

    getSize() {
    return this.items.length;
    }
    isEmpty() {
    return this.getSize() === 0;
    }
}

const queue = new Queue();

queue.enqueue(7);

queue.enqueue(6);
console.log(queue);
queue.dequeue();
console.log(queue);
queue.enqueue(9);
queue.enqueue(10);
queue.peek();
console.log(queue.peek())
queue.enqueue("toyota")
console.log(queue.peek())
console.log(queue)