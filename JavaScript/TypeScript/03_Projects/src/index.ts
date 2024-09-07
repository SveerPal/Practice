//console.log("Type Script Test Project Still")
// class User{
//     public email:string;
//     private name:string;
//     //city:string="";
//    // readonly city:string="Kanpur"
//     private readonly city:string="Kanpur"
    
//     constructor(email:string,name:string){
//         this.email=email;
//         this.name=name
//     }
// }
// const yash=new User("y@p.com","Yash");
////yash.city="Kanpur"
////yash.city
class User{
    //private _coursecount=1
    protected _coursecount=1
    readonly city:string="Kanpur"
    
    constructor(
        public email:string,
        public name:string
    ){
        this.email=email;
        this.name=name
    }

    private deleteTocken(){
        console.log("Tocken Deleted")
    }

    get getAppleEmail():string{
        return `Email is ${this.email}`
    }
    get courseCount():number{
        return this._coursecount
    }

    set courseCount(courseNum){
        if(courseNum <= 1){
            throw new Error("Course Count should be more than 1")
        }
        this._coursecount=courseNum+1
    }
}

//const yash=new User("y@p.com","Yash");
//yash.deleteTocken()

class SubUser extends User{
    isFamily:boolean=true;
    changeCourseCount(){
        this._coursecount=4;
    }
}