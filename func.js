function getJson(file,func=()=>{}){
  fetch(file).then(response => response.json()).then(json=>func(json))
}