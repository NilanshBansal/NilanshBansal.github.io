
$(document).ready(function(){

  var clicked=0;
  // Add smooth scrolling to all links
  $("a").on('click', function(event) {

    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){
   
        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    } // End if
  });

$('#skillsheadingbtn').on('click',function(){

		if(clicked==0)
			clicked=1;
		else
		{
			$('.progressbar').each(function(){	
				$(this).find('.progressbar2').stop();
			});	
		}

		
		$('.progressbar').each(function(){
			
			$(this).find('.progressbar2').css('width', '0%').animate({
				width:$(this).attr('data-percent')
			},2700);
		});

	});	

});
