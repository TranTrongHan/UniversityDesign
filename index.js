/* CAROUSEL*/
const buttons=document.querySelectorAll("[data-carousel-button]")

buttons.forEach(button =>{
    button.addEventListener("click",() =>{
        const offset=button.dataset.carouselButton === "next" ? 1 : -1
        const slides=button
        .closest("[data-carousel]")
        .querySelector("[data-slides]")

        const activeSlide=slides.querySelector("[data-active]")
        let newIndex=[...slides.children].indexOf(activeSlide)+offset
        if(newIndex<0) newIndex=slides.children.length-1
        if(newIndex>=slides.children.length) newIndex=0

        slides.children[newIndex].dataset.active=true 
        delete activeSlide.dataset.active
    })
} )

/* ONSCROLL */
window.onscroll=function(){
    console.info(document.documentElement.scrollTop)
    if(document.documentElement.scrollTop>50||document.body.scrollTop>50){
        var header=document.getElementById("myHeader")
        header.style.position="fixed"
        header.style.left=0
        header.style.right=0
        header.style.backgroundColor="rgba(29,85,159,0.8)"
        header.style.zIndex=9
    } else {
        header.style.position="relative";
        header.style.backgroundColor="rgb(29,85,159)"
    }
}