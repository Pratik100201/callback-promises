function manipulateString(str,logString){
    return logString(str)
}
let student = "Virat Kohli"
function logString(str){
    console.log("The Manipulated String is : ",str.toUpperCase());
}
let test1 = manipulateString(student,logString)
console.log(test1);