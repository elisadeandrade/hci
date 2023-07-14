let bg;//background

let vid;

let waiting;

let load;
let login;
let home;
let calendar;
let ticket;
let visualizer;

let bb;//back button
let bf;//forward button

let bc;//calendar button
let bt;//ticket button
let bv;//vis button


function wait(seconds){
  seconds = seconds * 1000; //random time in milliseconds
  startTime = millis(); //start time of countdown
  while (millis() < startTime + seconds){}// when countdown finnishes, program proceeds   
}

function setup() {
  vid = createVideo('img/vid.mp4');
  
  waiting = false;
  
  load = true;
  login = false; 
  home = false;  
  calendar = false;
  ticket = false;
  visualizer = false;
  
  
  bv = createButton("");  
  bv.size(225,225);
  bv.position(75,200);
  bv.style("border", "None");
  bv.style("background-color", "transparent");
  bv.mouseClicked(bvClicked)
  
  bb = createButton("");  
  bb.size(50,50);
  bb.position(25,600);
  bb.style("border", "None");
  bb.style("background-color", "transparent");
  bb.mouseClicked(bbClicked)
  
  bf = createButton("");  
  bf.size(50,50);
  bf.position(300,600);
  bf.style("border", "None");
  bf.style("background-color", "transparent");
  bf.mouseClicked(bfClicked)
  
  bt = createButton("");  
  bt.size(100,75);
  bt.position(25,200);
  bt.style("border", "None");
  bt.style("background-color", "transparent");
  bt.mouseClicked(btClicked);
  
  bc = createButton("");  
  bc.size(100,75);
  bc.position(25,325);
  bc.style("border", "None");
  bc.style("background-color", "transparent");
  bc.mouseClicked(bcClicked);
  
  createCanvas(375, 667);
  bg = loadImage('img/1.png');
  background(bg)
}

function draw() {
  background(bg);
}

function mouseClicked(){
	if(load){
		wait(1);
		login = true;
		load = false;
		bg = loadImage('img/2.png');	
	}
}

function btClicked(){
  if(home){
    ticket = true;
    home = false;
    bg = loadImage('img/3.png');
  }
}

function bcClicked(){
  if(home){
    calendar = true;
    home = false;
    bg = loadImage('img/4.png');
  }
}

function bvClicked(){
  if(ticket){
    visualizer = true;
    ticket = false;
    bg = 0;
    vid.play();
  }
  
}

function bbClicked(){
  if(calendar || ticket);
	home = true;
    calende = false;
    ticket = false;
    bg = loadImage('img/5.png');
}

function bfClicked(){
  if(login){
	home = true;
    login = false;
    bg = loadImage('img/5.png');
  } 
}
