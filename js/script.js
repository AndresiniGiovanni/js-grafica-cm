// L'utente clicca su un bottone che genererà una griglia di gioco quadrata.
// Ogni cella ha un numero progressivo, da 1 a 100.
// Ci saranno quindi 10 caselle per ognuna delle 10 righe.
// Quando l'utente clicca su ogni cella, la cella cliccata si colora di azzurro ed emetto un messaggio in console con il numero della cella cliccata.

// Bonus
// Aggiungere una select accanto al bottone di generazione, che fornisca una scelta tra tre diversi livelli di difficoltà:
// - con difficoltà 1 => 100 caselle, con un numero compreso tra 1 e 100, divise in 10 caselle per 10 righe;
// - con difficoltà 2 => 81 caselle, con un numero compreso tra 1 e 81, divise in 9 caselle per 9 righe;
// - con difficoltà 3 => 49 caselle, con un numero compreso tra 1 e 49, divise in 7 caselle per 7 righe;

// <div class="grid">
//     <div class="square"
//         <span>1</span>
//     </div>
// </div>

// width: calc(100% / 10);
//     height: calc(100% / 10);

const playbutton = document.getElementById("play");

function play() {
  console.log("Inizio...");

  const NUM_BOMB = 16;
  const bombsPosition = [];

  let numCell;
  const fieldgame = document.getElementById("field-game");
  fieldgame.innerHTML = "";
  const levelHtml = document.getElementById("livello");
  const level = levelHtml.value;
  switch (level) {
    case "1":
    default:
      numCell = 100;
      break;

    case "2":
      numCell = 81;
      break;

    case "3":
      numCell = 49;
      break;
  }
  console.log(numCell);

  while (bombsPosition.length < NUM_BOMB) {
    const bomb = randomNumber(1, numCell);
    if (!bombsPosition.includes(bomb)) {
      bombsPosition.push(bomb);
    }
  }
  console.log(bombsPosition);

  //celle
  function drawCell(num) {
    const cellPerSide = Math.sqrt(numCell);
    const cell = document.createElement("div");
    cell.className = "square";
    cell.style.width = `calc(100% / ${cellPerSide})`;
    cell.style.height = `calc(100% / ${cellPerSide})`;
    cell.innerHTML = `
             <span>${num}</span>
        `;
    cell.addEventListener("click", function () {
      this.classList.add("mycolor");
    });
    return cell;
  }

  // CAMPO DI GIOCO
  function drawGrid() {
    const grid = document.createElement("div");
    grid.className = "grid";
    for (let i = 1; i <= numCell; i++) {
      const cell = drawCell(i);
      grid.appendChild(cell);
    }
    fieldgame.appendChild(grid);
  }
  drawGrid();
}

playbutton.addEventListener("click", play);
