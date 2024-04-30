"use strict";

window.onload = init;

const onCalculateBtnClicked = document.getElementById("calculateBtn");

const onresetBtnClicked = document.getElementById("resetBtn");

function init() {
  onCalculateBtnClicked.onclick = calculateFuture;
}

function calculateFuture() {
  var depositValue = document.getElementById("depositAmount").value;

  var interestValue = document.getElementById("interestRate").value;

  var termValue = document.getElementById("interestTerm").value;

  if (isNaN(depositValue) || isNaN(interestValue) || isNaN(termValue)) {
    document.getElementById("errorMessage").innerHTML =
      " Please enter valid number only!";
    return;
  }

  var monthlyInterest = interestValue / (100 * 12);

  var monthlyTerm = termValue * 12;

  //  This is the site where I found the best forumula for future value calculator: https://www.calculatorsoup.com/calculators/financial/future-value-formula.php

  var futureAmount = depositValue * (1 + monthlyInterest) ** monthlyTerm;

  var totalInterestEarned = futureAmount - depositValue;

  document.getElementById("futureAmount").value =
    futureAmount.toFixed(2) + "$.";

  document.getElementById("totalInterest").value =
    totalInterestEarned.toFixed(2) + "$.";

  document.getElementById("errorMessage").innerHTML = "";

  onresetBtnClicked.onclick = resetValues;

  function resetValues() {
    document.getElementById("depositAmount").value = "";
    document.getElementById("interestRate").value = "";
    document.getElementById("interestTerm").value = "";
    document.getElementById("futureAmount").value = "";
    document.getElementById("totalInterest").value = "";
    document.getElementById("errorMessage").value = "";
  }
}
