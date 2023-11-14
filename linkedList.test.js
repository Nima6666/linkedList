const LinkedList = require("./linkedList");

describe("#prepend", () => {
  test("it adds to head", () => {
    const ll = LinkedList.pollute(1, 2, 3, 4, 5, 6);
    expect(ll.size).toBe(6);
    expect(ll.head.value).toBe(6);
  });
});

describe("#append", () => {
  test("it adds to tail", () => {
    const ll = LinkedList.polluteAppend(1, 2, 3, 4, 5, 6);
    ll.append(9);

    expect(ll.size).toBe(7);
    expect(ll.head.value).toBe(1);
    expect(ll.tail.value).toBe(9);
  });
});

describe("#at", () => {
  test("it returns the value at index", () => {
    const ll = LinkedList.pollute(1, 2, 3, 4, 5, 6);

    expect(ll.at(-1)).toBeNull();
    expect(ll.at(1).value).toBe(5);
  });
});

describe("#pop", () => {
  test("it pops the last node", () => {
    const ll = LinkedList.pollute(1, 2, 3, 4, 5, 6);
    const l = LinkedList.pollute(1);
    l.pop();
    expect(l.size).toBe(0);
    expect(ll.pop().value).toBe(1);
  });
});

describe("#contains", () => {
  test("it tests if value exists", () => {
    const ll = LinkedList.pollute(1, 2, 3, 4, 5, 6);
    expect(ll.contains(2)).toBe(true);
    expect(ll.contains(22)).toBe(false);
  });
});

describe("#find", () => {
  test("it returns index to given value or null", () => {
    const ll = LinkedList.polluteAppend(1, 2, 3, 4, 5, 6);

    expect(ll.find(4)).toBe(3);
    expect(ll.find(7)).toBeNull();
  });
});

describe("#insertAt", () => {
  test("it inserts value at given index", () => {
    const ll = LinkedList.polluteAppend(1, 2, 3, 4, 5, 6);
    ll.insertAt(7, 4);

    expect(ll.size).toBe(7);
  });
});

describe("#removeAt", () => {
  test("it removes node at given index", () => {
    const ll = LinkedList.polluteAppend(1, 2, 3, 4, 5, 6);
    const lt = LinkedList.polluteAppend(1);
    lt.removeAt(0);
    lt.toString();
    ll.removeAt(3);
    expect(ll.size).toBe(5);
    expect(lt.size).toBe(0);
  });
});
