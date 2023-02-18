// your code here

let fom= document.querySelector('form')
let nInput=document.getElementById('name');
let yInput=document.getElementById('year');
let btn=document.getElementById('button');
let head= document.getElementById('url');

function handleSubmit(e){
    e.preventDefault();
    h3Value= 'https://localhost:8080/';
    let name = nInput.value;
    let date = yInput.value;
    
    if(name && date){
        h3Value += '?name=' + name + '&year=' + date;
    }
     else if(name && !date){
       h3Value +=  '?name=' + name
     }
     else if(!name && date){
        h3Value += '&year=' + date ;
     }
  head.innerText=h3Value;
}

fom.addEventListener('submit' , handleSubmit);
