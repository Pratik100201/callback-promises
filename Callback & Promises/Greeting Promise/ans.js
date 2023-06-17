function greet(name){
    return new Promise(function exe(resolve,reject){
        resolve("Hello "+name)
    })
}
greet("mina").then((mes)=> console.log(mes))