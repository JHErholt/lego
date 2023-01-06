var galleryElements = document.querySelectorAll("#pict img, #pict1 img, #pict2 img");
var lb = document.querySelector(".lb-container");
var lbImg = document.querySelector(".lb-image");
var lbClose = document.querySelector(".lb-close");

galleryElements.forEach(function(el){
    el.addEventListener("click", function(){
        var src = el.getAttribute("src");
        lbImg.style.backgroundImage = "url("+src+")";
        lb.classList.add("lb-container-active");
    });
});
lbClose.addEventListener("click", function(){
        lbImg.style.backgroundImage = "";
        lb.classList.remove("lb-container-active");
})
