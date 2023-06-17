async function getdata(){
    let a = await fetch("https://jsonplaceholder.typicode.com/todos/1")
    let data = await a.json()
    console.log(data);
}
getdata()