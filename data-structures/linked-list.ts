export class ListNode<T> {
  constructor(public value: T, public next: ListNode<T> | null) {
    this.value = value;
    this.next = next;
  }
}

export class LinkedList<T> {
  head: ListNode<T>;
  tail: ListNode<T>;
  constructor() {
    this.head = new ListNode(null as any, null);
    this.tail = this.head;
  }

  append(value: T) {
    const newNode = new ListNode(value, null);
    this.tail.next = newNode;
    this.tail = newNode;
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
}
