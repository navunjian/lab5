var data = require("../data.json");

exports.addFriend = function(req, res) {  
	// Your code goes 
  
    var newName = req.query.name;
	var newDescription = req.query.description;
    
    var newFriend = {
		'name' : newName,
		'description' : newDescription,
		'imageURL' : "http://lorempixel.com/400/400/people"
    };

    console.log(newFriend);
    data["friends"].push(newFriend);
    res.render('add', data);
};