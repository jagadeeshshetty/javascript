
class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class SinglyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.lenght = 0;
    }

/**
 * Add a node to the end of the list.
 * Time Complexity: O(1)
 * Space Complexity: O(1)
 * @param {*} value
 * @returns {Node}
 * @memberof SinglyLinkedList
 * @example
 * const list = new SinglyLinkedList();
 * list.addToTail(1);
 * list.addToTail(2);
 * list.addToTail(3);
 * list.addToTail(4);
 * list.addToTail(5);
 *
 * console.log(list.toString());
 * // => 1,2,3,4,5
 * console.log(list.length);
 * // => 5
 * console.log(list.head.value);
 * // => 1
 * console.log(list.tail.value);
 * // => 5
 * console.log(list.tail.next);
 * // => null
 * console.log(list.head.next.value);
 * // => 2
 * console.log(list.head.next.next.value);
 * // => 3
 * console.log(list.head.next.next.next.value);
 * // => 4
 * console.log(list.head.next.next.next.next.value);
 * // => 5
 * console.log(list.head.next.next.next.next.next);
 * // => null
 * console.log(list.tail.next);
 * // => null
 * console.log(list.tail.next.value);
 * // => null
 * console.log(list.tail.next.next);
 * // => null
 * console.log(list.tail.next.next.value);
 * // => null
 * console.log(list.tail.next.next.next);
 * // => null
 * console.log(list.tail.next.next.next.value);
 * // => null
 * console.log(list.tail.next.next.next.next);
 * // => null
 * console.log(list.tail.next.next.next.next.value);
 * // => null
 * console.log(list.tail.next.next.next.next.next);
 * // => null
 * console.log(list.tail.next.next.next.next.next.value);
 * // => null
 * console.log(list.tail.next.next.next.next.next.next);
 * // => null
 * console.log(list.tail.next.next.next.next.next.next.value);
 * // => null
 * console.log(list.tail.next.next.next.next.next.next.next);
 * /
// Function should accept a value.
push(value) {
    // 2. Create a new node with the value.
    const node = new Node(value);
    if (!this.head) {
        this.head = node;
        this.tail = node;
    } else {
        this.tail.next = node;
        this.tail = node;
    }
    this.lenght++;
}
}

// var first = new Node(1);
// first.next = new Node(2);
// first.next.next = new Node(3);
// first.next.next.next = new Node(4);


var list = new SinglyLinkedList();
list.push(1);
list.push(2);
list.push(3);
list.push(4);