let baseInput = document.querySelector("#base-input");
let heightInput = document.querySelector("#height-input");
const calculateButton = document.querySelector("#calculate-button");
const output = document.querySelector("#output");

function areaOfTriangle(base, height){
  return 0.5 * base * height;
}

function calculateArea(){
  if (!baseInput.value || !heightInput.value){
    alert('Please fill both the input fields');
  }
  else if (baseInput.value <= 0 || heightInput.value <= 0){
    output.innerText = "Error! Base/height of a Triangle should always be > 0";
  }else{
    let area = areaOfTriangle(Number(baseInput.value), Number(heightInput.value))
    output.innerText = "The area of triangle is " + area.toFixed(1) + " sq.cm";
  }
}

calculateButton.addEventListener('click', calculateArea);