class createWork{
    constructor(work) {
        this.work=work;
        $.getJSON("/dat/dat.json","",(d)=>{this.data=d});
    }
    setArea(){
        this.incArea=this.data.works;
        
    }
    output(){
        // $(this.cont).html(this.data);
        console.log(this.incArea)
    }
}
const work = new createWork("work1");
$(document).ready(()=>{
    work.setArea()
    work.output()
})