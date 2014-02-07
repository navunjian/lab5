// Get all of our friend data
var data = require('../data.json');

exports.view = function(req, res){
	console.log(data);
	res.render('index', {
	'friends' : [
	  	{   "name" : "Fake friend",
		    "description" : "All my friends are imaginary.",
		    "imageURL" : "http://lorempixel.com/500/500/people"
	    }, 
	    
	    {
			"name": "Ivan Sutherland",
			"description": "Great at sketching",
			"imageURL": "http://upload.wikimedia.org/wikipedia/commons/5/5c/Ivan_Sutherland_at_CHM.jpg"			
		},
		{
			"name": "Lucy Suchman",
			"description": "Loves Trukese navigators",
			"imageURL": "http://upload.wikimedia.org/wikipedia/commons/d/df/Lucy_Suchman.jpeg"			
		},
		{
			"name": "Vannevar Bush",
			"description": "Has stellar associative memory",
			"imageURL": "http://upload.wikimedia.org/wikipedia/commons/e/ea/Vannevar_Bush_portrait.jpg"			
		},
		{
			"name": "Grace Hopper",
			"description": "Only friend with a Navy ship named after them",
			"imageURL": "http://www.personal.psu.edu/djd5202/gHop.jpg"
		},
		{
			"name": "Allen Newell",
			"description": "Really into psychology",
			"imageURL": "http://www.nap.edu/html/biomems/photo/anewell.JPG"
		}
	]

}

)};