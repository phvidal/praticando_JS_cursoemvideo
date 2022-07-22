function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.getElementById('res')
    var img = document.getElementById('foto')

    if (fano.value.length == 0 || Number(fano.value) > ano){
        alert('Verifique os dados e tente novamente.')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        if(fsex[0].checked){
            genero = 'Homem'
            res.innerHTML = `Trata-se de um ${genero} com ${idade} anos de idade`
            if (idade >= 0 && idade < 10){
                //Criança
                img.src = './Imagens/bebe-m.png'
                res.appendChild(img)
            } else if (idade < 21) {
                //Jovem
                img.src = './Imagens/jovem-m.png'
                res.appendChild(img)
            } else if (idade < 50) {
                // Adulto
                img.src = './Imagens/adulto-m.png'
                res.appendChild(img)
            } else {
                //Idoso
                img.src = './Imagens/idoso.png'
                res.appendChild(img)
            }
        } else if (fsex[1].checked){
            genero = 'Mulher'
            res.innerHTML = `Trata-se de uma ${genero} com ${idade} anos de idade`
            if (idade >= 0 && idade < 10){
                //Criança
                img.src = './Imagens/bebe-f.png'
                res.appendChild(img)
            } else if (idade < 21) {
                //Jovem
                img.src = './Imagens/jovem-f.png'
                res.appendChild(img)
            } else if (idade < 50) {
                // Adulto
                img.src = './Imagens/adulto-f.png'
                res.appendChild(img)
            } else {
                //Idoso
                img.src = './Imagens/idosa.png'
                res.appendChild(img)
            }
        }
        
    }
}