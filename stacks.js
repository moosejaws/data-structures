class Stack {
    constructor() {
    this.items = []
    this.count = 0
    }

    push(element) {
    this.items[this.count] = element
    console.log(`${element} added to ${this.count}`)
    this.count += 1
    return this.count - 1
    }

    //Return and remove tope element in stack
    //Return undefined if stack is empty
    

    pop () {
    if(this.count == 0) return undefined //if stack is empty
    let deleteItem = this.items[this.count - 1]
    this.count -= 1
    console.log(`${deleteItem} removed`)
    return deleteItem
    }

    // peek is used to check top element in stack
    peek() {
    console.log(`Top element is ${this.items[this.count - 1]}`)
    return this.items[this.count - 1]
    }

    //check if stack is empty
    isEmpty() {
    console.log(this.count == 0 ? 'Stack is empty' : 'Stack is NOT empty')
    return this.count == 0
    }

    //check size of stack
    size() {
    console.log(`${this.count} elements in stack`)
    return this.count
    }

    //print elements in stack
    print() {
    let str = ''
    for(let i = 0; i < this.count; i++){
        str += this.items[i] + ' '
    }
    return str
    }
    // clear stack
    clear() {
    this.items = []
    this.count = 0
    console.log('Stack cleared..')
    return this.items
    }
    
}

const stack = new Stack()

stack.push(100)
stack.push(200)
stack.push(300)

stack.peek()

stack.pop()
stack.pop()
stack.pop()

stack.push(250)
stack.peek()
stack.pop()
stack.push(350)
stack.peek()
stack.push(400)
stack.push(500)
stack.push(600)

stack.clear()

stack.push(700)
stack.push(300)
stack.clear()
stack.push(100)
stack.push(200)


console.log(stack.print())