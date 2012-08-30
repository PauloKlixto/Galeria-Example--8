$(document).ready(function(){
	$.ajax({
		url : "scripts/images.xml",
		dataType : "xml",
		success : function(data){
			var content = "";
			for (i=0;i<$(data).find("item").length;i++) {
				var image = $(data).find("item").eq(i).attr("src"),
				desc = $(data).find("item").eq(i).attr("desc"),
				keyword = $(data).find("item").eq(i).attr("key");
				content += "<div class='images grid_4' keyword='"+keyword+"'><img src='"+image+"' width='100%' /><p class='tag'>"+desc+"</p></div>";
			}
			$('#clearfix').before(content);
		}
	});
	$('#campo-busca').keyup(function(){
		$('[keyword='+$('#campo-busca').val()+']').fadeIn(100, function(){
			$('.images[keyword!='+$('#campo-busca').val()+']').fadeOut(500);
		});
	});
});
	