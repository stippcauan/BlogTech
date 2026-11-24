const botoes = document.querySelectorAll("button");

botoes.forEach(function (botão) {
    let curtiu = false;
    botao.addEventListener("click",botaoClicado);
    function botaoClicado(){
        let texto = botao.querySelector("span");
        if (curtio === false ){
            texto.textContent++;
            curtiu = true;
        } else{
            texto.textContent--;
            curtiu = false;
        }
    }
})