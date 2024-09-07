//let score:number =33
var score = 33;
score = 44;
score = "555";
var yash = { name: "yash", id: 334 };
yash = { username: "YP", id: 334 };
function getDbId(id) {
    console.log("Db id is: ".concat(id));
}
getDbId(5);
getDbId("5");
function getDbIdNew(id) {
    if (typeof id === "string") {
        id.toLowerCase();
    }
}
//Array
var data = [1, 2, 3];
var data1 = ['1', '2', '3'];
var data2 = ['1', '2', '3'];
var seatAllotment;
seatAllotment = "Window";
//seatAllotment="Crew"//Won't Work
