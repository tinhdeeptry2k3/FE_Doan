//click button next slider
$("#btn-left").on("click",(e) => {
    var list_image = ['/public/img/background.jpg','/public/img/banner-dau-ca-omega-3-1-1.webp','/public/img/logo.png']
    var pos = $("#img-slider").attr("data-number");
    if(pos == 2)
    {
        pos = 0;
    }
    else
    {
        pos = parseInt(pos) + 1;
    }
    $("#img-slider").attr("data-number",pos);
    $("#img-slider").attr("src",list_image[pos]);
});
$("#btn-right").on("click",(e) => {
    var list_image = ['/public/img/background.jpg','/public/img/banner-dau-ca-omega-3-1-1.webp','/public/img/logo.png']
    var pos = $("#img-slider").attr("data-number");
    if(pos == 2)
    {
        pos = 0;
    }
    else
    {
        pos = parseInt(pos) + 1;
    }
    $("#img-slider").attr("data-number",pos);
    $("#img-slider").attr("src",list_image[pos]);
});
//auto load slider
$(document).ready(() => {
    const nextSlide = () => {
        var list_image = ['/public/img/background.jpg','/public/img/banner-dau-ca-omega-3-1-1.webp','/public/img/logo.png']
        var pos = $("#img-slider").attr("data-number");
        if(pos == 2)
        {
            pos = 0;
        }
        else
        {
            pos = parseInt(pos) + 1;
        }
        $("#img-slider").attr("data-number",pos);
        $("#img-slider").attr("src",list_image[pos]);
    }
    setInterval(nextSlide,3000);
});
//login form 
