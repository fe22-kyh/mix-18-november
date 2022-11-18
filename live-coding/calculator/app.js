let btnContainer = document.querySelector(".btn-container");
let btnToolbar = document.querySelector(".btn-toolbar");
let display = document.querySelector(".display");

let symbols = [
  1, 2, 3, "+",
  4, 5, 6, "-",
  7, 8, 9, "*",
  ".", 0, "=", "/"
];

let toolbar = [
  "(", ")", "Undo", "Clear"
];

function handleSymbolClick(symbol) {
  let result = display.innerText; // Hämtar resultatet innan ny symbol

  if (symbol == "=") { // Ifall den nya symbolen är "=", räkna ut resultat
    result = result + symbol + eval(display.innerText);
    console.log(result);
  } else {
    result = result + symbol; //Lägg endast på den nya symbolen
  }

  display.innerText = result; // Uppdatera display med resultat
}

function handleToolbarClick(tool) {
  // !Skapa logiken för att ta bort allt från displayen (clear) och ta bort sista tecknet (undo)
  console.log(tool);

  if (tool == "Clear") {
    display.innerText = "";
  } else if (tool == "Undo") {
    let displayText = display.innerText;

    if (displayText.includes("=")) {
      let equalSignIndex = displayText.indexOf("=");
      displayText = displayText.slice(0, equalSignIndex);
    } else {
      displayText = displayText.slice(0, -1); // ta bort sista tecknet
    }

    display.innerText = displayText;
  } else {
    display.innerText = display.innerText + tool;
  }
}

function createSymbolButton(symbol) {
  let button = document.createElement("button");
  button.innerText = symbol;
  button.className = "symbol-btn";

  if (isNaN(symbol) && symbol != ".") {
    button.classList.add("operation-btn");
  }

  // Lagt till en lyssnare på varje symbol som skapades
  button.addEventListener("click", event => {
    //Skickar vidare klick händelsen till en symbolklick hanterare
    handleSymbolClick(symbol);
  });

  return button;
}

function createToolbarButtons(tool) {
  let button = document.createElement("button");
  button.innerText = tool;
  button.className = "tool-btn";

  button.addEventListener("click", event => {
    handleToolbarClick(tool);
  });

  // !Lägg till en click lyssnare som skickar "tool" till funktionen handleToolbarClick
  return button;
}

function addButtonSymbols(container) {
  for (let symbol of symbols) {
    let symbolButton = createSymbolButton(symbol)
    container.append(symbolButton);
  }
}

function addButtonTools(container) {
  for (let tool of toolbar) {
    let toolButton = createToolbarButtons(tool);
    container.append(toolButton);
  }
}

// Skapa allt som har med miniräknaren att göra
function initializeCalculator() {
  addButtonSymbols(btnContainer);
  addButtonTools(btnToolbar);
}

initializeCalculator();

