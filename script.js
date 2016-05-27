window.addEventListener('load',startGame);

function startGame() {
	
var GAME_WIDTH	= 640;
	var GAME_HEIGHT = 360 ;
	// keep the game going 
	var gameLive = true;

	// enemies 
	var enemies = [
	

	{
		x :300,  	// x coordinate
		y :100 , 	// y coordinate
		speedY : 5 , 	// speed in Y
		w : 40 , 	// width
		h : 40	// height 
	} , 

	{
		x :450,  	// x coordinate
		y :100 , 	// y coordinate
		speedY : 6 , 	// speed in Y
		w : 40 , 	// width
		h : 40	// height 
	}
	];

	var player = {
		x : 10 , 
		y : 160 ,
		speedX : 9 ,
		isMoving : 0 , 	
		w : 40 , 
		h : 40
	};

	var goal = { 
		x : 580 , 
		y : 160 , 
		w : 50, 
		h : 36	 
	}

	var sprites = {
		
	};

	var playerName = prompt("Enter Your Name : ");


var canvas = document.getElementById('myCanvas');
var ctx = canvas.getContext("2d");
var x = 10 ;
var y = 10 ;
var h = 20 ;
var w = 20 ;
var speedX = 2;
var speedY = 0;

canvas.addEventListener('mousedown',movePlayer);
canvas.addEventListener('mouseup',stopPlayer);
canvas.addEventListener('touchstart',movePlayer);
canvas.addEventListener('touchand',stopPlayer);

var load =  function() {
	sprites.player = new Image();
	sprites.player.src = "warior_resized.png";
	
	sprites.floor = new Image();
	sprites.floor.src = "floor100.png";
	
	sprites.enemy = new Image();
	sprites.enemy.src = "enemy_resized.png";
	
	sprites.goal = new Image();
	sprites.goal.src = "goal_resized.png";
	
};

function movePlayer() {
	player.isMoving = true ;
}
function stopPlayer() {
	player.isMoving = false ;
}

var step = function () {
	
	update();
	draw();
	if(gameLive){	
	window.requestAnimationFrame(step);
	}
}
// update.n =  0 ;
function checkCollision(player , enemy ){
	if (((player.x >= enemy.x - enemy.w ) && (player.x <= enemy.x + enemy.w)) 
		&& ((player.y >= enemy.y - enemy.h) && (player.y <= enemy.y + enemy.h )))
			return true ;


}
function update() {

		if(player.isMoving){	
		player.x += player.speedX;	
			if (checkCollision(player , goal )){
			alert("Well Done " + playerName.toUpperCase());
		// var answer0 = confirm("Play Again ? ");
			if (confirm("Play Again ? ").toString() == "true"){

			window.location = "";
			} 
			}

				}
	for (var s in enemies) {
		if(checkCollision(player , enemies[s])){
			alert("Game Over !! ");
			gameLive = false;
			var answer = confirm("Play Again ? ");
			if (answer){

			window.location = "";
			} 
		}
		if(enemies[s].y > 315 ) { enemies[s].speedY = - enemies[s].speedY ; }
		else if ( enemies[s].y <  1 ) { enemies[s].speedY = - enemies[s].speedY ; }

		enemies[s].y = enemies[s].y + enemies[s].speedY; 

}
}

var  draw = function ()  {
	ctx.clearRect(0,0,GAME_WIDTH,GAME_HEIGHT);
	
	ctx.drawImage(sprites.floor,0,0);
	ctx.drawImage(sprites.player,player.x , player.y);
	ctx.drawImage(sprites.goal , goal.x , goal.y);
	enemies.forEach(function (element , index){
			ctx.drawImage(sprites.enemy , element.x , element.y);
			});
	

}

load();
step();





	}
// console.log(ctx);
// ctx.fillStyle = "rgb(200,0,200)";
//  step(10);

// function step(n) {
// 	if(n < 360){
// 		console.log(n);
// 	ctx.fillRect(83,n,64,65);
//  ctx.fillRect(186+93,n,64,65);
//  ctx.fillRect(186+93+186,n,64,65);
// 	}else 
// 	n = 0;

// 	setTimeout(function () {
// 		ctx.clearRect(83,n,64,65);
// 		ctx.clearRect(186+93,n,64,65);
//  		ctx.clearRect(186+93+186,n,64,65);
// 		step(n+2);
// 	},10);

// }


