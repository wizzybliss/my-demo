let input=document.getElementById('input');
let submit=document.getElementById('sub-btn')

let today=document.getElementById('date')

let now=new Date()

today.innerHTML=now;

// let input=document.getElementById('input').addEventListener('click', function () {
//     input.style.background='black'
// })

input.addEventListener('click', function () {
    input.style.background='black'
    input.style.border='3px solid white'
    input.style.color='white'
    submit.style.background='white'
    submit.style.color='black'
}) 

let card=document.querySelector('.card')
let contact=document.querySelector('.contact')

contact.addEventListener('mouseover', showcard)

function showcard() {
    
    card.style.display="block"
    card.style.transition='0.3s ease-in-out'
    setTimeout(() => {
        window.location.reload(true)

    }, 4000);
}