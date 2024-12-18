/*const url = "https://dummyjson.com/quotes";
const assign = function(){
    fetch(url).then(response=> response.json())
          .then(data => console.log(data))


          quote.innerHTML = data.quotes
};
assign();
*/


let quote = document.getElementById("thoughts");
let author = document.getElementById("author");
let  btn =document.getElementById("getbtn");
const url = "https://dummyjson.com/quotes";


const getQuote = function(){
    const random_id = Math.floor(Math.random()*30);
    fetch(url).then(response=> response.json())
          .then(data => {console.log(data)
           quote.innerHTML = data.quotes[`${random_id}`].quote;
           author.innerHTML = data.quotes[`${random_id}`].author;
        })
};
btn.addEventListener("click",getQuote);




