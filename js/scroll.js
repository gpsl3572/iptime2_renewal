const headerEl = document.querySelector("header");
const sec2El = document.querySelector(".sec2");

const handleScroll = () => {
  const pageY = window.pageYOffset;
  //=> 스크롤바의 높이값을 가져옴
//   console.log(pageY);

//console.log(sec2El.offsetTop);
//=>엘리먼트의 top값을 알아올 수 있다

    if(pageY >= sec2El.offsetTop - 200){
        headerEl.classList.add("bg_active");
    }else{
        headerEl.classList.remove("bg_active");
    }


}

window.addEventListener('scroll',handleScroll);

//=>스크롤 이벤트 적용
//=> 보통 스크롤 이벤트는 window를 선택하여 사용 한다.