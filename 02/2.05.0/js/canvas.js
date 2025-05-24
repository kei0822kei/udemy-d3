const canvas = d3.select("#canvas-chart-area").append("canvas")
  .attr("width", 500)
  .attr("height", 400)
  .style("border", "0.5px solid black");

const ctx = canvas.node().getContext("2d"); // .node()でDOM要素を取得

ctx.beginPath();
ctx.moveTo(10, 10);
ctx.lineTo(10, 390);
ctx.strokeStyle = 'red';
ctx.stroke();

ctx.strokeStyle = 'black';
ctx.fillStyle = '#69a3b2';
ctx.fillRect(50, 10, 200, 380);
ctx.strokeRect(50, 10, 200, 380);

ctx.beginPath();
ctx.ellipse(400, 200, 50, 100, 0, 0, 2 * Math.PI);
ctx.strokeStyle = 'black';
ctx.fillStyle = '#69a3b2';
ctx.fill();
ctx.stroke();
