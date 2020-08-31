import { quarters, dimes, pennies, coinCounter } from '../src/main.js';

describe('Money operations', () => {
  test ('should return number of quarters in amount of money', () => {
    const money = 1.77;
    expect(quarters(money)).toEqual(7);
  });

  test ('should return number of dimes in amount of money', () => {
    const money = 0.20;
    expect(dimes(money)).toEqual(2);
  });

  test ('should return number of pennies in amount of money', () => {
    const money = 0.04;
    expect(pennies(money)).toEqual(4);
  });

  test ('should return array of changes for amount of money', () => {
    const money = 1.77;
    expect(coinCounter(money)).toEqual([7, 0, 0, 2]);
  });
});