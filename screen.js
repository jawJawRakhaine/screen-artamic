export default class Screen {
  constructor(width, height, borderRadius) {
    this.screen = document.createElement("canvas");
    this.ctx = this.screen.getContext("2d");
    this.screen.width = width;
    this.screen.height = height;
    this.borderRadius = borderRadius;
  }

  show() {
    const root = document.getElementById("root");
    root.appendChild(this.screen);
    this.screen.style.border = "1px solid red";
    this.screen.style.borderRadius = this.borderRadius + "px";
  }
  circle() {
    this.ctx.beginPath();
    this.ctx.arc(100, 100, 50, 0, 2 * Math.PI);
    this.ctx.stroke();
  }
  rectangle() {
    this.ctx.beginPath();
    this.ctx.rect(200, 200, 100, 100);
    this.ctx.fillStyle = "red";
    this.ctx.fill();
    this.ctx.stroke();
  }
  triangle() {
    this.ctx.beginPath();
    this.ctx.moveTo(400, 400);
    this.ctx.lineTo(500, 300);
    this.ctx.lineTo(500, 500);
    this.ctx.lineTo(400, 400);
    this.ctx.fillStyle = "red";
    this.ctx.fill();
    this.ctx.stroke();
  }
}
