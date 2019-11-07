
$(document).ready(function() { 
	
	$("#navigation li.all a").click(function(){
		$("ul.folio li").removeClass("noshow");
		$("#navigation li.all a").removeClass("current");
		$("#navigation li.all a").removeClass("active");
		$("ul.folio li.default").addClass("noshow");
		$(this).addClass("current");
	});
		
	$("#navigation li.print a").click(function(){
		$("ul.folio li").removeClass("noshow");
		$("#navigation li.print a").removeClass("current");
		$("#navigation li.print a").removeClass("active");
		$("ul.folio li.digital, ul.folio li.logos, ul.folio li.digital-logos").addClass("noshow");
		$(this).addClass("current");
	});
	
	$("#navigation li.digital a").click(function(){
		$("ul.home-grid li").removeClass("show");
		$("#navigation li.digital a").removeClass("current");
		$("#navigation li.digital a").removeClass("active");
		$(".home-grid li.print, .home-grid li.logos").addClass("show");
		$(this).addClass("current");
	});
	
	$("#navigation li.logos a").click(function(){
		$("ul.home-grid li").removeClass("show");
		$("#navigation li.logos a").removeClass("current");
		$("#navigation li.logos a").removeClass("active");
		$(".home-grid li.print, .home-grid li.digital").addClass("show");
		$(this).addClass("current");
	});
	
});