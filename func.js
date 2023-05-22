function perToPx(per,sz) {
    const pxVl = parseFloat(per) / 100 * sz;
    return pxVl;
  }
function pxToPer(px,sz){
    const perVl=parseFloat(px)/sz * 100;
    return perVl;
}
function getVer(d,ver){
    const cVer = ver.map(
        vertex => {
      const cX = vertex.x;
      const cY = vertex.y;
      return { x: cX, y: cY };
    });
    return cVer;
}
function sdToVer(s,d,r){
    var centerX = d / 2;
    var centerY = d / 2;
    var angle = (2 * Math.PI) / s;
    const arr = new Array();
      for (var i = 0; i < s; i++) {
        var y = centerX + (r) * Math.cos(i * angle);
        var x = centerY + (r) * Math.sin(i * angle);
        arr.push({x:x,y:y})
      }
    return arr;
}  
// const avr=[
//   [{center},{endline}]
//   [{center},{endline}]
//   [{center},{endline}]
//   [{center},{endline}]
//   [{center},{endline}]
// ]
function sdToVrL(s,d,r){
  var centerX = d / 2;
    var centerY = d / 2;
    var angle = (2 * Math.PI) / s;
    const arr = new Array();
    for(i=1;i<=s;i++){
      for (var i = 0; i < s; i++) {
        var y = centerX + (r) * Math.cos(i * angle);
        var x = centerY + (r) * Math.sin(i * angle);
        arr.push({x1:pxToPer(centerX,d),y1:pxToPer(centerY,d),x2:pxToPer(x,d),y2:pxToPer(y,d)})
      }
    }
    return arr;
}