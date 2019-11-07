
$(document).ready(function() { 
	
	$("#navigation li.all a").click(function(){
		$(".home-grid li").removeClass("show");
		$("#navigation li.all a").removeClass("current");
		$("#navigation li.all a").removeClass("active");
		$(".home-grid li.default").addClass("show");
		$(this).addClass("current");
	});
		
	$("#navigation li.print a").click(function(){
		$(".home-grid li").removeClass("show");
		$("#navigation li.print a").removeClass("current");
		$("#navigation li.print a").removeClass("active");
		$(".home-grid li.print, .home-grid li.print-digital, .home-grid li.print-logos, .home-grid li.print-digital-logos").addClass("show");
		$(this).addClass("current");
	});
	
	$("#navigation li.digital a").click(function(){
		$(".home-grid li").removeClass("show");
		$("#navigation li.digital a").removeClass("current");
		$("#navigation li.digital a").removeClass("active");
		$(".home-grid li.print, .home-grid li.logos").addClass("show");
		$(this).addClass("current");
	});
	
	$("#navigation li.logos a").click(function(){
		$(".home-grid li").removeClass("show");
		$("#navigation li.logos a").removeClass("current");
		$("#navigation li.logos a").removeClass("active");
		$(".home-grid li.print, .home-grid li.digital").addClass("show");
		$(this).addClass("current");
	});
	
});