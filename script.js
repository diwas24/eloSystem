function createPloyLn(d, s) {
  const svg = document.getElementById("polygon");
  svg.setAttribute("width", 400);
  svg.setAttribute("height", 400);
  const ver = sdToVrL(s, d, d / 2);
  ver.map((vrx) => {
    const line = document.createElementNS("http://www.w3.org/2000/svg", "line");
    line.setAttribute("x1", perToPx(vrx.x1, d));
    line.setAttribute("y1", perToPx(vrx.y1, d));
    line.setAttribute("x2", perToPx(vrx.x2, d));
    line.setAttribute("y2", perToPx(vrx.y2, d));
    line.setAttribute("stroke", "black");
    svg.appendChild(line);
  });
}
function createPolygon(d, s, svg, r) {
  var v = sdToVer(s, d, r);
  var ver = getVer(d, v);
  console.log(ver);
  const polygon = document.createElementNS(
    "http://www.w3.org/2000/svg",
    "polygon"
  );
  const points = ver.map((ver) => `${ver.x},${ver.y}`).join(" ");
  polygon.setAttribute("points", points);
  polygon.setAttribute("fill", "none");
  polygon.setAttribute("stroke", "black");
  svg.appendChild(polygon);
}
function statBs(d, s) {
  const svg = document.getElementById("polygon");
  svg.setAttribute("width", d);
  svg.setAttribute("height", d);
  while (svg.firstChild) {
    svg.firstChild.remove();
  }
  var r = d / 2;
  for (i = 0; i <= r / 40; i++) {
    createPolygon(d, s, svg, r - i * 40);
  }
  createPloyLn(d, s);
}
statBs(400, 6);
