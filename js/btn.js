const btn = document.querySelector("#btn_wrap");
const line = document.querySelector(".line");
const btnTop = document.querySelector("#btn_top");
const btnMid = document.querySelector("#btn_mid");
const btnBot = document.querySelector("#btn_bot");

var a = 0;

btn.addEventListener('click',()=>{

    line.classList.remove("in_btn")

    btnTop.classList.toggle("line-top");
    btnTop.classList.toggle("top_move");

    
    btnMid.classList.toggle("line-Mid");
    btnMid.classList.toggle("mid_move");

    btnBot.classList.toggle("line-bot");
    btnBot.classList.toggle("bot_move");

    if(a == 0){
        
    }

    

});


