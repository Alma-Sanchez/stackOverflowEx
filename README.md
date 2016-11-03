Example project using Stack Overflow's API
/*===========
To view the end result 
==========*/
Using a simple python server:
	* cd to directory where the index.html file is
	* type `python -m SimpleHTTPServer 8080`

/*============
Thought process
=============*/

First note is that I should have paid more attention to the API portion. This was my first time using bootstrap. I believe I spent way too much time understanding this and making the page appeal to my desire.
Which is why I was not able to complete all information required in the question to obtain from the API. 
If I had more time, or started working on the important parts first: 
	* I would clean up my code and add more comments
	* Clean up the API results
	* and include more information along with the returned question.

The main issue of why I wish I spent more time on the API portion was due to me always receiving the following error:
	XMLHttpRequest cannot load https://api.stackoverflow.com/2.2/questions/tagged=css;html&intitle=css;html. No 'Access-Control-Allow-Origin' header is present on the requested resource. Origin 'http://localhost:8080' is therefore not allowed access.
	-Solution was to request an API key.