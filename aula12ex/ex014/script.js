function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()    
    msg.innerHTML = `Agora são ${hora} horas.` 

    if (hora > 0 && hora < 6) {
        img.src = 'imagens/fotonoite.png'
        window.document.body.style.background = '#023373'
    } else if (hora >= 6 && hora <= 12) {
        img.src = 'imagens/fotomanha.png'
        window.document.body.style.background = '#FCE78C'
    } else if (hora > 12 && hora < 18) {
        img.src = 'imagens/fototarde.png'
        window.document.body.style.background = '#FC9B12'
    } else {
        img.src = 'imagens/comecinhonoite.png'
        window.document.body.style.background = '#A280B7'
    } 
}