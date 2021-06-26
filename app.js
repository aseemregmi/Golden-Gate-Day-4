const nameInput = document.querySelector("#name");

const amountInput = document.querySelector("#amount");

const formElement = document.querySelector(".form");

const addButton = document.querySelector(".submit-btn");

const totalValueElement = document.querySelector("#total-value");

const expensesElement = document.querySelector(".expenses");

let totalExpenses = 0;

// Events
formElement.addEventListener("submit", func);

function func(e) {
  e.preventDefault();

  const nameValue = nameInput.value;
  const amountValue = parseInt(amountInput.value);

  totalExpenses += amountValue;

  totalValueElement.textContent = totalExpenses;

  // Add new row in expenses
  const el = document.createElement("p");
  el.textContent = nameValue + " - " + amountValue;

  expensesElement.appendChild(el);

  // Clear values
  nameInput.value = "";
  amountInput.value = "";
}
