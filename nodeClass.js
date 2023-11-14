class node{
    constructor(value, nextNode) {
        this.value = value;
        this.nextNode = nextNode || null;
    }
}

module.exports = node;