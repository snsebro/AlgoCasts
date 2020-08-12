// --- Directions
// Implement classes Node and Linked Lists
// See 'directions' document

class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  // insertFirst(data) {
  //   if (!this.head) {
  //     this.head = new Node(data)
  //   } else {
  //     this.head.next = this.head
  //     this.head = new Node(data)
  //   }
  // }

  insertFirst(data) {
    this.head = new Node(data, this.head);
  }

  size() {
    let size = 0;
    let node = this.head;

    while (node) {
      size++;
      node = node.next;
    }

    return size;
  }

  getFirst() {
    return this.head;
  }

  getLast() {
    if (!this.head) {
      return null;
    }

    let node = this.head;

    while (node) {
      // if(node.next === null) return node
      // node = node.next

      return node.next === null ? node : (node = node.next);
    }
  }

  clear() {
    let node = this.head;

    while (node) {
      node = node.next;
      this.head = null;
    }
  }

  removeFirst() {
    if (!this.head) {
      return;
    }

    let node = this.head;

    if (this.size() === 1) {
      this.head = null;
    } else {
      this.head = node.next;
      node = null;
    }
  }

  removeLast() {
    if (!this.head) {
      return;
    }

    if (this.size() === 1) {
      this.head = null;
      return;
    }

    let previous = this.head;
    let node = this.head.next;

    while (node.next) {
      previous = node;
      node = node.next;
    }
    previous.next = null;
  }

  insertLast(data) {
    if (!this.head) {
      this.head = new Node(data);
    }

    let last = this.getLast();
    last.next = new Node(data);
  }

  getAt(index) {
    let counter = 0;
    let node = this.head;

    while (node) {
      if (counter === index) {
        return node;
      }
      counter++;
      node = node.next;
    }
    return null; 
  }

  removeAt(index) {
    if (!this.head) {
      return
    }

    if (index = 0) {
      this.head = this.head.next
      return
    }

    let previous = this.getAt(index - 1)

    if (!previous || !previous.next) {
      return
    }

    previous.next = this.getAt(index + 1)
  }

  insertAt(data, index) {
    if (!this.head) {
      this.head = new Node(data)
      return
    } 

    if (index === 0) {
      this.head = new Node(data, this.head)
      return
    }

    let previous = this.getAt(index - 1) || this.getLast()
    let node = new Node(data, previous.next)
    previous.next = node
  }

  forEach(fn) {
    let counter = 0
    let node = this.head

    while (node) {
      fn(node, counter)
      node = node.next
      counter ++
    }
  }

  *[Symbol.iterator]() {
    let node = this.head
    while (node) {
      yield node
      node = node.next
    }
  }
}

module.exports = { Node, LinkedList };
