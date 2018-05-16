var osc;

function setup() {
    var canvas = createCanvas(500,500);
    osc = new p5.Oscillator();
    osc.freq(200);
    osc.amp(0); 
    osc.start();
}

function draw() {
    if (mouseIsPressed){
	background(0);
    }else{
	background(255);
    }
}

function touchStarted() {
  if (getAudioContext().state !== 'running') {
    getAudioContext().resume();
  }
  osc.amp(0.5, 0.05);
}

function touchEnded(){
   osc.amp(0, 0.5);
}
