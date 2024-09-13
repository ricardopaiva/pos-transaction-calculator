// tests/main.test.js
// const { calculateTransactionsPerDay, calculateTransactionsPerMinute, calculateTransactionsPerSecond, calculateTransactionsPerDayPerPos, calculateTransactionsPerMinutePerPos, calculateTransactionsPerSecondPerPos } = require('../scripts/main');
const calculator = require('../scripts/main');

test('calculates transactions correctly for more than one month, 8 working hours and more than 1 pos', () => {
    const totalTransactions = 8640000;
    const totalDays = 60;
    const workingHours = 8;
    const totalPos = 2;

    // The expected value for the transactions per second per point of sale
    const expectedTotalTransactionsPerDay = 144000;
    const expectedTransactionsPerMinute = 5;
    const expectedTransactionsPerSecond = parseFloat(0.0833332.toFixed(6));
    const expectedTotalTransactionsPerDayPerPos = 72000;
    const expectedTransactionsPerMinutePerPos = 2.5;
    const expectedTransactionsPerSecondPerPos = parseFloat(0.041666667.toFixed(2));

    const totalTransactionsPerDay = calculator.calculateTransactionsPerDay(totalTransactions, totalDays, totalPos);
    const totalTransactionsPerMinute = calculator.calculateTransactionsPerMinute(totalTransactions, totalDays, workingHours, totalPos);
    const totalTransactionsPerSecond = calculator.calculateTransactionsPerSecond(totalTransactions, totalDays, workingHours, totalPos);
    const totalTransactionsPerDayPerPos = calculator.calculateTransactionsPerDayPerPos(totalTransactions, totalDays, totalPos);
    const totalTransactionsPerMinutePerPos = calculator.calculateTransactionsPerMinutePerPos(totalTransactions, totalDays, workingHours, totalPos);
    const totalTransactionsPerSecondPerPos = calculator.calculateTransactionsPerSecondPerPos(totalTransactions, totalDays, workingHours, totalPos);

    // Check if the result is as expected
    expect(totalTransactionsPerDay).toBe(expectedTotalTransactionsPerDay);
    expect(totalTransactionsPerMinute).toBe(expectedTransactionsPerMinute);
    expect(totalTransactionsPerSecond).toBeCloseTo(expectedTransactionsPerSecond, 2);
    expect(totalTransactionsPerDayPerPos).toBe(expectedTotalTransactionsPerDayPerPos);
    expect(totalTransactionsPerMinutePerPos).toBe(expectedTransactionsPerMinutePerPos);
    expect(totalTransactionsPerSecondPerPos).toBeCloseTo(expectedTransactionsPerSecondPerPos, 2);
});

test('calculates transactions correctly - scenario #2', () => {
    const totalTransactions = 100000000;
    const totalDays = 60;
    const workingHours = 8;
    const totalPos = 60;

    // The expected value for the transactions per second per point of sale
    const expectedTotalTransactionsPerDay = parseFloat(1666666.6668);
    const expectedTransactionsPerMinute = parseFloat(57.87037038);
    const expectedTransactionsPerSecond = parseFloat(0.96450618.toFixed(2));
    const expectedTotalTransactionsPerDayPerPos = parseFloat(27777.77778);
    const expectedTransactionsPerMinutePerPos = parseFloat(0.964506173.toFixed(2));
    const expectedTransactionsPerSecondPerPos = parseFloat(0.016075103.toFixed(2));

    const totalTransactionsPerDay = calculator.calculateTransactionsPerDay(totalTransactions, totalDays);
    const totalTransactionsPerMinute = calculator.calculateTransactionsPerMinute(totalTransactions, totalDays, workingHours);
    const totalTransactionsPerSecond = calculator.calculateTransactionsPerSecond(totalTransactions, totalDays, workingHours);
    const totalTransactionsPerDayPerPos = calculator.calculateTransactionsPerDayPerPos(totalTransactions, totalDays, totalPos);
    const totalTransactionsPerMinutePerPos = calculator.calculateTransactionsPerMinutePerPos(totalTransactions, totalDays, workingHours, totalPos);
    const totalTransactionsPerSecondPerPos = calculator.calculateTransactionsPerSecondPerPos(totalTransactions, totalDays, workingHours, totalPos);

    // Check if the result is as expected
    expect(totalTransactionsPerDay).toBeCloseTo(expectedTotalTransactionsPerDay, 2);
    expect(totalTransactionsPerMinute).toBeCloseTo(expectedTransactionsPerMinute, 2);
    expect(totalTransactionsPerSecond).toBeCloseTo(expectedTransactionsPerSecond, 2);
    expect(totalTransactionsPerDayPerPos).toBeCloseTo(expectedTotalTransactionsPerDayPerPos, 2);
    expect(totalTransactionsPerMinutePerPos).toBeCloseTo(expectedTransactionsPerMinutePerPos, 2);
    expect(totalTransactionsPerSecondPerPos).toBeCloseTo(expectedTransactionsPerSecondPerPos, 2);
});
