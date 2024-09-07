interface User{
    readonly dbId:number,
    email:string,
    userId:number,
    googleId?:string,
   // startTrail:()=>string
    startTrail():string,
    getCoupon(coupanname:string,value:number):number
}

interface User{
    github:string
}

interface Admin extends User{
    role:"admin" | "ta" | "learner"
}

// const yash:User={dbId:123,
//     email:"y@p.com",
//     userId:1223,
//     startTrail:()=>{
//         return "Test Method"
//     },
//     getCoupon:(name:"COUPON2023",val:12)=>{
//         return 10;
//     },
//     github:"Github Tocken"
// }
//yash.email="abc@test.com"

const yash:Admin={dbId:123,
    email:"y@p.com",
    userId:1223,
    startTrail:()=>{
        return "Test Method"
    },
    getCoupon:(name:"COUPON2023",val:12)=>{
        return 10;
    },
    github:"Github Tocken",
    role:"admin"
}
//###yash.dbId=12// Will not Changed