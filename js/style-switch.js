
$(document).ready(function() { 
	
	$("#navigation li a#all").click(function(){
		$("#navigation li a").removeClass("current");
		$(this).addClass("current");
		$("ul.folio li").removeClass("noshow");
		$("ul.folio li.default").addClass("noshow");
	});
		
	$("#navigation li a#print").click(function(){
		$("#navigation li a").removeClass("current");
		$(this).addClass("current");
		$("ul.folio li").removeClass("noshow");
		$("ul.folio li.digital, ul.folio li.logos, ul.folio li.digital-logos").addClass("noshow");
	});
	
	$("#navigation li a#digital").click(function(){
		$("#navigation li a").removeClass("current");
		$(this).addClass("current");
		$("ul.folio li").removeClass("noshow");
		$("ul.folio li.print, ul.folio li.logos, ul.folio li.print-logos").addClass("noshow");
	});
	
	$("#navigation li a#logos").click(function(){
		$("#navigation li a").removeClass("current");
		$(this).addClass("current");
		$("ul.folio li").removeClass("noshow");
		$("ul.folio li.print, ul.folio li.digital, ul.folio li.print-digital").addClass("noshow");
	});
	
});




/*
$(document).ready(function() { 
	
	$("#navigation li.all a").click(function(){
		
		$("#navigation li.all a").removeClass("current");
		$("#navigation li.all a").removeClass("active");
		
		$(this).addClass("current");
	});
		
	$("#navigation li.print a").click(function(){
		
		$("#navigation li.print a").removeClass("current");
		$("#navigation li.print a").removeClass("active");
		
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
*/

