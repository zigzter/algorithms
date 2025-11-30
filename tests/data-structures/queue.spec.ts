import { describe, it, expect } from 'vitest';
import { Queue } from '../../data-structures/queue';

describe('Queue', () => {
  it('should enqueue', () => {
    const queue = new Queue();
    queue.enqueue(5);
    queue.enqueue(7);
    queue.enqueue(3);
    expect(queue.size()).toBe(3);
  });

  it('should dequeue', () => {
    const queue = new Queue();
    queue.enqueue(5);
    queue.enqueue(7);
    queue.enqueue(3);
    const val1 = queue.dequeue();
    expect(val1).toBe(5);
    expect(queue.size()).toBe(2);
    const val2 = queue.dequeue();
    expect(val2).toBe(7);
    expect(queue.size()).toBe(1);
    const val3 = queue.dequeue();
    expect(val3).toBe(3);
    expect(queue.size()).toBe(0);
  });

  it('should mix enqueue and dequeue', () => {
    const queue = new Queue();
    queue.enqueue(5);
    queue.dequeue();
    queue.enqueue(7);
    queue.enqueue(3);
    queue.dequeue();
    queue.enqueue(5);
    queue.enqueue(9);
    const val1 = queue.dequeue();
    expect(val1).toBe(3);
    queue.enqueue(2);
    const val2 = queue.dequeue();
    expect(val2).toBe(5);
    const val3 = queue.dequeue();
    expect(val3).toBe(9);
    expect(queue.size()).toBe(1);
  });

  it('should clear the queue', () => {
    const queue = new Queue();
    queue.enqueue(5);
    queue.enqueue(7);
    queue.clear();
    expect(queue.size()).toBe(0);
  });
});
