function setup() {
  createCanvas(400, 400);
}
let Xjogador1 = 0;
let Xjogador2 = 0;
function draw() {
  ativaJogo();
  desenhaJogadores();
  desenhaLinhaDeChegada();
  
 
  
  
  if (Xjogador1 > 350) {
    fill("#00FFFF	");
    text("Campo venceu😜!!", 50, 200);
    noLoop();
}
   if (Xjogador2 > 350) {
    fill("#EB1101");
    text("Cidade venceu🙄!!", 50, 200);
    noLoop();
   }
}
  function keyReleased() {
  if (key === 'a') {
   Xjogador1 += random(20);
  }
     if (key === 's') {
   Xjogador2 += random(20);
  }
}

function ativaJogo(){if (focused==true){
  background("#994FF7");
  }
  else{
    background("#00BFFF	")
  }
 }

function desenhaJogadores(){ textSize(35);
  text("🐄", Xjogador1,100);
  text("🌆", Xjogador2,300);
 }
function desenhaLinhaDeChegada(){
  fill("#A8FF20");
  rect(350,0,10,400);
 fill('black');
 for (let yAtual=0; yAtual < 400; yAtual+= 20){
   rect(350, yAtual,10, 10);
 }
}
