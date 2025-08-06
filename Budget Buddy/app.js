let transactions = loadTransactions();
const textInput = document.getElementById("text");
const amountInput = document.getElementById("amount");
const transactionList = document.getElementById("transactionList");
const balance = document.getElementById("balance");
const income = document.getElementById("income");
const expense = document.getElementById("expense");

function renderTransactions() {
  transactionList.innerHTML = "";
  transactions.forEach((t, index) => {
    const li = document.createElement("li");
    li.classList.add(t.amount > 0 ? "income" : "expense");
    li.innerHTML = `${t.text} <span>₹${t.amount}</span>
      <button onclick="deleteTransaction(${index})">❌</button>`;
    transactionList.appendChild(li);
  });

  const totals = calculateTotals(transactions);
  balance.innerText = totals.total;
  income.innerText = totals.income;
  expense.innerText = totals.expense;
}

function addTransaction() {
  const text = textInput.value.trim();
  const amount = +amountInput.value;

  if (text === "" || isNaN(amount)) {
    alert("Please add description and amount");
    return;
  }

  transactions.push({ text, amount });
  saveTransactions(transactions);
  renderTransactions();
  textInput.value = "";
  amountInput.value = "";
}

function deleteTransaction(index) {
  transactions.splice(index, 1);
  saveTransactions(transactions);
  renderTransactions();
}

document.getElementById("addBtn").addEventListener("click", addTransaction);

renderTransactions();
