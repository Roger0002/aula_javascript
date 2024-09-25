let divMessage = document.getElementById("message")
console.log(divMessage)
let nomeDigitado = "Roger"
let urlimgprofile = "https://conteudo.imguol.com.br/c/entretenimento/80/2017/04/25/a-atriz-zoe-saldana-como-neytiri-em-avatar-1493136439818_v2_900x506.jpg"
divMessage.innerHTML = `<p>Olá ${nomeDigitado}! <img src=${urlimgprofile}></p>`;