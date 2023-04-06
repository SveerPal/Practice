//let score:number =33
let score:number | string=33
score =44;
score="555";
type User={
    name:string,
    id:number
}
type Admin={
    username:string,
    id:number
}
let yash:User | Admin={name:"yash",id:334}
yash={username:"YP",id:334}

function getDbId(id:number|string){
    console.log(`Db id is: ${id}`)
}
getDbId(5);
getDbId("5")
function getDbIdNew(id:number|string){
    if(typeof id==="string"){
        id.toLowerCase()
    }
}


//Array
const data:number[]=[1,2,3]
const data1:string[]=['1','2','3']
const data2:(string | number | boolean)[]=['1','2','3']

let seatAllotment:"Aisle" | "Middle"|"Window"
seatAllotment="Window";
//seatAllotment="Crew"//Won't Work