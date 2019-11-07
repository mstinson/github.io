
$(document).ready(function() { 
	
	$("#navigation li.all a").click(function(){
		$("section.home-grid li").removeClass("noshow");
		$("#navigation li.all a").removeClass("current");
		$("#navigation li.all a").removeClass("active");
		$(this).addClass("active");
	});
		
	$("#navigation li.print a").click(function(){
		$("section.home-grid li").removeClass("noshow");
		$("#navigation li.print a").removeClass("current");
		$("#navigation li.print a").removeClass("active");
		$("section.home-grid li.digital, section.home-grid li.logos").addClass("noshow");
		$(this).addClass("active");
	});
	
	$("#navigation li.digital a").click(function(){
		$("section.home-grid li").removeClass("noshow");
		$("#navigation li.digital a").removeClass("current");
		$("#navigation li.digital a").removeClass("active");
		$("section.home-grid li.print, section.home-grid li.logos").addClass("noshow");
		$(this).addClass("active");
	});
	
	$("#navigation li.logos a").click(function(){
		$("section.home-grid li").removeClass("noshow");
		$("#navigation li.logos a").removeClass("current");
		$("#navigation li.logos a").removeClass("active");
		$("section.home-grid li.print, section.home-grid li.digital").addClass("noshow");
		$(this).addClass("active");
	});
	
});