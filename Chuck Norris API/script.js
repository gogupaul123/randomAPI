const btn1 = document.getElementById('btn1');
const text1 = document.getElementById('text1');

btn1.addEventListener('click', ()=>{
    console.log('btn')
    fetch('https://api.chucknorris.io/jokes/random')
    .then(data=>data.json())
    .then(joke=>text1.innerText=joke.value)
})
