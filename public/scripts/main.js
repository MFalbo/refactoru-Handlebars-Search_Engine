$(document).ready(function(){

	var resultsTemplate = $('#results-template');
	var resultsText = resultsTemplate.html();
	var results = Handlebars.compile(resultsText);

	$('#search').submit(function(){
		console.log($(this).val());
		$.post('/search',{results: $(this).val()}, function(data){

		});
		return false;
	})

});