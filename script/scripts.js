$(document).ready(function(){
	$(".scroll-ani").click(function(event) {
		event.preventDefault();
		$("html, body").animate({ scrollTop: $($(this).attr("href")).offset().top }, 500);
	});

	// $(".prof_type_cell").click(function() {
	// 	$(".prof_type_cell").data('clicked',false);
	// 	$(".prof_type_cell").css('background', '#007bff');
	// 	// $(this).unbind("mouseenter mouseleave");
	// 	$(this).css('background', '#003166');
	// 	$(this).data('clicked',true);
	// 	alert($('#phy').attr('id'));
	// 	$(".prof_name_cell").hide();
	// 	if ($("#phy").data('clicked') == true) {
	// 		$("#pro_phy").show();
	// 	}
	// });

	// $(".prof_type_cell").hover(function() {
	// 	$(this).css('background', '#0056B2');
	// }, function() {
	// 	$(this).css('background', '#007bff');
	// });

	$('#phy').click(function() {
		$(".prof_type_cell").css('background', '#007bff');
		$('#phy').css('background', '#003166');
		$('.prof_name_cell').hide();
		$('.prof_phy').fadeIn(500);
	});

	$('#pt').click(function() {
		$(".prof_type_cell").css('background', '#007bff');
		$('#pt').css('background', '#003166');
		$('.prof_name_cell').hide();
		$('.prof_pt').fadeIn(500);
	});
	
	$('#psy').click(function() {
		$(".prof_type_cell").css('background', '#007bff');
		$('#psy').css('background', '#003166');
		$('.prof_name_cell').hide();
		$('.prof_psy').fadeIn(500);
	});
});