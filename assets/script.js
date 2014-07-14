$(document).ready(function() { 

	// --------------------------------------------------
	
	// Infinite slides (last page leads back to first one when clicking button Next): 
	// Set to true or false
	var infinite = true;

	// --------------------------------------------------

	var Counter = 1; 
	var NumberMockups = $('.section').size();
	$('.total-mockups').html(NumberMockups);
	
	// Show first section (hidden by css)
	$('.section:first').addClass('active');

	// If not infinite slides, disable Prev link
	if (infinite == false) { $('#prev').addClass('disabled'); }

	// If there is only one image, disable both links.
	if (NumberMockups == 1) { 
		$('#prev').addClass('disabled');	
		$('#next').addClass('disabled');	
	}
	
	function swap(Counter) { 
		
			$('.section').removeClass('active');				// Hide all
			$('#mockup-' + Counter).addClass('active');	// Show current
			$('.mockup-on').html(Counter);					// Adapt counter indicator
		
	}
	
	$('#next').click(function() { 
		
		// If it's not the last one
		if (Counter != NumberMockups) { 
			
			$('#prev').removeClass('disabled');
			Counter++;
			
			// Swap mockup, adapt counter
			swap(Counter);
			
			// If not infinite slides: If it's the last one now, disable Next link
			if (infinite == false) {
				if (Counter == NumberMockups) { $('#next').addClass('disabled');	}						
			}
			
		} else {

			// For infinite slides: It is the last one, show first slide
			if (infinite == true) {
				Counter = 1;
				swap(Counter);						
			}

		}
		
	});
	
	$('#prev').click(function() { 
		
		// If it's not the first one
		if (Counter != 1) {
			
			$('#next').removeClass('disabled');
			Counter--;
	
			// Swap mockup, adapt counter
			swap(Counter);
			
			// If not infinite slides: If it's the first one now, disable Prev link
			if (infinite == false) {
				if (Counter == 1) { $('#prev').addClass('disabled'); }
			}
			
		} else {

			// For infinite slides: It is the first one, show last slide
			if (infinite == true) {
				Counter = NumberMockups;
				swap(Counter);
			}

		}		
		
	});
	
});
