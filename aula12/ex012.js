var hora_atual = new Date()
var hora = hora_atual.getHours()
console.log(`Agora são exatamente ${hora} horas.`)

if (hora > 0 && hora < 6) {
    console.log('Boa madrugada!')
} else if (hora >= 6 && hora <= 12) {
    console.log('Bom dia!')
} else if (hora > 12 && hora < 18) {
    console.log('Boa tarde!')
} else {
    console.log('Boa noite!')
} 