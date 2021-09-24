const inputAngles = document.querySelectorAll(".angles-input");
const submitButton = document.querySelector("#calculate-button");
const outputDiv = document.querySelector("#output");

function sumOfAngles(angle1, angle2, angle3){
  return Number(angle1)+Number(angle2)+Number(angle3);
}

function checkIfTriangle(){
  //input angles cannot be empty
  if(!inputAngles[0].value || !inputAngles[1].value || !inputAngles[2].value){
      alert('Please fill out all the input fields');
  }else if(inputAngles[0].value <= 0 || inputAngles[1].value <= 0 || inputAngles[2].value <= 0){
      message = 'Come On Mate! There cannot be a triangle with Zero as an angle';
      outputDiv.innerText = message;
  }
  else{
      let sumAngles = sumOfAngles(inputAngles[0].value,inputAngles[1].value,inputAngles[2].value);
      let message='';
      if (sumAngles === 180){
      message = 'Yes! The input angles do form a triangle.';
      }
      else{
      message = 'No! The input angles do not form a triangle';
      }
    outputDiv.innerText = message;
  }
}


submitButton.addEventListener('click', checkIfTriangle)