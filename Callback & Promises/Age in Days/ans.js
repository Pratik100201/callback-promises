function ageInDays(obj , logResult){
    let fullname = obj.firstname+(" ") + obj.lastname
    let ageInDays = obj.age*365
    return logResult(fullname,ageInDays)
}
let person = { firstname : "Mark" , lastname : "Taylor" , age : 28}
function logResult(fullname,ageInDays){
    console.log("The person's fullname is " +fullname +" and theie age in days is "+ageInDays)
}
ageInDays(person,logResult)