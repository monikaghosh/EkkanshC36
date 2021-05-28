var database, form;
var playerCount=0,gameState=0;
var player, form;

function setup(){
  database = firebase.database();
  createCanvas(1000,700);
  
  game = new Game()
  game.getGameState();
  //game.start();
  form = new Form();
  player = new Player();
  form.display();

  
}

function draw(){
  
  

  if(playerCount===4){
    game.updateGameState(1)
  }

  if(gameState===1){
    clear();
    game.play();
  }
  
}