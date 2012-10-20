$(document).ready(function(){

	//Series of Ajax requests

	$.ajax({
		type: "GET",
		async: true,
		url: "https://www.filepicker.io",
		success: function(message, text, response){
			$('#Homepage').html("The homepage has been loaded");
		},
		error: function(response, text, message){
			$('#Homepage').html("The homepage could not be loaded");
		}
	});

	$.ajax({
		type: "GET",
		async: true,
		url: "https://api.filepicker.io/v1/filepicker.js",
		success: function(message, text, response){
			$('#API').html("The API has been loaded");
		},
		error: function(response, text, message){
			$('#API').html("The API could not be loaded");
		}
	});

});