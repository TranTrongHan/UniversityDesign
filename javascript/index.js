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
$(document).ready(function(){
    $("#gototop").hide()

    $(window).scroll(function(){
        if($(this).scrollTop()>=100){
            $("#myheadbar").css({
                "positon":"fixed",
                "z-index":"99",
                "top":0,
                "left":0,
                "right":0,
                "background-color":"rgba(40,92,160,0.8)",
                "color":"#fff",
            })
        }
        else{
            $("#myheadbar").css({
                "background-color":"rgba(40,92,160,1)",
                "color":"#fff",
                "positon":"relative",
                "z-index":"99",
                "top":0,
                "left":0,
                "right":0,
                "opacity":1,
            })
        }
        
    })

    $(window).scroll(function(){
        if($(this).scrollTop()>=300)
            $("#gototop").show("slow")
        else
            $("#gototop").hide("slow")
    })

    $("#gototop").click(function(){
        $("html,body").animate({
            scrollTop:0
        },2000)
    })
})