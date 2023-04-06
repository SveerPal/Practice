//const User:(string | number | boolean)[]=['1','Y','3'] // Any Order

//Prescribe Order array value type
let User:[string , number ,boolean]
//User=['1','Y','3'] Will Not Work becouse of Order 
User=['1',1,true]
let rgb:[number , number ,number]=[255,123,0.6]

type tUser=[number,string]
let newUser:tUser=[255,"Abc@yash.com"]
newUser[1]="yash.com"
//newUser.push(true)// Not Allowed