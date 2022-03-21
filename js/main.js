particlesJS(
    "particles-js", {
        "particles":{
            "number":{
                "value":8,
                "density":{
                    "enable":true,
                    "value_area":800}},
                "color":{
                    "value":"#ffffff"},
                    "shape":{"type":"image","stroke":{"width":0,"color":"#000000"},"polygon":{"nb_sides":3},"image":{"src":"img/maple_R3.png","width":157,"height":141}},
                        "opacity":{"value":1,"random":false,"anim":{"enable":false,"speed":1,"opacity_min":0.1,"sync":false}},
                        "size":{"value":30,"random":true,"anim":{"enable":false,"speed":40,"size_min":0.1,"sync":false}},
                        "line_linked":{"enable":false,"distance":150,"color":"#ffffff","opacity":0.4,"width":1},
                        "move":{"enable":true,"speed":3,"direction":"bottom-left","random":false,"straight":false,"out_mode":"out","bounce":false,
                        "attract":{"enable":false,"rotateX":600,"rotateY":1200}}},
                        "interactivity":{"detect_on":"canvas","events":{"onhover":{"enable":false,"mode":"repulse"},"onclick":{"enable":false,"mode":"push"},"resize":true},"modes":{"grab":{"distance":400,"line_linked":{"opacity":1}},"bubble":{"distance":400,"size":40,"duration":2,"opacity":8,"speed":3},"repulse":{"distance":200,"duration":0.4},"push":{"particles_nb":4},"remove":{"particles_nb":2}}},"retina_detect":true});
//tabs//
$(".myTabs").each(function() {
    var $myTabs = $(this);
    $myTabs.find(".tab_content").hide().eq(0).show();
    $myTabs.find("ul.tabs_list li:first").addClass("active").show();
    $myTabs.find("ul.tabs_list li").click(function() {
        var $this = $(this);
        $this.addClass("active").siblings().removeClass("active");
        $myTabs.find(".tab_content").hide();
        var activeTab = $this.find("a").attr("href");
        $(activeTab).show();
        $('html, body').animate({
            scrollTop:$("ul.tabs_list").offset().top
        }, 600);
        return false;
    });
});

$(window).scroll(function(){
    if($(window).scrollTop()>550){
        $(".top").fadeIn(400);
    }
    else{
        $(".top").fadeOut(400);
    }
});
$(function() {
    $(".top").click(function(){
        $('html,body').animate({ scrollTop: 0 }, 'slow');
        return false;
    })
});
//pop//
$(".popclose").click(function() {
    $('.popup').fadeOut(200);
});
$(".blacklayer").click(function() {
    $('.popup').fadeOut(200);
});
$(".notice").click(function() {
$("div[id=" + $(this).attr("data-pop") + "]").fadeIn(200);
});
$(".show").click(function() {
    $("div[id=" + $(this).attr("data-pop") + "]").fadeIn(200);
    });

    $('sign_btn::after').hover(function(){
        $(this).attr('data-content','bar');
    });
    $(".sign_btn").click(function(){
        $(".sign_btn::after").css(
            {"content": "登出",}
        );
    });