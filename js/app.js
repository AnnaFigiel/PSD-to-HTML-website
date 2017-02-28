
$(function() {
    
        var slider = $(".slider");
        var next = slider.find("#next");
        var prev = slider.find("#prev");
        var allLi = slider.find("li"); 
        var imgIndex = 1;
        var imgWidth = slider.find("img.photo").width();
        var firstImgClone = allLi.first().clone();
        var lastImgClone = allLi.last().clone();  
        var ul = slider.find("ul");
        var ul = document.querySelector("nav ul");
        var icon = document.getElementById("nav-icon");
        var newAllLi = slider.find("li");
    
        /* hamburger menu */
    
        if (window.matchMedia("(max-width:768px)")) {
            icon.addEventListener("click", function() {
                ul.classList.toggle("visible");
            });
        }

    
        $('#nav-icon').click(function(){
            $(this).toggleClass('open');
        });

        window.addEventListener("resize", function(){

            if(window.matchMedia("(min-width:769px)").matches) {
                ul.classList.remove("visible");
            }    
        })  
    
    /* slider */
    
//        firstImgClone.appendTo(ul);
//        lastImgClone.prependTo(ul); 
//
//        ul.width(imgWidth*newAllLi.length);
//    
//        ul.css("left", -imgWidth);
//        
//        next.on("click", function(){
//            
//            console.log("klik w prawo");
//            
//           if (imgIndex < newAllLi.length-1) {
//               imgIndex++;
//               ul.animate({
//                   left: '-='+imgWidth
//               }, function(){
//                   
//                   if (imgIndex === newAllLi.length-1) {
//                       
//                       ul.css("left", -imgWidth);
//                       imgIndex = 1;
//                   }
//               });   
//           } 
//        });
//    
//        prev.on("click", function(){
//    
//            console.log("klik w lewo");
//    
//           if (imgIndex>0){
//               imgIndex--;
//               ul.animate({
//                   left: '+='+imgWidth
//               }, function(){
//                   if (imgIndex === 0) {
//                       
//                       ul.css("left", -(ul.width() - 2*imgWidth));
//                       imgIndex = 6;
//                   }
//               }); 
//           }
//        });
}); 
