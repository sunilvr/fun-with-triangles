let baseInput = document.querySelector("#base-input");
let heightInput = document.querySelector("#height-input");
const calculateButton = document.querySelector("#calculate-button");
const output = document.querySelector("#output");

function sumOfSquares(base, height){
  return (base*base) + (height*height);
}

function calculateHypotenuse(){
  if (!baseInput.value || !heightInput.value){
    alert('Please fill both the input fields');
  }
  else if (baseInput.value <= 0 || heightInput.value <= 0){
    output.innerText = "Error! Base/height of a Triangle should always be > 0";
  }else{
    let sumSquares = sumOfSquares(Number(baseInput.value), Number(heightInput.value));
    output.innerText = "The length of hypotenuse is " + Math.sqrt(sumSquares).toFixed(1);
  }
}

calculateButton.addEventListener('click', calculateHypotenuse);