let angle = 0;

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  stroke(0);
  translate(width / 2, height);
  branch(100);
}

function branch(len) {
  line(0, 0, 0, -len);
  translate(0, -len);
  len *= 0.7;

  if (len > 2) {
    push();
    rotate(angle);
    branch(len);
    pop();

    push();
    rotate(-angle);
    branch(len);
    pop();
  }
}