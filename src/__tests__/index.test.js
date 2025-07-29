import { describe, it, expect } from 'vitest';
import { add } from '../index.js';
import {i_am_covered} from '../partially_covered_file.js'

describe('Math Utility Functions', () => {
  describe('add', () => {
    it('should add two positive numbers correctly', () => {
      expect(add(2, 3)).toBe(5);
      expect(add(10, 20)).toBe(30);
    });
  });
}); 

describe('partialy covered', () => {
  it('should return some string', () => {
    expect(i_am_covered()).toBe('yeey!');
  });
});