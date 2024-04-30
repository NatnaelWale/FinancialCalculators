"use strict";

window.onload = init;

const onCalculateBtnClicked = document.getElementById("calculateBtn");

const onresetBtnClicked = document.getElementById("resetBtn");

function init() {
  onCalculateBtnClicked.onclick = calculateMorgage;
}

function calculateMorgage() {
  var loanValue = document.getElementById("loanAmount").value;

  var interestValue = document.getElementById("interestRate").value;

  var termValue = document.getElementById("loanTerm").value;

  if (isNaN(loanValue) || isNaN(interestValue) || isNaN(termValue)) {
    document.getElementById("errorMessage").innerHTML =
      " Please enter valid number only!";
    return;
  }

  var monthlyInterest = interestValue / (100 * 12);

  var monthlyTerm = termValue * 12;

  //  This is the site where I found the best forumula for compound interest monthly payment calculator: https://www.calculatorsoup.com/calculators/financial/mortgage-calculator.php

  var monthlyPayment =
    (loanValue * monthlyInterest * (1 + monthlyInterest) ** monthlyTerm) /
    ((1 + monthlyInterest) ** monthlyTerm - 1);

  var totalInterestPaid = monthlyPayment * monthlyTerm - loanValue;

  document.getElementById("monthlyPaymentAmount").value =
    monthlyPayment.toFixed(2) + "$/month.";

  document.getElementById("totalInterestPaid").value =
    totalInterestPaid.toFixed(2) + "$.";

  document.getElementById("errorMessage").innerHTML = "";

  onresetBtnClicked.onclick = resetValues;

  function resetValues() {
    document.getElementById("loanAmount").value = "";
    document.getElementById("interestRate").value = "";
    document.getElementById("loanTerm").value = "";
    document.getElementById("monthlyPaymentAmount").value = "";
    document.getElementById("totalInterestPaid").value = "";
    document.getElementById("errorMessage").value = "";
  }
}
