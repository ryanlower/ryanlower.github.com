function focus(to) {
	$("#navigation").fadeOut("fast");
	$(to).fadeIn("fast");
}
function change_focus(from,to) {
	$(from).fadeOut("fast");
	$(to).fadeIn("fast");
}
function reset_navigation() {
	$(".box").fadeOut("fast");
	$("#navigation").fadeIn("fast");
}
function show_external_link(me) {
	$(me).siblings(".external_pop").fadeIn("fast");
}
$(document).ready(function() {
/*	$(".external").mouseover(function(){ show_external_link(this); });
	$(".external").mouseout(function(){ show_external_link(this); });
*/	$("#email").click(function(){ focus("#email_box"); return false; });
	$("#research").click(function(){ focus("#research_box"); return false; });
	$("#cv_to_research").click(function(){ change_focus("#cv_box","#research_box"); return false; });
	$("#research_to_email").click(function(){ change_focus("#research_box","#email_box"); return false; });
	$("#cv").click(function(){ focus("#cv_box"); return false; });
	$(".back").click(function(){ reset_navigation(); return false; });
})
