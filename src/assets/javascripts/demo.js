$(function() {
	
	// Sample Modal
	$("#launch_sample_modal").on("click", function(){
		var qBox = new QBox({
			html: $("#sample_modal").html(),
			className: "mod m_pop m_modal l_col_6"
		});
		qBox.show();
	});

	// Toggle nav
	$(".drawer").jnjDrawer();

	// Accordion
	$(".acdn").jnjAccordion();
});