// navigation hover effect
		$(document).ready(function(){
			$("#main-nav li").hover(              
				function() {
					$('.sub-menu', this).not('.in .sub-menu').stop( true, true ).fadeIn("1800");
					$(this).toggleClass('open');        
				},
				function() {
					$('.sub-menu', this).not('.in .sub-menu').stop( true, true ).fadeOut("400");
					$(this).toggleClass('open');       
				}
			);
		});
// testimonial slider 
		$(document).ready(function(){

		$('#demo-one').owlCarousel({
			autoplay:true,
			loop:true,
			margin:10,
			nav:true,
			responsive:{
				0:{
					items:1
				},
				600:{
					items:1
				},
				1000:{
					items:1
				},
				1200:{
					items:2
				}
			}
		})
			});
// navigaton fixed	
		$(document).ready(function(e) {
			var navbarOuter = $("#nav").offset().top;					
				$(window).scroll(function() {
					var windowTop = $(window).scrollTop();
				
				if (windowTop >= navbarOuter ) {		
					
					$("#nav").addClass("nav");
				} else {
					$("#nav").removeClass("nav");
				}
			});
		}); 
// banner text fade
		$(window).load(function() {
			setTimeout(function(){ 
				$(".banner-text-wrapper").css({ opacity: 1 });
			}, 200);
		});
		
// sidebar toggle

function openNav() {
    document.getElementById("mySidenav").style.width = "280px";
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
}

//call btn

function openCall() {
    document.getElementById("mySidecall").style.width = "280px";
}

function closeCall() {
    document.getElementById("mySidecall").style.width = "0";
}

//sidebar nav

$(document).ready(function(){
    $(".has-submenu").click(function(){
        $(this).toggleClass("has-submenu-clicked");
		$(this).siblings().removeClass("has-submenu-clicked");
    });
});


$(document).ready(function(){
    $(".mobile-nav-btn").click(function(){
        $("#mySidecall").css("width", "0px");
    });
	$(".mobile-call").click(function(){
        $("#mySidenav").css("width", "0px");
    });
});