"use strict";
const score = [];
const names = [];
function identityOne(val) {
    return val;
}
function identityTwo(val) {
    return val;
}
function identityThree(val) {
    return val;
}
function identityFour(val) {
    return val;
}
identityThree(3);
identityThree("3");
identityThree("Yash");
identityThree(true);
identityFour({ brand: 'Yash', type: 4 });
function getSearchProducts(products) {
    //do some databse opration 
    const myIndex = 3;
    return products[myIndex];
}
//Generic  Arrow Function
const getMoreSearchProducts = (products) => {
    const myIndex = 4;
    return products[myIndex];
};
function otherFunction(valOne, valTwo) {
    return {
        valOne,
        valTwo
    };
}
otherFunction(3, "4");
function otherFunctionNew(valOne, valTwo) {
    return {
        valOne,
        valTwo
    };
}
otherFunctionNew(3, 4);
function otherFunctionNeww(valOne, valTwo) {
    return {
        valOne,
        valTwo
    };
}
class Sellable {
    constructor() {
        this.cart = [];
    }
    addToCart(products) {
        this.cart.push(products);
    }
}
