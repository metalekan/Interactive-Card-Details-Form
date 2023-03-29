let cardName = document.querySelector("#cardname");
let cardNumber = document.querySelector("#cardnumber");
let cardMonth = document.querySelector("#cardmonth");
let cardYear = document.querySelector("#cardyear");
let cardCvc = document.querySelector("#cardcvc");
let submit = document.querySelector("#submit")

let writeNumber = document.querySelector('#input-cardnumber')
let writeName = document.querySelector('#input-cardname')
let writeMonth = document.querySelector('#input-cardmonth')
let writeYear = document.querySelector('#input-cardyear')
let writeCvc = document.querySelector('#input-cardcvc')



submit.addEventListener("click", function () {

  console.log("empty");

  if (cardName.value === "") {
    errorFunc(cardName, 'Wrong format, names only')
  }

  if (cardNumber.value === "") {
    errorFunc(cardNumber, 'Wrong format, numbers only')
  } else if (cardNumber.value.length > 16) {
    errorFunc(cardNumber, "Must be 16 digits")

  }

  if (cardMonth.value === "") {
    errorFunc(cardMonth, "Can't be blank")
  } else if (cardMonth.value.length > 2) {
    errorFunc(cardMonth, "incorrect 2 digits only")
  }

  if (cardYear.value === "") {
    errorFunc(cardYear, " ")
  }

  if (cardCvc.value === "") {
    errorFunc(cardCvc, "Can't be blank")
  } else if (cardCvc.value.length > 3) {
    errorFunc(cardCvc, "Must not be more than 3 digits")
  } else {
    setTimeout(successFunc, 3000);
  }


});


function errorFunc(index, message) {
  let cardControl = index.parentElement;
  let span = cardControl.querySelector('span');
  span.innerText = message;
  index.classList.add('error')
  span.classList.add('error-text');
}


function successFunc() {
  writeNumber.innerText = cardNumber.value;
  writeName.innerText = cardName.value;
  writeMonth.innerText = cardMonth.value;
  writeYear.innerText = cardYear.value;
  writeCvc.innerText = cardCvc.value;

  let formSection =   document.querySelector('.input-field');
  formSection.style.display = "none";

  document.querySelector('.success').style.display = "flex";

}


