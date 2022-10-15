/**** slick slide ****/
$('.autoplay').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500,
    arrows: true,
    dots: true,
});

/***** hide navbar *****/
var prevScrollpos = window.pageYOffset;
        window.onscroll = function () {
            var currentScrollPos = window.pageYOffset;
            if (prevScrollpos > currentScrollPos) {
                document.getElementById("nav").style.top = "0";
            } else {
                document.getElementById("nav").style.top = "-36px";
            }
            prevScrollpos = currentScrollPos;
        }


/** menu-hover **/
$(".asian").mousemove(function (event) {
    $(".showdown-content-menu-tour-plus-asian").css("display", "block");
});
$(".asian").mouseout(function (event) {
    $(".showdown-content-menu-tour-plusasian").css("display", "none");
});
$(".america").mousemove(function (event) {
    $(".showdown-content-menu-tour-plus-america").css("display", "block");
});
$(".america").mouseout(function (event) {
    $(".showdown-content-menu-tour-plus-america").css("display", "none");
});
$(".europe").mousemove(function (event) {
    $(".showdown-content-menu-tour-plus-europe").css("display", "block");
});
$(".europe").mouseout(function (event) {
    $(".showdown-content-menu-tour-plus-europe").css("display", "none");
});
$(".australia").mousemove(function (event) {
    $(".showdown-content-menu-tour-plus-australia").css("display", "block");
});
$(".australia").mouseout(function (event) {
    $(".showdown-content-menu-tour-plus-australia").css("display", "none");
});