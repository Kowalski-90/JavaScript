function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    if (fano.value.length == 0 || Number(fano.value) > ano) {
        window.alert('Verifique os dados inseridos e tente novamente')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        res.innerHTML = `Idade calculada: ${idade} anos`
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')

        if (fsex[0].checked) {
            genero = 'homem'
            if (idade >= 0 && idade < 10) {
                //Criança
                img.setAttribute('src', 'imagens/bebe_m.png')
            } else if (idade >= 10 && idade < 21) {
                //Jovem
                img.setAttribute('src', 'imagens/adolescente_m.png')
            } else if (idade >= 21 && idade < 50) {
                //Adulto
                img.setAttribute('src', 'imagens/adulto_m.png')
            } else {
                //Idoso
                img.setAttribute('src', 'imagens/idoso_m.png')
            }

        } else if (fsex[1].checked) {
            genero = 'mulher'
            if (idade >= 0 && idade < 10) {
                //Criança
                img.setAttribute('src', 'imagens/bebe_f.png')
            } else if (idade >= 10 && idade < 21) {
                //Jovem
                img.setAttribute('src', 'imagens/adolescente_f.png')
            } else if (idade >= 21 && idade < 50) {
                //Adulto
                img.setAttribute('src', 'imagens/adulta_f.png')
            } else {
                //Idoso
                img.setAttribute('src', 'imagens/idosa_f.png')
            }
        }

        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos um(a) ${genero} com ${idade} anos`
        res.appendChild(img)
    }    
}