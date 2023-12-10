let chamber = 1; // номер патрона в барабане
const totalChambers = 6; // всего патронов

function spinRevolver() {
  let bulletPosition = Math.floor(Math.random() * totalChambers) + 1; // случайная позиция пули

  if (chamber === bulletPosition) {
    document.getElementById("result").innerHTML = "Вы проиграли!";
  } else {
    document.getElementById("result").innerHTML = "Вы выжили!";
  }

  if (chamber === totalChambers) {
    chamber = 1; // если достигнут конец барабана, начать сначала
  } else {
    chamber++;
  }
}
