function show_illustration(me) {
	$(".illustration").hide()
	var illustration = $(me).children(".illustration");
	var pos_left = $("#page").offset().left + $("#page").width() - illustration.width() - 30;
	illustration.css("top",$(me).offset().top)
	illustration.css("left", pos_left);
	illustration.show();
}
function start_image() {
	var pos_left = $("#page").offset().left + $("#page").width() - $("#start").width() - 30;
	$("#start").css("top", 50)
	$("#start").css("left", pos_left);
	$("#start").show();
}
$(document).ready(function() {
	$(".section").mouseover(function(){ show_illustration(this); });
	start_image();
})
