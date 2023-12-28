const beneficiaryAccountInput = document.getElementById("beneficiary-account"),
  dialog = document.getElementById("dialog"),
  loaderContainer = document.getElementById("payment-loader"),
  routingNumberInput = document.getElementById("routing-number"),
  beneficiaryBankInput = document.getElementById("beneficiary-bank"),
  beneficiary = document.getElementById("beneficiary-name"),
  transferBtn = document.getElementById("transfer-btn"),
  transactionPinInput = document.getElementById("transaction-pin");

// Event Listeners
beneficiaryBankInput.addEventListener("blur", validateBeneficiaryAccount);
transferBtn.addEventListener("click", handleTransfer);

// Functions
function validateBeneficiaryAccount() {
  const beneficiaryAccountNumber = beneficiaryAccountInput.value;

  if (beneficiaryAccountNumber.length !== 13) {
    alert("invalid account number entered");
  } else {
    setTimeout(() => {
      const routingNumber = routingNumberInput.value;
      const beneficiaryBank = beneficiaryBankInput.value.toLowerCase();
      if (routingNumber === "128402885" && beneficiaryBank == "wells fargo") {
        const accountName = "Mary Ospinar";
        beneficiary.value = accountName;
      } else {
        alert(
          "Account name could not be found. Please verify routing & account number and try again."
        );
      }
    }, 2000);
  }
}

function handleTransfer(event) {
  event.preventDefault();
  const transactionPin = transactionPinInput.value;
  transferBtn.disabled = true;
  console.log("hello");

  if (transactionPin === "1709") {
    showLoadingAnimation();
    setTimeout(() => {
      showAccountRestrictedDialog();
    }, 2500);
  } else {
    alert("Incorrect pin, please try again.");
  }
}

const loader = document.createElement("div");
function showLoadingAnimation() {
  loaderContainer.classList.add("payment-loader");
  loaderContainer.appendChild(loader);
  loader.classList.add("spinner");
}

function hideLoadingAnimation() {
  loaderContainer.classList.remove("payment-loader");
  loader.classList.remove("spinner");
}

function showAccountRestrictedDialog() {
  hideLoadingAnimation();
  dialog.style.display = "flex";
  setTimeout(() => {
    window.location.href = "/index.html";
  }, 4000);
}
//done
