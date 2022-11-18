const dices = document.querySelectorAll('.dice');

function setVisibleSide(element, side) {
  if (side == 1) {
    element.style.transform = `rotate3d(0, 0, 0, 0deg)`;
  } else if (side == 2) {
    element.style.transform = `rotate3d(0, 1, 0, -90deg)`;
  } else if (side == 3) {
    element.style.transform = `rotate3d(1, 0, 0, -90deg)`;
  } else if (side == 4) {
    element.style.transform = `rotate3d(1, 0, 0, 90deg)`;
  } else if (side == 5) {
    element.style.transform = `rotate3d(0, 1, 0, 90deg)`;
  } else if (side == 6) {
    element.style.transform = `rotate3d(0, 1, 0, 180deg)`;
  }
}

// Kasta flera tärningar med godtyckligt antal sidor (dock minst 3 och högst 20)

function isWithinDiceBoundary(size) {
  if (size >= 3 && size <= 20) {
    return true;
  } else {
    console.error("No way, nah nah");
    return false;
  }
}

// Kasta en tärning
function throwDie(size) {
  if (isWithinDiceBoundary(size)) { // guardian brackets
    let result = (Math.random() * size) + 1;
    result = Math.floor(result);

    return result;
  }
}

// Kasta flera tärningar
function throwDice(amount, size) {
  let results = [];

  for (let i = 0; i < amount; i++) {
    let result = throwDie(size);
    results.push(result);
  }

  return results;
}

let diceThrows = throwDice(4, 6);

for (let i = 0; i < diceThrows.length; i++) {
  setVisibleSide(dices[i], diceThrows[i]);
}