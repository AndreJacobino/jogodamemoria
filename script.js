let meuBotao = document.getElementById("meuBotao");
    meuBotao.addEventListener("click", MostrarAlerta);
function MostrarAlerta(){
  let alerta = document.getElementById("alertaid");
  alerta.classList.remove('hide');
}
let playAgain = document.getElementById("playagain");
playAgain.addEventListener("click", JogarDenovo)
function JogarDenovo(){
  let alerta = document.getElementById("alertaid");
  alerta.classList.add('hide');
}