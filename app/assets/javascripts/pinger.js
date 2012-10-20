$(document).ready(function(){

	//Series of Ajax requests

	$.ajax({
		type: "GET",
		async: true,
		url: "https://www.filepicker.io/status/",
		success: function(message, text, response){
			$('#Homepage').html("The homepage has been loaded");
		},
		error: function(response, text, message){
			$('#Homepage').html("The homepage could not be loaded");
		}
	});

	$.ajax({

	});

});