class statIn{
    constructor(){
        getJson('/dat/dat.json',json=>{
            this.dat = json;
       })
    }
    
}
const dath = new statIn();
console.log(dath.dat)