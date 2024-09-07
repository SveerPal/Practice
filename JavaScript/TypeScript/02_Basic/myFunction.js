function addTwo(num) {
    return num + 2;
}
function addTwoNew(num) {
    return num + 2;
    //for function return type
    // return "hello"
}
addTwo(5);
addTwoNew(5);
//
function getUpper(val) {
    return val.toUpperCase();
}
getUpper('yash');
//
function signUpUser(name, email, password) {
}
signUpUser('yash', 'yash@test.in', false);
//
var loginUser = function (name, email, isPaid) {
    if (isPaid === void 0) { isPaid = false; }
};
loginUser('yash1', 'yash@test.inn');
//multiple type return 
function getValue(myVal) {
    if (myVal > 5) {
        return true;
    }
    return "200 Ok";
}
var getHello = function (s) {
    //if not return give error 
    return "true";
};
//const heros=['thor','spiderman','Ironman']
var heros = [1, 2, 3];
heros.map(function (hero) {
    //return 2 // No Error 
    return "hero is ".concat(hero);
});
heros.map(function (hero) {
    //return 2 // Give Error 
    return "hero is ".concat(hero);
});
function consoleError(errMsg) {
    console.log(errMsg);
    // return 1 
    //void noithing return value 
}
function handleError(errMsg) {
    throw new Error(errMsg);
}
