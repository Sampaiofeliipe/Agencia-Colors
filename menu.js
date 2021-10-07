const botaoMenu = document.querySelector(".icon"); /* nav h2 a */
const menu = document.querySelector(".menu"); /* nav ul */

botaoMenu.addEventListener("click", function(event){
    event.preventDefault();
    menu.classList.toggle("menu-aberto");

    if( menu.classList.contains("menu-aberto") ){
        botaoMenu.innerHTML = "&times;";
    } else {
        botaoMenu.innerHTML = "&equiv;";
    }
});

const botaoMenos = document.querySelector('.menos')
const botaoMais = document.querySelector('.mais')
const botaoReset = document.querySelector('.reset')
const body = document.querySelector('body')

botaoMenos.addEventListener('click',function(){
    body.style.fontSize= '0.8rem'
})

botaoMais.addEventListener ('click', function(){
    body.style.fontSize= '1.8rem'
})

botaoReset.addEventListener ('click', function(){
    body.style.fontSize= '1rem'
})



