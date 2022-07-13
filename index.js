let realData = ""
const getQuotes = async () =>{
const api = "https://type.fit/api/quotes"
try{
let data = await fetch(api);
realData  = await data.json();

console.log(realData[10].text);
}
 catch (error){}
}

getQuotes()