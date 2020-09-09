/*****************************************
File: Asgn7.html
Author: Thuy Tien Nguyen
Assignment: 7
Create Date: 7/22/2019
Last Modified: 7/30/2019
****************************************/
	
	$(document).ready(function() {
	
		$( "#tabs" ).tabs(); //tab event handler
			
		$( "#datepicker" ).datepicker(); //datepicker event handler
		
		$("#mybutton").click(
		function () 
		{
			$("#firstname_error").text(""); 
			$("#lastname_error").text(""); 
			$("#datepicker_errror").text("");
			$("#mymsg").text(""); 
			var myfirst = $("#firstname").val(); 
			var mylast = $("#lastname").val(); 
			var mydate = $("#datepicker").val(); 
			var myFlagError = "N";
		
		
			if (myfirst == "") 
			{ 
				$("#firstname_error").text("Please Enter First Name"); 
				myFlagError = "Y";
			}
			else{
			     	
				$("#firstname_error").text(""); 
				myFlagError = "N";
			}
			
			if (mylast == "") 
			{ 
				$("#lastname_error").text("Please Enter Last Name");
				myFlagError = "Y";
			}
			else{
			     	
				$("#lastname_error").text(""); 
				myFlagError = "N";
			}
			
			if (mydate == "") 
			{ 
				$("#datepicker_error").text("Please Enter the Start Date");
				myFlagError = "Y";
			}
			else{
				$("#datepicker_error").text(""); 
				myFlagError = "N";
			}
			
			if (myFlagError == "Y" || myfirst == "" || mylast == "" || mydate == "")
			{
				$("#mymsg").text("Please Correct Errors and Try Again");
			    $("#mymsg").css("color", "red");
			}
			
			if (myFlagError == "N" && myfirst != "" && mylast != "" && mydate != "" )
			{
				$("#mymsg").html("Success: " + myfirst + " " + mylast + "<br>" + "Use the Start Date as your Password");
				$("#mymsg").css("color", "green");
			}
			
			}); //end of click "Create an Account" handler
			
			var effects = "bounce";
			
			$( ".draggable" ).draggable(); //draggable event handler
			
			$( "#droppable" ).droppable({
			drop: function( event, ui ) {
		
				if (ui.draggable.attr("id") == "Great")
				{
					$( this )
					.addClass( "ui-state-highlight" )
					.find( "p" )
					.html( "Great Plan Picked!" );
					effects = "blind";
				}
			
				if (ui.draggable.attr("id") == "Poor")
				{
					$( this )
					.addClass( "ui-state-highlight" )
					.find( "p" )
					.html( "Poor Plan Picked!" );
					effects = "shake";
				}
			
			}
			}); //end of droppable event handler
	
			var callback = function()
			{
				setTimeout(function()
				{
				   $( "#effect" ).removeAttr( "style" ).fadeIn();
				}, 100 );
			}
			
			$( "#button" ).click(
	
				function runEffect()
				{
						var options = [];
						$( "#effect" ).effect( effects, options, 1000, callback );
						$("#mypara").text("I don't know"); 
						if (effects == "blind")
						{
							$("#mypara").text("Great!");
							$("#mypara").css("color", "green");
						}
						
						if (effects == "shake")
						{
							$("#mypara").text("My Head Hurts!");
							$("#mypara").css("color", "red");
						}
							
				}
			);//end of click "Show My Feelings" handler
					
	}); //end of ready function