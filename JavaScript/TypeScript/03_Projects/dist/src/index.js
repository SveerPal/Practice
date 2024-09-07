"use strict";
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
class User {
    constructor(email, name) {
        this.email = email;
        this.name = name;
        //private _coursecount=1
        this._coursecount = 1;
        this.city = "Kanpur";
        this.email = email;
        this.name = name;
    }
    deleteTocken() {
        console.log("Tocken Deleted");
    }
    get getAppleEmail() {
        return `Email is ${this.email}`;
    }
    get courseCount() {
        return this._coursecount;
    }
    set courseCount(courseNum) {
        if (courseNum <= 1) {
            throw new Error("Course Count should be more than 1");
        }
        this._coursecount = courseNum + 1;
    }
}
//const yash=new User("y@p.com","Yash");
//yash.deleteTocken()
class SubUser extends User {
    constructor() {
        super(...arguments);
        this.isFamily = true;
    }
    changeCourseCount() {
        this._coursecount = 4;
    }
}
