function Doubleit(arr,callbak){
    let values = arr.map((ele)=>{
        return callbak(ele)
    })
    return values
}
let array1 = [1,2,3,4,5,6,7]
function callbak(ele){
    return ele*2
}
let test1 = Doubleit(array1,callbak)
console.log(test1);