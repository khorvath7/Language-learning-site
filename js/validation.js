$(document).ready(function(){
	$("#connect").validate({
		rules:{
			//fname is a required field
			fname: { 
				required: true
			},
	
			//lname is a required field
			lname: {
				required: true
			},

			//email is a required field and must be a vaild address
			email:{
				required: true,
				email: true;
			},
			
			messages:{
				fname: "Please enter your first name.",
				lname: "Please enter your last name.",
				email: "Please enter a vaild email address.",
			}
		});
	});