
function carregar(){

    var msg = document.getElementById('msg')
    var img = document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas`

    if (hora >= 0 && hora <= 12){
        img.src = './Imagens/manha.jpeg'
        document.body.style.background = '#f8dd65'

    } else if (hora >= 12 && hora < 18){
        img.src = './Imagens/tarde.jpeg'
        document.body.style.background = '#ec9837'

    } else {
        img.src = './Imagens/noite.jpeg'
        document.body.style.background = '#182230'
    }

    if (hora == 1){
        msg.innerHTML = `Agora são ${hora} hora`
    }

}