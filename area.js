let baseInput = document.querySelector("#base-input");
let heightInput = document.querySelector("#height-input");
const calculateButton = document.querySelector("#calculate-button");
const output = document.querySelector("#output");

function calculateArea(){
  baseInput = Number(document.querySelector("#base-input").value);
  heightInput = Number(document.querySelector("#height-input").value);
  
  if (baseInput <=0 || heightInput <= 0){
    output.innerText = "Error! Base/height of a Triangle should be a positive number";
  }else{
    output.innerText = "The area of triangle is " + 0.5 * baseInput * heightInput + " sq.cm";
  }
}

calculateButton.addEventListener('click', calculateArea);