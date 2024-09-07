/*const user= {
    name:"Yash",
    isPaid:true,
    email:"yash@codenskills.com",
    
}

function createUser({name:string,isPaid:boolean}){}

createUser({name:'Yash',isPaid:false})
//Or
createUser(user)
//ReturnObject 
//function functionname():{}{}
function createCourse():{name:string,price:number}{
    return {name:"React",price:12}
}
*/

// Type Aliases
type User= {
    name:string,   
    email:string,
    isPaid:boolean,    
}

// type Mystring=string
function createUser(user:User):User{
    return {name:"Yash",email:"yash@codenskills.com",isPaid:true};
}
createUser({name:"Yash",email:"yash@codenskills.com",isPaid:true})

// Readonly Keyword

type Users= {
    readonly _id:string,
    name:string,   
    email:string,
    isPaid:boolean,    
}
