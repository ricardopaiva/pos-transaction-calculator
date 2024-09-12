function calculateTransactions() {
    // Get input values
    const totalTransactions = parseFloat(document.getElementById('totalTransactions').value);
    const totalMonths = parseFloat(document.getElementById('totalMonths').value);
    const workingHours = parseFloat(document.getElementById('workingHours').value);
    const totalPos = parseFloat(document.getElementById('totalPos').value);
    
    // Validate inputs
    if (isNaN(totalMonths) || isNaN(workingHours) || isNaN(totalPos) || isNaN(totalTransactions) ||
        totalMonths <= 0 || workingHours <= 0 || totalPos <= 0 || totalTransactions <= 0) {
        document.getElementById('result').innerText = 'Please enter valid positive numbers for all fields.';
        return;
    }

    const result = calculateTransactionsLogic(totalTransactions, totalMonths, workingHours, totalPos);

    const totalTransactionsPerDay = result[0].toFixed(2);
    const totalTransactionsPerMinute = result[1].toFixed(2);
    const totalTransactionsPerSecond = result[2].toFixed(2);

    // Display the result
    document.getElementById('totalTransactionsPerDay').innerText = `Transactions per day per point of sale: ${totalTransactionsPerDay}`;
    document.getElementById('totalTransactionsPerMinute').innerText = `Transactions per minute per point of sale: ${totalTransactionsPerMinute}`;
    document.getElementById('totalTransactionsPerSecond').innerText = `Transactions per second per point of sale: ${totalTransactionsPerSecond}`;
}

function calculateTransactionsLogic(totalTransactions, totalMonths, workingHours, totalPos) {

    // Calculate total seconds
    const daysInMonth = 30; // Assuming average 30 days in a month
    const totalDays = totalMonths * daysInMonth;
    const totalHours = totalDays * workingHours;
    const totalMinutes = totalHours * 60;
    // const totalSeconds = totalHours * 3600;

    // Calculate transactions per second per point of sale
    const totalTransactionsPerDayPerPos = (totalTransactions / totalDays) / totalPos;
    const totalTransactionsPerMinutePerPos = (totalTransactionsPerDayPerPos / totalMinutes);
    const totalTransactionsPerSecondPerPos = (totalTransactionsPerMinutePerPos / 60);

    const result = [totalTransactionsPerDayPerPos, totalTransactionsPerMinutePerPos, totalTransactionsPerSecondPerPos];
    return result;
}

// Expose the function for testing
if (typeof module !== 'undefined') {
    module.exports = { calculateTransactions, calculateTransactionsLogic };
}