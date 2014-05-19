$(document).ready(function(){

	var resultsTemplate = $('#results-template');
	var resultsText = resultsTemplate.html();
	var results = Handlebars.compile(resultsText);

	$('#search').submit(function(){
		// console.log($(this).find($('#search-bar')).val());
		$('#results').empty();
		var lang = $(this).find($('#search-bar')).val();

		$.post('/search',{results: lang}, function(data){
			console.log('data: ', data.desc);
			if(data.desc === undefined){
				$('#results').append(results({language: lang, desc: "We're sorry, but we do not have a description for this term."}));
			}
			else{
				$('#results').append(results({language: lang, desc: data.desc}));
			}

		});
		$(this).find($('#search-bar')).val('');
		return false;
	})

});