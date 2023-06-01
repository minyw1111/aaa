$("document").ready(function(){

    $(".nav ul li").eq(0).addClass("on")
    $(".indicator ul li").eq(0).addClass("on")
    

    $(".home h2").textillate({
        in:{
            effect: "slideInLeft",
            shuffle: true,
            callback: function(){
                $(".home p").css("opacity", 1).textillate("start")
            }
        }
    })
    $(".home p").textillate({
        in:{
            effect: "slideInLeft",
            shuffle: true,
            callback: function(){
                $("#particle").css("opacity", 1)
            }
        }
    })


    let Fullpage = new fullpage(".fullpage",{
        anchors:["home","about","menu","portfolio","portfolio2","design","contact"],
        navigation: true,
        navigationPosition: "right",
        navigationTooltips: ["홈","소개","메뉴","포폴","포폴1","작업물","연락"],
        slidesNavigation: true,
        normalScrollElements: ".window-content, .window",
        afterLoad: function(origin, desination){
            $(".nav ul li").removeClass("on").eq(desination.index).addClass("on")
            if(desination.index > 0){
                $("nav").fadeIn()
            }else{
                $("nav").fadeOut()
            }
        },
        afterSlideLoad: function(section, origion, destination){
            let params = {
                section: section,
                origin: origin,
                destination: destination
            }
            
        }
    })
    
    
    $(".portfolio .item2").click(function(){
        $(".portfolio .window").show()
        $(".portfolio .window-content").slideDown();
        $(".portfolio .window-content img").attr("src", content_img[content_index])
    })
    $(".portfolio .window").click(function(){
        $(".portfolio .window").slideUp();
        $(".portfolio .window-content").slideUp();
    })
   
    $(".portfolio1 .item2").click(function(){
        $(".portfolio1 .window").show()
        $(".portfolio1 .window-content").slideDown();
        $(".portfolio1 .window-content img").attr("src", content_img[content_index])
    })
    $(".portfolio1 .window").click(function(){
        $(".portfolio1 .window").slideUp();
        $(".portfolio1 .window-content").slideUp();
    })
   



        
})