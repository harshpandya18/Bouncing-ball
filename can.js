// let canvas = document.getElementById("canvas");
// console.log(canvas);
// canvasWidth=window.innerWidth;
// canvasHeight=window.innerHeight;
//
// let ctx = canvas.getContext('2d')
// ctx.beginPath()
// ctx.fillRect(100,100,100,100)

// ctx.beginPath();
// ctx.arc(95,50,40,0,2*Math.PI);
// ctx.stroke();

//
// for(var i=0;i<100;i++){
//     ctx.beginPath();
//    ctx.arc(Math.floor(Math.random()*(100)+1) , Math.floor(Math.random()*(80)+1), Math.floor(Math.random()*(20)+1), 0 ,2*Math.PI);
//    ctx.stroke();
// }
// let x=0;
// let y=0;
// var coords = [ [150,50], [20,85], [160,95] ];
//
//
// let xvelocity=5;
// let yvelocity=5;
// function animate(){
//   requestAnimationFrame(animate);
//   ctx.clearRect(0,0,canvas.width,canvas.height);
//   for(var i = 0; i < coords.length; i++){
//       ctx.beginPath();
//       ctx.arc(x, y, 40, 0, Math.PI * 2, true);
//       ctx.stroke();
//       x+=xvelocity;
//       y+=yvelocity;
//       if(x<0 ||x>innerHeight-40)
//       yvelocity=-yvelocity;
//       if(y>innerWidth-40 || y<0)
//       xvelocity=-xvelocity;
//   }
//
// }
//
//   if(y-10<0 || y+10>innerHeight)
//   yvelocity=-yvelocity;
//   if(x+10>innerWidth || x-10<0)
//   xvelocity=-xvelocity;
//
//   x+=xvelocity;
//   y+=yvelocity;
// }
//
// animate();
// }


// Multiple Colored Animated Circle - Get Canvas element by Id
var canvas = document.getElementById( "canvas" );

// Set Canvas dimensions
canvas.width   = window.innerWidth;
canvas.height  = window.innerHeight;

// Get drawing context
var c5 = canvas.getContext( '2d' );

// The Circle class
function ColoredCircle( x, y, dx, dy, radius, color ) {

	this.x 	= x;
	this.y 	= y;
	this.dx = dx;
	this.dy = dy;

	this.radius = radius;
	this.color 	= color;

	this.draw = function() {

		c5.beginPath();

		c5.arc( this.x, this.y, this.radius, 0, Math.PI * 2, false );

		c5.strokeStyle = this.color;

		c5.stroke();
	}

	this.update = function() {

		if( this.x + this.radius > canvas.width || this.x - this.radius < 0 ) {

			this.dx = -this.dx;
		}

		if( this.y + this.radius > canvas.height|| this.y - this.radius < 0 ) {

			this.dy = -this.dy;
		}

		this.x += this.dx;
		this.y += this.dy;

		this.draw();
	}
}

var coloredCircles = [];

var circleColors = [ 'red', 'green', 'blue', 'yellow', 'orange' ];

// Radius
var radius = 50;

for( var i = 0; i < 5; i++ )  {

	// Starting Position
	var x = Math.random() * ( 100) + radius;
	var y = Math.random() * (100) + radius;

	// Speed in x and y direction
  	var dx =( Math.random()*10)+1;
  	var dy = ( Math.random()*10)+1;

	// Color
	var color = circleColors[ i ];

	coloredCircles.push( new ColoredCircle( x, y, dx, dy, radius, color ) );
}

function animate() {

	requestAnimationFrame( animate );

	c5.clearRect( 0, 0, canvas.width, canvas.height );

	for( var r = 0; r < 5; r++ ) {

		coloredCircles[ r ].update();
	}
}

animate();
