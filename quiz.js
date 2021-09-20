const formElement = document.querySelector('.quiz-form');
const submitButton = document.querySelector('#submit-button');
const output = document.querySelector('#output');

const correctAnswers = ['90°','right angled', 'one right angle','12, 16, 20', 'Equilateral triangle','100°','30°','a + b + c','no','45°']

function checkAnswers(){
  let index = 0;
  let score = 0;
  const formData = new FormData(formElement);
  for (var entry of formData.values()){
    if (entry === correctAnswers[index]){
      score += 1;
    }
    index += 1;
  }
  output.innerText = "The score is " + score;
}

submitButton.addEventListener('click', checkAnswers);