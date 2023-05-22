class statPoly {
  constructor(svg) {
    this.svg = svg;
    this.baseAttr={lineStyle:1};
  }
  setBaseAttr(attr={div:10,style:{fill:"blue"}}){
    this.baseAttr=attr;
  }
  setDimesion(d) {
    this.dimension = d;
    this.center = { x: this.dimension / 2, y: this.dimension / 2 };
    this.radius = this.dimension / 2;
    this.angle = (2 * Math.PI) / this.sides;
    this.svg.setAttribute("width", this.dimension);
    this.svg.setAttribute("height", this.dimension);
  }
  clearBx() {
    while (this.svg.firstChild) {
      this.svg.firstChild.remove();
    }
  }  
  setStat(atr = {}) {
    this.stat=atr;
    this.sides = Object.keys(atr).length;
  }
  initBVer(r=this.radius, s=this.sides) {
    const vertx = new Array();
    for (let i = 0; i < s; i++) {
      var x = this.center.x + r * Math.sin(i * this.angle);
      var y = this.center.y + r * Math.cos(i * this.angle);
      vertx.push({ x: x, y: y });
    }
    return vertx;
  }
  initDVer(){
    const rad = new Array();
    Object.keys(this.stat).map(key => {
        rad.push(this.stat[key])
    });
    const trRad=rad.map((radi)=>radi*this.radius/100);
    const vertx=trRad.map((r,i)=>{
        var x = this.center.x + r * Math.sin(i * this.angle);
        var y = this.center.y + r * Math.cos(i * this.angle);
        return {x:x,y:y}
    })
    return vertx;
  }
  maxVertx(){    
    return this.initBVer();
  }
  createPolygon(r=this.radius,attr={fill:"none",stroke:"black"},ver=this.initBVer(r)) {
    const polygon = document.createElementNS(
      "http://www.w3.org/2000/svg",
      "polygon"
    );
    const points = ver.map((ver) => `${ver.x},${ver.y}`).join(" ");
    polygon.setAttribute("points", points);
    Object.keys(attr).map(key => {
        polygon.setAttribute(key, attr[key]);
      });
    this.svg.appendChild(polygon);
  }
  createLine(r=this.radius,attr={stroke:"black","stroke-opacity":0.5}) {
    const ver = this.maxVertx();
    ver.map(vrx=> {
      const line = document.createElementNS("http://www.w3.org/2000/svg","line");
      line.setAttribute("x1", `${this.center.x}`);
      line.setAttribute("y1", `${this.center.y}`);
      line.setAttribute("x2", vrx.x);
      line.setAttribute("y2", vrx.y);
      Object.keys(attr).map(key => {
        polygon.setAttribute(key, attr[key]);
      });
      this.svg.appendChild(line);
    });
  }
  createBase() {
    for (let i = 0; i < this.radius / this.baseAttr.div; i++) {
      this.createPolygon(this.radius - i * this.baseAttr.div,this.baseAttr.style);
    }
    this.createLine(undefined,this.baseAttr.lineStyle);
  }
  datPoly() {
    this.createPolygon(undefined,{fill:"orange","fill-opacity":"0.5",stroke:"none"},this.initDVer())
  }
  outPut() {
    this.clearBx();
    this.createBase();
    this.datPoly();
  }
}

{
const svg = document.getElementById("polygon");
const statAttr = { flx: 50, str: 30, dex: 30, agl: 33, end: 23, sta: 34,ref:34 };
const phy = new statPoly(svg);
phy.setStat(statAttr);
phy.setDimesion(200);
phy.setBaseAttr({div:15,style:{fill:"blue",stroke:"blue","fill-opacity":"0.1","stroke-opacity":"0.3"},lineStyle:{stroke:"blue","stroke-opacity":"0.3"}})
phy.outPut();
}