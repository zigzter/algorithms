import { describe, it, expect } from 'vitest';
import { LinkedList } from '../../data-structures/linked-list';

describe('LinkedList', () => {
  it('should insert and retrieve values', () => {
    const list = new LinkedList();
    list.append(5);
    list.append(7);
    list.append(3);

    expect(list.size()).toBe(3);
    expect(list.get(0)).toBe(5);
    expect(list.get(1)).toBe(7);
    expect(list.get(2)).toBe(3);
  })
})
