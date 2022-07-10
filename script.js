function changeLB() {
    let corpo = document.body
    corpo.setAttribute('class', '') 
}

function changeDB() {
    let corpo = document.body
    corpo.setAttribute('class', 'dark-blue')
}

function changeLP() {
    let corpo = document.body
    corpo.setAttribute('class', 'pink')
}

function changeDP() {
    let corpo = document.body
    corpo.setAttribute('class', 'dark-pink')
}

function carregar() {
    let corpo = document.body
    let data = new Date()
    let agora = data.getHours()
    if(agora <18){
        corpo.setAttribute('class', '') 
    } else {
        corpo.setAttribute('class', 'dark-blue')
    }
}