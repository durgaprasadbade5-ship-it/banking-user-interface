let balance = 0;

function updateDisplay() {
  document.getElementById("balance").innerText = `$${balance}`;
}

function deposit() {
  let amount = prompt("Enter deposit amount:");
  amount = parseFloat(amount);
  
  if (isNaN(amount) || amount <= 0) {
    alert("Enter a valid amount.");
    return;
  }

  balance += amount;
  updateDisplay();
}

function withdraw() {
  let amount = prompt("Enter withdrawal amount:");
  amount = parseFloat(amount);

  if (isNaN(amount) || amount <= 0) {
    alert("Enter a valid amount.");
    return;
  }

  if (amount > balance) {
    alert("Insufficient balance!");
    return;
  }

  balance -= amount;
  updateDisplay();
}

updateDisplay();
