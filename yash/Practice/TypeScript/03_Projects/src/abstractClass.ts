abstract class takePhotoo{
    constructor(
        public cameraMode:string,
        public filter:string
    ){

    }
    abstract getSepia():void;
    getReelTime():number{
        return 8
    }
}

//const yp=new takePhoto("test","test");
class Instagramm extends takePhotoo{
    constructor(
        public cameraMode:string,
        public filter:string,
        public burst:number
    ){
        super(cameraMode,filter)
    }
    getSepia(): void { 
        console.log("Sopia")
    }
}