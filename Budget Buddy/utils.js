// Get total from transaction list
function calculateTotals(transactions) {
  const amounts = transactions.map(t => t.amount);
  const total = amounts.reduce((acc, val) => acc + val, 0).toFixed(2);
  const income = amounts.filter(a => a > 0).reduce((acc, val) => acc + val, 0).toFixed(2);
  const expense = (amounts.filter(a => a < 0).reduce((acc, val) => acc + val, 0) * -1).toFixed(2);
  return { total, income, expense };
}

// Save to localStorage
function saveTransactions(transactions) {
  localStorage.setItem("transactions", JSON.stringify(transactions));
}

// Load from localStorage
function loadTransactions() {
  const data = localStorage.getItem("transactions");
  return data ? JSON.parse(data) : [];
}
