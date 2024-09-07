function addTwo(num:number){
    return num+2
}
function addTwoNew(num:number):number{
    return num+2
    //for function return type
   // return "hello"
}

addTwo(5)
addTwoNew(5)
//
function getUpper(val:string){
    return val.toUpperCase();
}
getUpper('yash')
//
function signUpUser(name:string,email:string,password:boolean){

}
signUpUser('yash','yash@test.in',false)
//
var loginUser=(name:string,email:string,isPaid:boolean=false)=>{}
loginUser('yash1','yash@test.inn')

//multiple type return 
function getValue(myVal){
    if(myVal > 5){
        return true;
    }
    return "200 Ok"
}
const getHello=(s:string):string=>{
    //if not return give error 
    return "true";
}

//const heros=['thor','spiderman','Ironman']
const heros=[1,2,3]

heros.map(hero=>{
    //return 2 // No Error 
    return `hero is ${hero}`;

})
heros.map((hero):string=>{
    //return 2 // Give Error 
    return `hero is ${hero}`;

})

function consoleError(errMsg:string):void{
    console.log(errMsg);
   // return 1 
   //void noithing return value 
}
function handleError(errMsg:string):never{
    throw new Error(errMsg)
}