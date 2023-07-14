async function main(){
    var data=await fetch('https://jsonplaceholder.typicode.com/comments');  
    var respose= await data.json()
    // console.log(data); 
    console.log(respose); 
}
main();