import { describe, it, expect } from 'vitest';
import { LinkedList } from '../../data-structures/linked-list';

describe('LinkedList', () => {
  it('should append and retrieve values', () => {
    const list = new LinkedList();
    list.append(5);
    list.append(7);
    list.append(3);
    expect(list.size()).toBe(3);
    expect(list.get(0)).toBe(5);
    expect(list.get(1)).toBe(7);
    expect(list.get(2)).toBe(3);
  });

  it('should prepend and retrieve values', () => {
    const list = new LinkedList();
    list.prepend(5);
    list.prepend(7);
    list.prepend(3);
    expect(list.size()).toBe(3);
    expect(list.get(0)).toBe(3);
    expect(list.get(1)).toBe(7);
    expect(list.get(2)).toBe(5);
  });

  it('should append, prepend and retrieve values', () => {
    const list = new LinkedList();
    list.append(5);
    list.prepend(5);
    list.append(9);
    list.prepend(7);
    list.prepend(3);
    list.append(2);
    expect(list.size()).toBe(6);
    expect(list.get(0)).toBe(3);
    expect(list.get(1)).toBe(7);
    expect(list.get(2)).toBe(5);
    expect(list.get(3)).toBe(5);
    expect(list.get(4)).toBe(9);
    expect(list.get(5)).toBe(2);
  });

  it('should remove values', () => {
    const list = new LinkedList();
    list.append(5);
    list.append(7);
    list.append(3);
    list.remove(1);
    expect(list.size()).toBe(2);
    expect(list.get(0)).toBe(5);
    expect(list.get(1)).toBe(3);
  });

  it('should clear the list', () => {
    const list = new LinkedList();
    list.append(5);
    list.append(7);
    list.clear();
    expect(list.size()).toBe(0);
  });

  it('should generate an array of values', () => {
    const list = new LinkedList();
    list.append(5);
    list.append(7);
    expect(list.toArray()).toStrictEqual([5, 7]);
  });
});
