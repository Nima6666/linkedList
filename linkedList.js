/* eslint-disable no-plusplus */
const Node = require("./nodeClass");

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }

  prepend(value) {
    const newNode = new Node(value, this.head);
    this.head = newNode;
    if (!this.tail) {
      this.tail = this.head;
    }
    this.size++;
  }

  at(index) {
    if (index >= this.size || index < 0) return null;
    let initialElem = this.head;

    for (let i = 0; i < index; i++) {
      initialElem = initialElem.nextNode;
    }
    return initialElem;
  }

  toString() {
    let output = "";
    let current = this.head;
    while (current) {
      output = `${output} ${current.value} ->`;
      current = current.nextNode;
    }
    return console.log(`${output} null`);
  }

  pop() {
    let topLevel = this.head;
    let popped = 0;
    if (this.size === 1) {
      popped = topLevel;
      this.head = null;
      this.tail = null;
      this.size = 0;
      return popped;
    }
    for (let i = 0; i < this.size; i++) {
      if (i + 2 === this.size) {
        console.log(topLevel);
        popped = topLevel.nextNode;
        topLevel.nextNode = null;
        this.size--;
      }
      topLevel = topLevel.nextNode;
    }
    return popped;
  }

  append(value) {
    const newNode = new Node(value);
    let currentNode = this.head;
    if (this.size === 0) {
      this.head = newNode;
      this.size++;
      return;
    }
    for (let i = 0; i < this.size; i++) {
      if (i + 1 === this.size) {
        currentNode.nextNode = newNode;
        this.tail = newNode;
        this.size++;
        return;
      }
      currentNode = currentNode.nextNode;
    }
  }

  contains(value) {
    let output = false;
    let currentHead = this.head;
    for (let i = 0; i < this.size; i++) {
      if (currentHead.value === value) {
        output = true;
      }
      currentHead = currentHead.nextNode;
    }
    return output;
  }

  find(value) {
    if (!this.contains(value)) {
      return null;
    }

    let currentHead = this.head;

    for (let i = 0; i < this.size; i++) {
      if (currentHead.value === value) {
        return i;
      }
      currentHead = currentHead.nextNode;
    }
  }

  insertAt(value, index) {
    if (index > this.size) {
      return console.error("given index is larger than list size");
    }

    let currentHead = this.head;

    for (let i = 0; i < index; i++) {
      if (i === index - 1) {
        const newNode = new Node(value, currentHead.nextNode);
        currentHead.nextNode = newNode;
        return this.size++;
      }
      currentHead = currentHead.nextNode;
    }
  }

  removeAt(index) {
    if (index > this.size) {
      return console.error("given index is larger than list size");
    }
    let topLevel = this.head;
    if (index === 0) {
      this.head = topLevel.nextNode;
      this.size--;
      return;
    }
    for (let i = 0; i < index; i++) {
      if (i + 1 === index) {
        topLevel.nextNode = topLevel.nextNode.nextNode;
        this.size--;
      }
      topLevel = topLevel.nextNode;
    }
  }
}

LinkedList.pollute = (...value) => {
  const ll = new LinkedList();
  for (let i = 0; i < value.length; i++) {
    ll.prepend(value[i]);
  }
  return ll;
};

LinkedList.polluteAppend = (...value) => {
  const ll = new LinkedList();
  for (let i = 0; i < value.length; i++) {
    ll.append(value[i]);
  }
  return ll;
};

const lt = LinkedList.pollute(5, 6, 7, 8, 4, 1, 10, 37);
lt.toString();
const ltAppend = LinkedList.polluteAppend(5, 6, 7, 8, 4, 1, 10, 37);
ltAppend.toString();
lt.toString();
lt.removeAt(10);
lt.toString();

module.exports = LinkedList;
