let baseInput = document.querySelector("#base-input");
let heightInput = document.querySelector("#height-input");
const calculateButton = document.querySelector("#calculate-button");
const output = document.querySelector("#output");

function sumOfSquares(base, height){
  return (base*base) + (height*height);
}

function calculateHypotenuse(){
  baseInput = Number(document.querySelector("#base-input").value);
  heightInput = Number(document.querySelector("#height-input").value);
  
  if (baseInput <=0 || heightInput <= 0){
    output.innerText = "Error! Base/height of a Triangle should be a positive number";
  }else{
    let sumSquares = sumOfSquares(baseInput, heightInput);
    output.innerText = "The length of hypotenuse is " + Math.sqrt(sumSquares);
  }
}

calculateButton.addEventListener('click', calculateHypotenuse);