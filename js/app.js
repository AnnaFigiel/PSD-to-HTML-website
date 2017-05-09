
$(function() {
    
        var ourProjects = $("#our_projects");
        var slider = $(".slider");
        var next = ourProjects.find("#next");
        var prev = ourProjects.find("#prev");
        var allLi = slider.find("li"); 
        var imgIndex = 1;
        var imgWidth = slider.find("img.photo").outerWidth() + 20;
        var firstImgClone = allLi.first().clone();
        var lastImgClone = allLi.last().clone();  
        var ul = slider.find("ul");
        var menu = document.querySelector("nav ul");
        var icon = document.getElementById("nav-icon");
        var newAllLi = slider.find("li");
        var windowSize = $(window).width();
    
    
        /* hamburger menu */
    
        if (window.matchMedia("(max-width:768px)")) {
            icon.addEventListener("click", function() {
                menu.classList.toggle("visible");
            });
        }

    
        $('#nav-icon').click(function(){
            $(this).toggleClass('open');
        });

        window.addEventListener("resize", function(){

            if(window.matchMedia("(min-width:769px)").matches) {
                menu.classList.remove("visible");
            }    
        })  
    
    /* slider */
    
        firstImgClone.appendTo(ul);
        lastImgClone.prependTo(ul); 

        ul.width(imgWidth*newAllLi.length);
    
        ul.css("left", -imgWidth);
    
    if (windowSize > 1000) {    
        slider.css("width", 3*imgWidth);
       } else if (windowSize <= 1000 && windowSize > 900) {
            slider.css("width", 2*imgWidth);
         } else if (windowSize <= 900) {
            slider.css("width", 1*imgWidth);
            }
    
        next.on("click", function(){
            
            console.log("klik w prawo");
            
           if (imgIndex < newAllLi.length-1) {
               imgIndex++;
               ul.animate({
                   left: '-='+imgWidth
               }, function(){
                   
                   if (imgIndex === newAllLi.length-2) {
                       
                       ul.css("left", -imgWidth);
                       imgIndex = 1;
                   }
               });   
           } 
        });
    
        prev.on("click", function(){
    
            console.log("klik w lewo");
    
           if (imgIndex>0){
               imgIndex--;
               ul.animate({
                   left: '+='+imgWidth
               }, function(){
                   if (imgIndex === 0) {
                       
                       ul.css("left", -(ul.width() - imgWidth));
                       imgIndex = 6;
                   }
               }); 
           }
        });
}); 
