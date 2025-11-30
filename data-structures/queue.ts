class ListNode<T> {
  next: ListNode<T> | null;
  constructor(public value: T) {
    this.value = value;
    this.next = null;
  }
}

export class Queue<T> {
  head: ListNode<T>;
  tail: ListNode<T>;
  constructor() {
    this.head = new ListNode(null as any);
    this.tail = this.head;
  }

  enqueue(value: T) {
    const newNode = new ListNode(value);
    this.tail.next = newNode;
    this.tail = newNode;
  }

  dequeue() {
    const node = this.head.next;
    if (!node) {
      return null;
    }
    const nextNode = node.next;
    this.head.next = nextNode;
    if (!this.head.next) {
      // Queue has become empty, set tail to the dummy node
      this.tail = this.head;
    }
    return node.value;
  }

  size() {
    let count = 0;
    // We're using a dummy node to init the queue, so start at its `next`
    let curr: ListNode<T> | null = this.head.next;
    while (curr) {
      count++;
      curr = curr.next;
    }
    return count;
  }

  clear() {
    this.head.next = null;
    this.tail = this.head;
  }
}
