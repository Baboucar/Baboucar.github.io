//vendor code

$(document).ready(function(){
	//  function using jquery on click function 
   $('a[href^="#"]').on('click',function(e){  // target any anchor that start with a hash
    e.preventDefault();  // prevent page from reloadin
    var target = this.hash;  //refrencence hash and store it in a variable  
    var $target =$(target);  // turn variable into object so that it can work with jQuery

    $('html,body').animate({
         'scrollTop': $target.offset().top
    },2000,'swing');
   });
	});