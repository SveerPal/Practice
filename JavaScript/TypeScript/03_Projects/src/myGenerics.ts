const score:Array<number>=[]
const names:Array<string>=[]

function identityOne (val:boolean|number):boolean|number{
    return val;
}

function identityTwo (val:any):any{
    return val;
}

function identityThree<type> (val:type):type{
    return val;
}
function identityFour<T> (val:T):T{
    return val;
}
identityThree(3);
identityThree("3");
identityThree("Yash");
identityThree(true);

interface Bottle{
    brand:string,
    type:number
}
identityFour<Bottle>({brand:'Yash',type:4})


function getSearchProducts<T>(products:T[]): T {
    //do some databse opration 
    const myIndex=3
    return products[myIndex]
}
//Generic  Arrow Function
const getMoreSearchProducts= <T>(products:T[]): T=>{
    const myIndex=4
    return products[myIndex]
}

function otherFunction<T,U>(valOne:T,valTwo:U): object{
    
    return {
        valOne,
        valTwo
    }
}
otherFunction(3,"4")


function otherFunctionNew<T,U extends number>(valOne:T,valTwo:U): object{
    
    return {
        valOne,
        valTwo
    }
}
otherFunctionNew(3,4)

interface Database{
    connection:string,
    username:string,
    password:string
} 

function otherFunctionNeww<T,U extends Database>(valOne:T,valTwo:U): object{
    
    return {
        valOne,
        valTwo
    }
}
//otherFunctionNeww(3,{})


interface Quiz{
    name:string,
    type:string
}
interface Course{
    name:string,
    author:string,
    subject:string
}

class Sellable<T>{
    public cart:T[]=[]
    addToCart(products:T){
        this.cart.push(products)
    }
}