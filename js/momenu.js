const delEl = document.querySelector(".del_btn");
const momenuwrapEl = document.querySelector(".mo_menuwrap");
const mobtnEl = document.querySelector(".mo_btn");

delEl.addEventListener('click',()=>{
    momenuwrapEl.classList.remove("active");
});


mobtnEl.addEventListener('click',()=>{
    momenuwrapEl.classList.add("active")
});