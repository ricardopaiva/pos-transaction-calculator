// tests/main.test.js
const { calculateTransactions, calculateTransactionsLogic } = require('../scripts/main');

test('calculates transactions correctly for more than one month, 8 working hours and more than 1 pos', () => {
    const totalTransactions = 8640000;
    const totalMonths = 2;
    const workingHours = 8;
    const totalPos = 2;

    const result = calculateTransactionsLogic(totalTransactions, totalMonths, workingHours, totalPos);
    
    // The expected value for the transactions per second per point of sale
    const expectedTotalTransactionsPerDayPerPos = 72000;
    const expectedTransactionsPerMinutePerPos = 2.5;
    const expectedTransactionsPerSecondPerPos = parseFloat(0.041666667.toFixed(2));

    // Check if the result is as expected
    expect(result[0]).toBe(expectedTotalTransactionsPerDayPerPos);
    expect(result[1]).toBe(expectedTransactionsPerMinutePerPos);
    expect(result[2]).toBeCloseTo(expectedTransactionsPerSecondPerPos, 2);
});

test('calculates transactions correctly - scenario #2', () => {
    const totalTransactions = 100000000;
    const totalMonths = 2;
    const workingHours = 8;
    const totalPos = 60;

    const result = calculateTransactionsLogic(totalTransactions, totalMonths, workingHours, totalPos);
    
    // The expected value for the transactions per second per point of sale
    const expectedTotalTransactionsPerDayPerPos = parseFloat(27777.77778.toFixed(2));
    const expectedTransactionsPerMinutePerPos = parseFloat(0.964506173.toFixed(2));
    const expectedTransactionsPerSecondPerPos = parseFloat(0.016075103.toFixed(2));

    // Check if the result is as expected
    expect(result[0]).toBeCloseTo(expectedTotalTransactionsPerDayPerPos, 2);
    expect(result[1]).toBeCloseTo(expectedTransactionsPerMinutePerPos, 2);
    expect(result[2]).toBeCloseTo(expectedTransactionsPerSecondPerPos, 2);
});
