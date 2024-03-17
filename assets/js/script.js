var menu = document.querySelectorAll('.itemMenu')

function seletor(){
    menu .forEach((item)=>
        item.classList.remove('open')
    )
    this.classList.add('open')
}

menu.forEach((item)=>
    item.addEventListener('click', seletor)
)

var menu1 = document.querySelectorAll('.itensMenu')

function seletor1(){
    menu1 .forEach((item)=>
        item.classList.remove('opens')
    )
    this.classList.add('opens')
}

menu1.forEach((item)=>
    item.addEventListener('click',seletor1)
)