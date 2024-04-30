"use strict";

window.onload = init;

const onCalculateBtnClicked = document.getElementById("calculateBtn");

const onresetBtnClicked = document.getElementById("resetBtn");

function init() {
  onCalculateBtnClicked.onclick = calculatePresent;
}

function calculatePresent() {
  var payoutValue = document.getElementById("monthlyPayout").value;

  var interestValue = document.getElementById("interestRate").value;

  var termValue = document.getElementById("interestTerm").value;

  if (isNaN(payoutValue) || isNaN(interestValue) || isNaN(termValue)) {
    document.getElementById("errorMessage").innerHTML =
      " Please enter valid number only!";
    return;
  }

  var monthlyInterest = interestValue / (100 * 12);

  var monthlyTerm = termValue * 12;

  //  This is the site where I found the best forumula for present annuity value calculator: https://www.calculatorsoup.com/calculators/financial/present-value-annuity-calculator.php

  var presentAmount = ((payoutValue/monthlyInterest)*(1-(1/((1+monthlyInterest)**monthlyTerm)))) ;


  document.getElementById("presentValue").value =
  presentAmount.toFixed(2) + "$.";

  document.getElementById("errorMessage").innerHTML = "";

  onresetBtnClicked.onclick = resetValues;

  function resetValues() {
    document.getElementById("monthlyPayout").value = "";
    document.getElementById("interestRate").value = "";
    document.getElementById("interestTerm").value = "";
    document.getElementById("presentValue").value = "";
    document.getElementById("errorMessage").value = "";
  }
}
