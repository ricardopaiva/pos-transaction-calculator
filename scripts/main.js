function calculateTransactions() {
    // Get input values
    const totalTransactions = parseFloat(document.getElementById('totalTransactions').value);
    const totalDays = parseFloat(document.getElementById('totalDays').value);
    const workingHours = parseFloat(document.getElementById('workingHours').value);
    const totalPos = parseFloat(document.getElementById('totalPos').value);
    
    // Validate inputs
    if (isNaN(totalDays) || isNaN(workingHours) || isNaN(totalPos) || isNaN(totalTransactions) ||
        totalDays <= 0 || workingHours <= 0 || totalPos <= 0 || totalTransactions <= 0) {
        document.getElementById('result').innerText = 'Please enter valid positive numbers for all fields.';
        return;
    }

    // Calculate results
    const totalTransactionsPerDay = calculateTransactionsPerDay(totalTransactions, totalDays).toFixed(2);
    const totalTransactionsPerMinute = calculateTransactionsPerMinute(totalTransactions, totalDays, workingHours).toFixed(2);
    const totalTransactionsPerSecond = calculateTransactionsPerSecond(totalTransactions, totalDays, workingHours).toFixed(2);
    const totalTransactionsPerDayPerPos = calculateTransactionsPerDayPerPos(totalTransactions, totalDays, totalPos).toFixed(2);
    const totalTransactionsPerMinutePerPos = calculateTransactionsPerMinutePerPos(totalTransactions, totalDays, workingHours, totalPos).toFixed(2);
    const totalTransactionsPerSecondPerPos = calculateTransactionsPerSecondPerPos(totalTransactions, totalDays, workingHours, totalPos).toFixed(2);

    // Display the result
    document.getElementById('totalTransactionsPerDay').innerText = `Total transactions per day: ${totalTransactionsPerDay}`;
    document.getElementById('totalTransactionsPerMinute').innerText = `Total transactions per minute: ${totalTransactionsPerMinute}`;
    document.getElementById('totalTransactionsPerSecond').innerText = `Total transactions per second: ${totalTransactionsPerSecond}`;

    document.getElementById('totalTransactionsPerDayPerPos').innerText = `Transactions per day per point of sale: ${totalTransactionsPerDayPerPos}`;
    document.getElementById('totalTransactionsPerMinutePerPos').innerText = `Transactions per minute per point of sale: ${totalTransactionsPerMinutePerPos}`;
    document.getElementById('totalTransactionsPerSecondPerPos').innerText = `Transactions per second per point of sale: ${totalTransactionsPerSecondPerPos}`;
}

// Expose the function for testing
if (typeof module !== 'undefined') {
    module.exports = { calculateTransactions, calculateTransactionsPerDay, calculateTransactionsPerMinute, calculateTransactionsPerSecond, calculateTransactionsPerDayPerPos, calculateTransactionsPerMinutePerPos, calculateTransactionsPerSecondPerPos };
}

function calculateTransactionsPerDay(totalTransactions, totalDays)
{
    return totalTransactions / totalDays;
}

function calculateTransactionsPerMinute(totalTransactions, totalDays, workingHours)
{
    const totalHours = totalDays * workingHours;
    const totalMinutes = totalHours * 60;
    const totalTransactionsPerDay = calculateTransactionsPerDay(totalTransactions, totalDays);
    return totalTransactionsPerDay / totalMinutes;
}

function calculateTransactionsPerSecond(totalTransactions, totalDays, workingHours)
{
    const totalTransactionsPerMinute = calculateTransactionsPerMinute(totalTransactions, totalDays, workingHours);
    return totalTransactionsPerMinute / 60;
}

function calculateTransactionsPerDayPerPos(totalTransactions, totalDays, totalPos) {
    const totalTransactionsPerDay = calculateTransactionsPerDay(totalTransactions, totalDays);
    return totalTransactionsPerDay / totalPos;
}

function calculateTransactionsPerMinutePerPos(totalTransactions, totalDays, workingHours, totalPos) {
    const totalTransactionsPerMinute = calculateTransactionsPerMinute(totalTransactions, totalDays, workingHours);
    return totalTransactionsPerMinute / totalPos;
}

function calculateTransactionsPerSecondPerPos(totalTransactions, totalDays, workingHours, totalPos) {
    const totalTransactionsPerSecond = calculateTransactionsPerSecond(totalTransactions, totalDays, workingHours);
    return totalTransactionsPerSecond / totalPos;
}
