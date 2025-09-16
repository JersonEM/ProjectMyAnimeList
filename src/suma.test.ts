import { describe, expect, it } from 'vitest';

function suma(a: number, b: number) {
  return a + b;
}

describe('suma()', () => {
  it('debe retornar la suma de dos números', () => {
    expect(suma(2, 3)).toBe(5);
  });
});
