
$(document).ready(function() { 
	
	$("#navigation li.all a").click(function(){
		$(".home-grid li").removeClass("noshow");
		$("#navigation li.all a").removeClass("current");
		$("#navigation li.all a").removeClass("active");
		$(this).addClass("current");
	});
		
	$("#navigation li.print a").click(function(){
		$(".home-grid li").removeClass("noshow");
		$("#navigation li.print a").removeClass("current");
		$("#navigation li.print a").removeClass("active");
		$(".home-grid li.digital, .home-grid li.logos").addClass("noshow");
		$(this).addClass("current");
	});
	
	$("#navigation li.digital a").click(function(){
		$(".home-grid li").removeClass("noshow");
		$("#navigation li.digital a").removeClass("current");
		$("#navigation li.digital a").removeClass("active");
		$(".home-grid li.print, .home-grid li.logos").addClass("noshow");
		$(this).addClass("current");
	});
	
	$("#navigation li.logos a").click(function(){
		$(".home-grid li").removeClass("noshow");
		$("#navigation li.logos a").removeClass("current");
		$("#navigation li.logos a").removeClass("active");
		$(".home-grid li.print, .home-grid li.digital").addClass("noshow");
		$(this).addClass("current");
	});
	
});