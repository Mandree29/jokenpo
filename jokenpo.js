var bpedra = document.getElementById("bpedra")
var bpapel = document.getElementById("bpapel")
var btesoura = document.getElementById("btesoura")

var img_player = document.querySelector('img_player')
var img_bot = document.querySelector('.img_boot')


console.log(img_bot.getAttribute)

bpedra.addEventListener('click', e =>{
    bot = Math.floor(Math.random() * 3)
    if (bot == 0){
        img_bot.setAttribute("src", "./imagens/pedra.jpg")
        alert("Pedra com Pedra, Deu Empate")
    }if (bot == 1) {
        img_bot.setAttribute("src", "./imagens/papel.jpg")
        alert("Papel embrulha pedra, Você Perdeu.")
    } else {
        img_bot.setAttribute("src", "./imagens/tesoura.jpg")
        alert("Papel quebra tesoura, Você ganhou!!!")
    }
})

bpapel.addEventListener('click', e =>{
    bot = Math.floor(Math.random() * 3)
    if (bot == 1){
        img_player.setAttribute("src","./imagens/papel.jpg")
        img_bot.setAttribute("src", "./imagens/papel.jpg")
        alert("Papel com papel, Empatou")

    }if (bot == 2) {
        img_player.setAttribute("src","./imagens/papel.jpg")
        img_bot.setAttribute("src", "./imagens/tesoura.jpg")
        alert("Tesoura corta o papel, Você Perdeu.")
    } else {
        img_player.setAttribute("src","./imagens/papel.jpg")
        img_bot.setAttribute("src", "./imagens/pedra.jpg")
        alert("Papel embrulha Pedra, Você ganhou!!!")
    }
})

btesoura.addEventListener('click', e =>{
    bot = Math.floor(Math.random() * 3)
    if (bot == 2){
        alert("Deu Empate")
    }if (bot == 1) {
        alert("Pedra quebra tesoura, Você perdeu!!!")
    } else {
        alert("Tesoura corta o papel, Você ganhou.")
    }
})



bpapel.addEventListener("click", e=>{
    img_player.getAttribute
})