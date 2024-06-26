//Audio

const diceAudio = document.querySelector("#dice-audio")

//Dice button

const diceButton = document.querySelector("#dice-btn")
diceButton.addEventListener("click", buttonTest)

const diceSize = document.querySelector("#dice-size")
const diceImage = document.querySelector("#dice-image")
const diceAnimation = document.querySelector(".dice-image")

const diceImageArray = ["images/d4.png", "images/d6.png", "images/d8.png",
  "images/d10.png", "images/d12.png", "images/d20.png", "images/100.png",
  "images/no-dice.png"
]

function buttonTest() {

  diceAudio.play()

  let dice = Number(diceSize.value)

  if (dice === 0) {
    diceImage.src = diceImageArray[7]
    diceImage.style.top = "50%"
    diceAnimation.style.animation = "noDice 500ms"
    setTimeout(removeAnimation, 500)
    diceButton.textContent = "Pick A Size"
    diceButton.style.fontSize = "50px"
  } if (dice === 4) {
    diceImage.src = diceImageArray[0]
    diceImage.style.top = "40%"
    diceAnimation.style.animation = "rollDice 500ms"
    setTimeout(removeAnimation, 500)
    diceButton.textContent = diceResult(dice)
    diceButton.style.fontSize = "90px"
  } else if (dice === 6) {
    diceImage.src = diceImageArray[1]
    diceImage.style.top = "50%"
    diceAnimation.style.animation = "rollDice 500ms"
    setTimeout(removeAnimation, 500)
    diceButton.textContent = diceResult(dice)
    diceButton.style.fontSize = "90px"
  } else if (dice === 8) {
    diceImage.src = diceImageArray[2]
    diceImage.style.top = "50%"
    diceAnimation.style.animation = "rollDice 500ms"
    setTimeout(removeAnimation, 500)
    diceButton.textContent = diceResult(dice)
    diceButton.style.fontSize = "90px"
  } else if (dice === 10) {
    diceImage.src = diceImageArray[3]
    diceImage.style.top = "50%"
    diceAnimation.style.animation = "rollDice 500ms"
    setTimeout(removeAnimation, 500)
    diceButton.textContent = diceResult(dice)
    diceButton.style.fontSize = "90px"
  } else if (dice === 12) {
    diceImage.src = diceImageArray[4]
    diceImage.style.top = "50%"
    diceAnimation.style.animation = "rollDice 500ms"
    setTimeout(removeAnimation, 500)
    diceButton.textContent = diceResult(dice)
    diceButton.style.fontSize = "90px"
  } else if (dice === 20) {
    diceImage.src = diceImageArray[5]
    diceImage.style.top = "50%"
    diceAnimation.style.animation = "rollDice 500ms"
    setTimeout(removeAnimation, 500)
    diceButton.textContent = diceResult(dice)
    diceButton.style.fontSize = "90px"
  } else if (dice === 100) {
    diceImage.src = diceImageArray[6]
    diceImage.style.top = "50%"
    diceAnimation.style.animation = "rollDice 500ms"
    setTimeout(removeAnimation, 500)
    diceButton.textContent = diceResult(dice)
    diceButton.style.fontSize = "90px"
  }

}

function removeAnimation() {
  diceAnimation.style.animation = "none"
}

function diceResult(input) {
  return Math.floor(Math.random() * input + 1)
}

//Score tracker

let score = 20
const scoreDisplay = document.querySelector("#score-display")

const scorePlusOne = document.querySelector("#score-plus-1")
scorePlusOne.addEventListener("click", plusOne)

const scoreMinusOne = document.querySelector("#score-minus-1")
scoreMinusOne.addEventListener("click", minusOne)

const scorePlusFive = document.querySelector("#score-plus-5")
scorePlusFive.addEventListener("click", plusFive)

const scoreMinusFive = document.querySelector("#score-minus-5")
scoreMinusFive.addEventListener("click", minusFive)

function plusOne() {
  score += 1
  scoreDisplay.textContent = score
}
function minusOne() {
  score -= 1
  scoreDisplay.textContent = score
}
function plusFive() {
  score += 5
  scoreDisplay.textContent = score
}
function minusFive() {
  score -= 5
  scoreDisplay.textContent = score
}

//Font size changing buttons

let textAreaSize = document.querySelector("#note")

const fontSmallButton = document.querySelector("#font-btn-s")
fontSmallButton.addEventListener("click", fontSmall)

const fontMediumButton = document.querySelector("#font-btn-m")
fontMediumButton.addEventListener("click", fontMedium)

const fontLargeButton = document.querySelector("#font-btn-l")
fontLargeButton.addEventListener("click", fontLarge)

function fontSmall() {
  textAreaSize.style.fontSize = "2vh"
}
function fontMedium() {
  textAreaSize.style.fontSize = "4vh"
}
function fontLarge() {
  textAreaSize.style.fontSize = "6vh"
}