function setup() {
    const canv = createCanvas(400, 200);
    canv.parent('p5Sketch');
    background(0, 100, 200);
}

function draw() {
    circle(mouseX, mouseY, 30);
}
