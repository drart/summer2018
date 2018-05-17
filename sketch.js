var osc;
var lp; 
var rev;
var revmix; 
var amplitude;
function setup() {
    var canvas = createCanvas(500,500);
    osc = new p5.Oscillator();
    osc.freq(200);
    osc.amp(0); 
    osc.setType("sawtooth");

    lp = new p5.LowPass();
    lp.freq(200);
    //lp.res(1);

    osc.disconnect();
    osc.connect(lp);
    osc.start();

    rev = new p5.Reverb;
    rev.set(5, 1);
    lp.connect(rev);

    revmix = createSlider(0, 100, 50);
amplitude = new p5.Amplitude();
}

function draw() {
  background(0);
  fill(255);
  var level = amplitude.getLevel();
  var size = map(level, 0, 1, 0, 200);
  ellipse(width/2, height/2, size, size);
    rev.drywet(revmix.value()/100);
}

function touchStarted() {
  if (getAudioContext().state !== 'running') {
    getAudioContext().resume();
  }
  osc.amp(0.5, 0.02);
}

function touchEnded(){
   osc.amp(0, 0.1);
}
