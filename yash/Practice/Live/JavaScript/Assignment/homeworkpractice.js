let username="Yashvir";
console.log(`Value is ${username} and This is  a  `+typeof(username)+` type off data`);
let usernametype;
console.log(`Value is ${usernametype} and This is  a `+typeof(usernametype)+` type off data`);
let usernull=null;
console.log(`Value is ${usernull} and This is  a `+typeof(usernull)+` type off data`);

let userbool=true;
console.log(`Value is ${userbool} and This is  a `+typeof(userbool)+` type off data`);

//#################### 22222222222222222222########################
let firstname='Yash';
let lastname='Pal';
let maritalstatus='unmarried';
let country='India';
let age=28;
console.log(`first name = ${firstname}, last name = ${lastname}, marital status = ${maritalstatus}, country = ${country} and age = ${age}`)

//######## 333333333333333 ################
let name= 'yashvir';
console.log(name.toUpperCase());

//######## 444444444444 ############
let stringcheck= 'This is  string test ';
if(stringcheck.includes('test')){
    console.log('String Contain Test');
}

//######## 555555 ############
let stringToArray= 'This is string test';
let stringToArrayNew=stringToArray.split(' ')
console.log(stringToArray);
console.log(stringToArrayNew);

//######## 6666 ############
let stringToArray2= 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon';
let stringToArrayNew2=stringToArray2.split(',')
console.log(stringToArray2);
console.log(stringToArrayNew2);

// ########### 7777 ################
let stringLastIndexOff= 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon';
let stringLastIndexOffNew=stringLastIndexOff.lastIndexOf('Amazon');
console.log(stringLastIndexOffNew)
// ########### 888 ################
let stringLastIndexOff2= 'You cannot end a sentence with because because because is a conjunction';
let stringLastIndexOffNew2=stringLastIndexOff2.indexOf('because');
console.log(stringLastIndexOffNew2)
// ########### 9999 ################
let stringLastIndexOff3= '  You cannot end a sentence with because because because is a conjunction  ';
let stringLastIndexOffNew3=stringLastIndexOff3.trim();
console.log(stringLastIndexOff3)
console.log(stringLastIndexOffNew3)

//########## 10 #############

let truthy1='yash';
let truthy2=12;
let truthy3=-1;
let truthy4;
let truthy5=null;
let truthy6='';
console.log('truthy and falsy check');
truthy1?console.log('truthy'):console.log('falsy');
truthy2?console.log('truthy'):console.log('falsy');
truthy3?console.log('truthy'):console.log('falsy');
truthy4?console.log('truthy'):console.log('falsy');
truthy5?console.log('truthy'):console.log('falsy');
truthy6?console.log('truthy'):console.log('falsy');

//######### 11 ##############
//- 4 > 3 true
//- 4 >= 3 true
//- 4 < 3 false
//- 4 <= 3 false
//- 4 == 4 true
//- 4 === 4 true
//- 4 != 4  false
//- 4 !== 4 false
//- 4 != '4' false
//- 4 == '4' true
//- 4 === '4' false

console.log(4 > 3 )
console.log( 4>= 3 )
console.log( 4< 3 )
console.log(4 <= 3 )
console.log(4 == 4 )
console.log(4 === 4 )
console.log(4 != 4 )
console.log(4 !== 4 )
console.log(4 != '4' )
console.log(4 == '4' )
console.log(4 === '4' )

let str1="python";
let str2="jargon";
console.log('python length is = '+ str1.length);
console.log('jargon length is = '+ str1.length);
if(str1!=str2){
    console.log('Python and jargon not same')
}


//######## 12 ###############
let mydate=new Date();
console.log(mydate);
let olddate=new Date('1970-01-01');
console.log(olddate);
// time difference in ms
var timeDiff = mydate-olddate;

let mnth=mydate.getMonth() + 1;

//console.log(mnth);
    console.log('the year is ' + mydate.getFullYear());
    console.log('the  month is ' + mydate.getMonth() + 1);
    console.log('the  month is ' + mnth);
    console.log('the  date is ' + mydate.getDate());
    console.log('the  day is ' + mydate.getDay());
    console.log('the  HOurs is ' + mydate.getHours());
    console.log('the  Minuts is ' + mydate.getMinutes());
    console.log('the  seconds is ' + mydate.getSeconds());
    console.log('the  number of second elapsed is ' + timeDiff); 

//#############  13 #################    
// let base=prompt('Please Enter Base');
// console.log(base)
// let height=prompt('Please Enter Height');
// console.log(height)
//  let area=0.5*base*height;
//  console.log(area)

 //############# 14 ############
let x1=2;
let y1=2;
let x2=6;
let y2=10;
 let m=(y2-y1)/(x2-x1);
 console.log(`slope between point (2, 2) and point(6,10) is ${m}`)

//############# 15 ############
 //let y = 2x-2;
 let y3 =0;
 let x4 =0;
 let y4 =-2;
 let x3 =1;
 let m2=(y4-y3)/(x4-x3);
 console.log(`y = 2x-2; slope between point (${x3}, ${y3}) and point(${x4}, ${y4}) is ${m2}`)

// ########### 16 ################
// let r=prompt("Please inter radius");
// area = Math.PI * r *r  
// console.log(`Circle Area is ${area}`)
// c = 2 * Math.PI * r
// console.log(`Circle circumference is ${c}`)

//######## 17 ###############
let mydate2=new Date();
let year2=mydate2.getFullYear();
let month2=mydate2.getMonth()+1
 month2=(month2<10 )?'0'+month2 :month2;
let date2=mydate2.getDate();
date2=(date2<10 )?'0'+date2 :date2;
let hour2=mydate2.getHours();
hour2=(hour2<10 )?'0'+hour2 :hour2;
let minut2=mydate2.getMinutes();
minut2=(minut2<10 )?'0'+minut2 :minut2;

console.log(`${year2}-${month2}-${date2} ${hour2}:${minut2}`);
console.log(`${date2}-${month2}-${year2} ${hour2}:${minut2}`);
console.log(`${date2}/${month2}/${year2} ${hour2}:${minut2}`);

//############## 18 #################

// let age2=prompt("enter your age:");
// if(age2>18){
//     console.log('You are old enough to drive');
// }else{
//     console.log(`${18-age2} years he needs wait to turn 18.`)
// }

//############## 19 #################

let mynumber=23;
if((mynumber%2)==0){
    console.log('Number is Even');
}else{
    console.log(`Number is Odd`)
}
//############## 20 #################
//let mark=80;
let mark=70;
//let mark=60;
//let mark=40;
if(mark>=80 && mark <= 100){
    console.log(`Your mark is ${mark} and your grade is A`);
}else if(mark>=70 && mark <= 79){
    console.log(`Your mark is ${mark} and your grade is B`);
}else if(mark>=60 && mark <= 69){
    console.log(`Your mark is ${mark} and your grade is C`);
}else if(mark>=50 && mark <= 59){
    console.log(`Your mark is ${mark} and your grade is D`);
}else{
    console.log(`Your mark is ${mark} and your grade is F`);
}

//############## 21 #################
let month='July';
if(month=='September' || month=='October' || month=='November'){
    console.log(`Your Month is ${month} and the season is Autumn`);
}else if(month=='December' || month=='January' || month=='February'){
    console.log(`Your Month is ${month} and the season is Winter`);
}else if(month=='March' || month=='April' || month=='May'){
    console.log(`Your Month is ${month} and the season is Spring`);
}else if(month=='June' || month=='July' || month=='August'){
    console.log(`Your Month is ${month} and your grade is Summer`);
}

//############## 22 #################
function showDaysInMonth(month){
    return new Date(2022, month,0).getDate();
}
console.log(showDaysInMonth(02));
//############## 23 #################
function showDaysInMonthLeap(month){
    return new Date(2024, month,0).getDate();
}
console.log(showDaysInMonthLeap(02));

//############## 24 ###########
const countryList = require('./countries.js');
console.log(countryList);
const webTechs =require('./web_techs.js');
console.log(webTechs);

//############## 25 ############
const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey'];
console.log(shoppingCart);
shoppingCart.unshift("Meat");
console.log(shoppingCart);
shoppingCart.push("Sugar");
console.log(shoppingCart);
let useralrgc="alergic";
const newShoppingCart=[];
shoppingCart.forEach(element => {
    if(useralrgc=='alergic' && element!="Honey"){
        newShoppingCart.push(element)
    }
    
});

console.log('For  allergic = ',newShoppingCart);
let teaindex= shoppingCart.indexOf('Tea');
shoppingCart.splice(teaindex,1,"Green Tea");
console.log(shoppingCart)

//############# 26 ##################
if(countryList.includes('Ethiopia')){
    console.log('Ethiopia'.toUpperCase());
}else{
    countryList.push('Ethiopia');
}

//############# 27 ##################

const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24];
    console.log(ages.sort())
    console.log(ages[0])
    console.log(ages[ages.length-1])
    //   OR
    let minVal=Math.min(...ages);
    let maxVal=Math.max(...ages);
    console.log(minVal);
    console.log(maxVal);
    ////////////////////
    ages.sort();
    if (ages.length % 2 != 0){
        console.log('median age ' +ages[ages.length / 2]);
    }else{
        console.log ("median age "+(ages[Math.floor((ages.length-1)/2)] + ages[ages.length / 2]) / 2);
    }
    ////////////////////    
    let arraysum=0;
    ages.forEach(el=>{
        arraysum =el+arraysum;
    });
    //console.log(arraysum);
    let avgVal=arraysum/ages.length;
    console.log('average age '+avgVal);
    ///////////////////////////////////

    console.log(`Range Of Array ${minVal} - ${maxVal}`);
    ////////////////////////////
    let compareAbsMin=minVal-avgVal;
    let compareAbsMax=maxVal-avgVal;

    console.log(Math.abs(compareAbsMin));
    console.log(Math.abs(compareAbsMax));

    //############# 28 ###################
    const primeNumber=[];

    for(let i=0; i<=100;+i++){
        let flag = 0;
        // looping through 2 to user input number
        for (let j = 2; j < i; j++) {
            if (i % j == 0) {
                flag = 1;
                break;
            }
        }
        // if number greater than 1 and not divisible by other numbers
        if (i > 1 && flag == 0) {
            primeNumber.push(i)
        }
    }
    console.log('prime numbers= '+primeNumber);

    //############# 29 ###################
    let evenSum=0;
    let oddSum=0;

    for(let i=0; i<=100;+i++){
        if((i%2)==0){
            evenSum = evenSum+i
        }else{
            oddSum = oddSum+i
        }
    }
    console.log('Even total= '+evenSum);
    console.log('Odd Total= '+oddSum);

    //########### 30 ###########
    const random_hex_color_code = () => {
        let n = (Math.random() * 0xfffff * 1000000).toString(16);
        return '#' + n.slice(0, 6);
      };
      
      console.log(random_hex_color_code())

      //########## 31 ###############
      console.log(webTechs.sort());

      //########## 32 ###############
      const countryListLand =[];
      countryList.forEach((country)=>{
        if(country.includes('land')){
            countryListLand.push(country)
        }

      })
      console.log('Country Included Land = '+ countryListLand);
      console.log('##################');
      //////////////////////////
      let highestCharCountry="";
      countryList.forEach((country)=>{

        if(country.length>highestCharCountry.length){
            highestCharCountry=country;
        }
      })
      console.log('Highest Char in Country = '+highestCharCountry);
      //////////////////////////
      const fourCharCountry=[];
      countryList.forEach((country)=>{

        if(country.length<= 4){
            fourCharCountry.push(country);
        }
      })
      console.log('Four Char in Country = '+fourCharCountry);
      //////////////////////////
      const towOrMoreWordsCountry=[];
      countryList.forEach((country)=>{
        let newcountry=country.split(" ");        
        if(2 <= newcountry.length){
            towOrMoreWordsCountry.push(country);
        }
      })
      console.log('Two or More Word in Country = '+towOrMoreWordsCountry);
      /////////////////////////////////////////
      console.log(countryList.reverse());
//#########  33  ####################
function bmiCalculate(height,weight){
    let bmi;
   // bmi = (weight / Math.pow( (height/100), 2 )).toFixed(1);
    bmi = (weight / (height*height)).toFixed(1);
    console.log( bmi);
    if(bmi < 18.5){
        type = "Underweight ";
    }else if( bmi >= 18.5 && bmi <= 24.9 ){
        type = "Normal Weight ";
    }else if( bmi >= 25 && bmi <= 29.9 ){
        type = "Overweight ";
    }else{
        type = "Obese";
    }
    console.log( type);
}
bmiCalculate(5,600);
bmiCalculate(105,565);
//#########  34  ####################
function linearEquation(){
    ax + by + c == 0.
}
//#########  35  ####################

function checkArrayUnique(myArray){
    let chkarr=(new Set(myArray)).size !== myArray.length;
    if(chkarr){
        console.log('Array is Not Unique');
    }else{
        console.log('Array is Unique');
    }
}
//const myArray=[1,2,3,45,3,2,4,5,6];
const myArray=[1,2,3,5,6];

checkArrayUnique(myArray);


      

    