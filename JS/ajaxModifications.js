$(function(){
	$resultContainer = $('#showResults'); //grabs the div from the html, this way jquery knows where to display the information
	$displayResults = $('#showResults'); //grabs div from html... not sure why it's the same as the previous line. Will have to come back
	$showQueries = $('#showQuery');
	var searchBarForm = document.getElementById('searchBar'); //search form, not sure why this is js instead of jquery. 

	//get the document and wait for the search button to be clicked
	$(document).ready(function(){ //this line tells this function to wait until the page has finished rendering before running.
		console.log("ready");
		var searchButton; //search button
		searchButton = searchBarForm.elements['submit'];
		searchButton.onclick = getIDs;
	});

	function getIDs(){
		var searchQueries;
		var stringToReformat;
		var newString = [];
		var stackExchangeIDs;
		$showQueries.html(" "); //clears the div
		$displayResults.html(" "); //clear if another search is made
		console.log("cleared");

		searchQueries = searchBarForm.elements['searchIDs'];
		stringToReformat = searchQueries.value;
		$showQueries.append("You've searched for " + stringToReformat + ". Below are the results.")
		formatIDs(stringToReformat);
	};

	function formatIDs(stringToReformat){ 
		newString = stringToReformat.split(" ");
		stackExchangeIDs = newString.join(";");

		console.log("question ids are: " + stackExchangeIDs);
		getAPIResults(stackExchangeIDs);
	};

	//This is where AJAX comes in and we retrieve the data from the api
	 function getAPIResults(stackExchangeIDs){	
	 	var URL = "https://api.stackexchange.com/2.2/";
	 	var _url = URL + 'search?order=desc&sort=activity&tagged=' + stackExchangeIDs + '&intitle=' +stackExchangeIDs +'&site=stackoverflow';
		 	$.ajax({
				type: 'GET', //get is 
				url: _url,
				dataType: 'jsonp', //this is where you would change the return type from the api
 				success: function(questions){
					$.each(questions, function(i, question){
						console.log("question info " + question);
						$.each(question, function(j, info){
							$resultContainer.append("<div class='panel panel-info'> <li class='panel-heading'> <h3 class='panel-title'>" + info.title + "</h3></li></div>");
							// console.log("specific info " + $(this).title);
						});
					});
				}
		 	});
	}

	function getQuestionDetails(){
		console.log("clicked!");
	}
});