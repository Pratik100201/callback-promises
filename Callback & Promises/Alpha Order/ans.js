let bb = [{
    title : "Amber" ,
    author : "Johney" ,
    year : 2012
} , {
    title : "Pirates" ,
    author : "Depp",
    year : 2014
}, {
    title : "Zero to One" ,
    author : "Carlos",
    year : 2017
}, {
    title : "Harvey" ,
    author : "Nusrat",
    year : 2002
}]

function alpha(obj,callback){
    let b = obj.map((ele) =>  ele.title)
     callback(b)
}

function callback(b){
     b.sort()
    console.log(b)
}
alpha(bb,callback)