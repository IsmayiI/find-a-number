'use strict';

// ===========================Variable-CONST

const btnCheck = document.querySelector('.check')
const btnAgain = document.querySelector('.again')
const input = document.querySelector('.number-input')
const guessMessage = document.querySelector('.guess-message')
const question = document.querySelector('.question')
const score = document.querySelector('.score')
const highScore = document.querySelector('.highscore')
const body = document.querySelector('body')

// ===========================Variable-LET

let secretNum = Math.trunc(Math.random() * 20) + 1
let scoreNum = 20
let highScoreNum = 0

// ===========================Function

const addTextContent = (elem, str) => elem.textContent = str

// ===========================CODE

addTextContent(score, scoreNum)

// ===========================Event

btnCheck.addEventListener('click', () => {
   const inputNum = +input.value

   if (!inputNum) {
      addTextContent(guessMessage, 'Введите число!')
   }
   else if (inputNum === secretNum) {
      addTextContent(guessMessage, 'Правильно!')
      body.style.backgroundColor = 'rgb(9, 250, 21)'
      question.style.width = '50rem'
      addTextContent(question, secretNum)
      highScoreNum = scoreNum > highScoreNum ? scoreNum : highScoreNum
      addTextContent(highScore, highScoreNum)

   }
   else if (inputNum !== secretNum && scoreNum > 1) {
      addTextContent(guessMessage, inputNum > secretNum ? 'Много!' : 'Мало!')
      scoreNum--
      addTextContent(score, scoreNum)

   }
   else if (scoreNum === 1) {
      addTextContent(guessMessage, 'Вы проиграли!')
      scoreNum--
      addTextContent(score, scoreNum)

   }
})

btnAgain.addEventListener('click', () => {
   input.value = ''
   addTextContent(guessMessage, 'Начни угадывать')
   body.style.backgroundColor = '#000'
   question.style.width = '25rem'
   addTextContent(question, '???')
   scoreNum = 20
   addTextContent(score, scoreNum)
   secretNum = Math.trunc(Math.random() * 20) + 1
})



