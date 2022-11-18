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
