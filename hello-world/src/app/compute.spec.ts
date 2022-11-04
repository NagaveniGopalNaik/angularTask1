import { Compute } from './compute';

describe('Compute', () => {
  it('should return 0 if input is negative', () => {
    const compute = new Compute();
    const result = compute.computeNum(-1);
    expect(result).toBe(0);
  });
});
