class Node {
    constructor(data, next = null) {
        this.data = data;
        this.next = next;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.size = 0;
    }

    // insert first node

    insertFirst(data) {
        this.head = new Node(data, this.head);
        this.size++;
        
    }
    // insert last node

    insertLast(data) {
        let node = new Node(data);
        let current;

        //edgecase, if empty make it the head, if theres nothing here if empty
        if(!this.head) {
        this.head = node;
        
        } else {
        current = this.head;
        while(current.next) {
            current = current.next;
        }
        current.next = node;
        }
        this.size++;
    }


    // insert at index

    insertAt(data, index) {
    //edgecase, if index is out of range
    if(index > 0 && index > this.size) {
        return;
    }

    if(index === 0) {
        this.head = new Node(data, this.head);
        return;
    }

    const node = new Node(data);
    let current, previous;

    //set current to first
    current = this.head;
    let count = 0;

    while(count < index) {
        previous = current; //Node before the index we want to insert
        count++;
        current = current.next; // node after the index
    }

    node.next = current; // the new node should now be the value of current
    previous.next = node;

    this.size++;
    } 

    // Get at index

    getAt(index) {
        let current = this.head;
        let count = 0;

        while(current) {
        if(count == index) {
            console.log(current.data);
        }
        count++;
        current = current.next;
        }

        return;
    }

    // Remove at index

    removeAt() {
        if (index > 0 && index > this.size) {
        return;
        }

        let current = this.head;
        let previous;
        let count = 0;

        //remove first

        if (index === 0) {
        this.head = current.next;
        } else {
        while ( count < index) {
            count++;
            previous = current;
            current = current.next;
        }

        previous.next = current.next
        }
        this.size--;
    }

    // Clear list

    clearList() {
        this.head = null;
        this.size = 0
    }

    //print list data

    printListData() {
        let current = this.head; //represents current node

        while(current)  { //looping through all the nodes
        console.log(current.data);
        current = current.next; //looping, next node, and outputing
        }
    }
}

const ll = new LinkedList();

ll.insertFirst("Lili");
ll.insertFirst("Virgo");
ll.insertLast(21)
ll.insertLast("hii")
ll.insertFirst(1)


//ll.clearList();
ll.printListData();