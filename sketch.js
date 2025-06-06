function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
}
let posX, posY;
let currentScene = 'campo'; // Cena inicial
let itemX, itemY, itemPicked = false;
let score = 0;
let itemColor;

function setup() {
  createCanvas(800, 600);
  posX = width / 2;
  posY = height - 50;

  // Posicionar o item inicialmente no campo
  itemX = random(100, 700);
  itemY = random(100, 500);
  itemColor = color(random(255), random(255), random(255)); // Cor aleatória para o item
}

function draw() {
  background(220);

  // Mudar a cena dependendo do valor de currentScene
  if (currentScene === 'campo') {
    drawCampo();
  } else if (currentScene === 'cidade') {
    drawCidade();
  }

  // Desenhar o jogador como um quadrado
  fill(255, 0, 0); // Cor do jogador
  rect(posX, posY, 50, 50);

  // Se o item não foi pego, desenhe o item
  if (!itemPicked) {
    fill(itemColor);
    ellipse(itemX, itemY, 40, 40); // Item é um círculo
  }

  // Desenhar a pontuação
  fill(0);
  textSize(24);
  text(`Pontuação: ${score}`, 20, 30);

  // Movimento do jogador
  if (keyIsDown(LEFT_ARROW)) {
    posX -= 5;
  }
  if (keyIsDown(RIGHT_ARROW)) {
    posX += 5;
  }
  if (keyIsDown(UP_ARROW)) {
    posY -= 5;
  }
  if (keyIsDown(DOWN_ARROW)) {
    posY += 5;
  }

  // Verificar se o jogador pegou o item
  if (!itemPicked && dist(posX + 25, posY + 25, itemX, itemY) < 40) {
    itemPicked = true;
  }

  // Verificar se o jogador chegou ao destino (na cidade) e entregar o item
  if (itemPicked && currentScene === 'cidade' && dist(posX + 25, posY + 25, width - 50, height - 50) < 50) {
    score += 10; // Aumenta a pontuação quando o item é entregue na cidade
    itemPicked = false; // Item foi entregue
    itemX = random(100, 700); // Novo item aparece no campo
    itemY = random(100, 500);
    itemColor = color(random(255), random(255), random(255)); // Nova cor para o próximo item
  }

  // Trocar de cena ao pressionar a tecla 'C'
  if (keyIsDown(67)) { // 'C' para alternar entre campo e cidade
    if (currentScene === 'campo') {
      currentScene = 'cidade';
    } else {
      currentScene = 'campo';
    }
    posX = width / 2; // Reinicia a posição do jogador
    posY = height - 50;
  }

  // Limitar a movimentação do jogador para dentro da tela
  posX = constrain(posX, 0, width - 50);
  posY = constrain(posY, 0, height - 50);
}

// Função para desenhar o campo
function drawCampo() {
  fill(34, 139, 34); // Cor verde para o campo
  rect(0, 0, width, height); // Campo verde

  // Desenhar algumas "flores" ou "frutas" no campo
  fill(255, 0, 0); // Cor das flores/frutas
  for (let i = 0; i < 5; i++) {
    ellipse(random(100, 700), random(100, 500), 30, 30);
  }
}

// Função para desenhar a cidade
function drawCidade() {
  fill(150); // Cor cinza para a cidade
  rect(0, height - 150, width, 150); // Criando o chão da cidade (um retângulo abaixo)

  // Desenhar prédios simples na cidade
  fill(100, 100, 255);
  for (let i = 0; i < 5; i++) {
    let buildingX = random(100, 700);
    let buildingHeight = random(50, 150);
    rect(buildingX, height - buildingHeight - 150, 50, buildingHeight);
  }

  // Desenhar uma área de entrega no canto da cidade (onde o jogador deve entregar o item)
  fill(0, 255, 0);
  rect(width - 100, height - 100, 50, 50); // Área de entrega (quadrado verde)
}
