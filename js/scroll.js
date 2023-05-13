const headerEl = document.querySelector("header");
const sec2El = document.querySelector(".sec2");

const handleScroll = () => {
  const pageY = window.pageYOffset;


    if(pageY >= sec2El.offsetTop - 200){
        headerEl.classList.add("bg_active");
    }else{
        headerEl.classList.remove("bg_active");
    }

}

window.addEventListener('scroll',handleScroll);
