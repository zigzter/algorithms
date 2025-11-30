export class ListNode<T> {
  next: ListNode<T> | null;
  constructor(public value: T) {
    this.value = value;
    this.next = null;
  }
}

export class LinkedList<T> {
  head: ListNode<T>;
  tail: ListNode<T>;
  constructor() {
    this.head = new ListNode(null as any);
    this.tail = this.head;
  }

  append(value: T) {
    const newNode = new ListNode(value);
    this.tail.next = newNode;
    this.tail = newNode;
  }

  prepend(value: T) {
    const next = this.head.next;
    const newNode = new ListNode(value);
    newNode.next = next;
    this.head.next = newNode;
  }

  size() {
    let count = 0;
    // We're using a dummy node to init the list, so start at its `next`
    let curr: ListNode<T> | null = this.head.next;
    while (curr) {
      count++;
      curr = curr.next;
    }
    return count;
  }

  get(index: number) {
    // We're using a dummy node to init the list, so start at its `next`
    let curr: ListNode<T> | null = this.head.next;
    let currIndex = 0;
    while (curr) {
      if (currIndex === index) {
        return curr.value;
      }
      curr = curr.next;
      currIndex++;
    }
    return null;
  }

  remove(index: number) {
    let prev = this.head;
    let curr: ListNode<T> | null = this.head.next;
    let currIndex = 0;
    while (curr) {
      if (currIndex === index) {
        prev.next = curr.next;
        curr.next = null;
        return;
      }
      prev = curr;
      curr = curr.next;
      currIndex++;
    }
  }

  clear() {
    this.head = new ListNode(null as any);
    this.tail = this.head;
  }

  toArray() {
    const result = [];
    let curr: ListNode<T> | null = this.head.next;
    while (curr) {
      result.push(curr.value);
      curr = curr.next;
    }
    return result;
  }
}
