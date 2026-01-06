;(function () {
	
	'use strict';

	var isMobile = {
		Android: function() {
			return navigator.userAgent.match(/Android/i);
		},
			BlackBerry: function() {
			return navigator.userAgent.match(/BlackBerry/i);
		},
			iOS: function() {
			return navigator.userAgent.match(/iPhone|iPad|iPod/i);
		},
			Opera: function() {
			return navigator.userAgent.match(/Opera Mini/i);
		},
			Windows: function() {
			return navigator.userAgent.match(/IEMobile/i);
		},
			any: function() {
			return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
		}
	};



	// iPad and iPod detection	
	var isiPad = function(){
		return (navigator.platform.indexOf("iPad") != -1);
	};

	var isiPhone = function(){
	    return (
			(navigator.platform.indexOf("iPhone") != -1) || 
			(navigator.platform.indexOf("iPod") != -1)
	    );
	};

	var fullHeight = function() {

		if ( !isMobile.any() ) {
			$('.js-fullheight').css('height', $(window).height());
			$(window).resize(function(){
				$('.js-fullheight').css('height', $(window).height());
			});
		}

	};

	// Parallax
	var parallax = function() {
		if ( !isMobile.any() ) {
			$(window).stellar();
		}
	};


	// Page Nav
	var clickMenu = function() {

		$('#navbar a:not([class="external"])').click(function(event){
			var section = $(this).data('nav-section'),
				navbar = $('#navbar');

				if ( $('[data-section="' + section + '"]').length ) {
			    	$('html, body').animate({
			        	scrollTop: $('[data-section="' + section + '"]').offset().top - 0
			    	}, 500);
			   }

		    if ( navbar.is(':visible')) {
		    	navbar.removeClass('in');
		    	navbar.attr('aria-expanded', 'false');
		    	$('.js-fh5co-nav-toggle').removeClass('active');
		    }

		    event.preventDefault();
		    return false;
		});


	};

	// Reflect scrolling in navigation
	var navActive = function(section) {

		var $el = $('#navbar > ul');
		$el.find('li').removeClass('active');
		$el.each(function(){
			$(this).find('a[data-nav-section="'+section+'"]').closest('li').addClass('active');
		});

	};

	var navigationSection = function() {

		var $section = $('section[data-section]');
		
		$section.waypoint(function(direction) {
		  	
		  	if (direction === 'down') {
		    	navActive($(this.element).data('section'));
		  	}
		}, {
	  		offset: '150px'
		});

		$section.waypoint(function(direction) {
		  	if (direction === 'up') {
		    	navActive($(this.element).data('section'));
		  	}
		}, {
		  	offset: function() { return -$(this.element).height() + 155; }
		});

	};

	// Window Scroll
	var windowScroll = function() {
		var lastScrollTop = 0;

		$(window).scroll(function(event){

		   	var header = $('#fh5co-header'),
				scrlTop = $(this).scrollTop();

			if ( scrlTop > 500 && scrlTop <= 2000 ) {
				header.addClass('navbar-fixed-top fh5co-animated slideInDown');
			} else if ( scrlTop <= 500) {
				if ( header.hasClass('navbar-fixed-top') ) {
					header.addClass('navbar-fixed-top fh5co-animated slideOutUp');
					setTimeout(function(){
						header.removeClass('navbar-fixed-top fh5co-animated slideInDown slideOutUp');
					}, 100 );
				}
			} 
			
		});
	};


	// Animations
	// Home
	var homeAnimate = function() {
		if ( $('#fh5co-home').length > 0 ) {	

			$('#fh5co-home').waypoint( function( direction ) {
										
				if( direction === 'down' && !$(this.element).hasClass('animated') ) {


					setTimeout(function() {
						$('#fh5co-home .to-animate').each(function( k ) {
							var el = $(this);
							
							setTimeout ( function () {
								el.addClass('fadeInUp animated');
							},  k * 200, 'easeInOutExpo' );
							
						});
					}, 200);

					
					$(this.element).addClass('animated');
						
				}
			} , { offset: '80%' } );

		}
	};

	var exploreAnimate = function() {

		var explore = $('#fh5co-explore');
		if ( explore.length > 0 ) {	

			explore.waypoint( function( direction ) {
										
				if( direction === 'down' && !$(this.element).hasClass('animated') ) {


					setTimeout(function() {
						explore.find('.to-animate').each(function( k ) {
							var el = $(this);
							
							setTimeout ( function () {
								el.addClass('fadeInUp animated');
							},  k * 200, 'easeInOutExpo' );
							
						});
					}, 200);

					setTimeout(function() {
						explore.find('.to-animate-2').each(function( k ) {
							var el = $(this);
							
							setTimeout ( function () {
								el.addClass('bounceIn animated');
							},  k * 200, 'easeInOutExpo' );
							
						});
					}, 700);

					setTimeout(function() {
						explore.find('.to-animate-3').each(function( k ) {
							var el = $(this);
							
							setTimeout ( function () {
								el.addClass('fadeInRight animated');
							},  k * 200, 'easeInOutExpo' );
							
						});
					}, 1000);

					
					$(this.element).addClass('animated');
						
				}
			} , { offset: '80%' } );

		}
	};

	var gettingStartedAnimate = function() {
		var started = $('.getting-started-1');
		if ( started.length > 0 ) {	

			started.waypoint( function( direction ) {
										
				if( direction === 'down' && !$(this.element).hasClass('animated') ) {


					setTimeout(function() {
						started.find('.to-animate').each(function( k ) {
							var el = $(this);
							
							setTimeout ( function () {
								el.addClass('fadeInUp animated');
							},  k * 200, 'easeInOutExpo' );
							
						});
					}, 200);

					setTimeout(function() {
						started.find('.to-animate-2').each(function( k ) {
							var el = $(this);
							
							setTimeout ( function () {
								el.addClass('fadeInRight animated');
							},  k * 200, 'easeInOutExpo' );
							
						});
					}, 200);

					
					$(this.element).addClass('animated');
						
				}
			} , { offset: '80%' } );

		}
	};


	var pricingAnimate = function() {
		var pricing = $('#fh5co-pricing');
		if ( pricing.length > 0 ) {	

			pricing.waypoint( function( direction ) {
										
				if( direction === 'down' && !$(this.element).hasClass('animated') ) {


					setTimeout(function() {
						pricing.find('.to-animate').each(function( k ) {
							var el = $(this);
							
							setTimeout ( function () {
								el.addClass('fadeIn animated');
							},  k * 200, 'easeInOutExpo' );
							
						});
					}, 200);

					setTimeout(function() {
						pricing.find('.to-animate-2').each(function( k ) {
							var el = $(this);
							
							setTimeout ( function () {
								el.addClass('fadeInUp animated');
							},  k * 200, 'easeInOutExpo' );
							
						});
					}, 200);

					
					$(this.element).addClass('animated');
						
				}
			} , { offset: '80%' } );

		}
	};


	var servicesAnimate = function() {
		var services = $('#fh5co-services');
		if ( services.length > 0 ) {	

			services.waypoint( function( direction ) {
										
				if( direction === 'down' && !$(this.element).hasClass('animated') ) {


					var sec = services.find('.to-animate').length,
						sec = parseInt((sec * 200) + 400);

					setTimeout(function() {
						services.find('.to-animate').each(function( k ) {
							var el = $(this);
							
							setTimeout ( function () {
								el.addClass('fadeInUp animated');
							},  k * 200, 'easeInOutExpo' );
							
						});
					}, 200);

					setTimeout(function() {
						services.find('.to-animate-2').each(function( k ) {
							var el = $(this);
							
							setTimeout ( function () {
								el.addClass('bounceIn animated');
							},  k * 200, 'easeInOutExpo' );
							
						});
					}, sec);

					
					$(this.element).addClass('animated');
						
				}
			} , { offset: '80%' } );

		}
	};


	var teamAnimate = function() {
		var team = $('#fh5co-team');
		if ( team.length > 0 ) {	

			team.waypoint( function( direction ) {
										
				if( direction === 'down' && !$(this.element).hasClass('animated') ) {

					var sec = team.find('.to-animate').length,
						sec = parseInt((sec * 200) + 400);

					setTimeout(function() {
						team.find('.to-animate').each(function( k ) {
							var el = $(this);
							
							setTimeout ( function () {
								el.addClass('fadeIn animated');
							},  k * 200, 'easeInOutExpo' );
							
						});
					}, 200);

					setTimeout(function() {
						team.find('.to-animate-2').each(function( k ) {
							var el = $(this);
							
							setTimeout ( function () {
								el.addClass('fadeInUp animated');
							},  k * 200, 'easeInOutExpo' );
							
						});
					}, sec);

					
					$(this.element).addClass('animated');
						
				}
			} , { offset: '80%' } );

		}
	};


	var footerAnimate = function() {
		var footer = $('#fh5co-footer');
		if ( footer.length > 0 ) {	

			footer.waypoint( function( direction ) {
										
				if( direction === 'down' && !$(this.element).hasClass('animated') ) {

					setTimeout(function() {
						footer.find('.to-animate').each(function( k ) {
							var el = $(this);
							
							setTimeout ( function () {
								el.addClass('fadeIn animated');
							},  k * 200, 'easeInOutExpo' );
							
						});
					}, 200);

					
					$(this.element).addClass('animated');
						
				}
			} , { offset: '80%' } );

		}
	};


	var counter = function() {
		$('.js-counter').countTo({
			 formatter: function (value, options) {
	      return value.toFixed(options.decimals);
	    },
		});
	};

	var counterWayPoint = function() {
		if ($('#fh5co-counter-section').length > 0 ) {
			$('#fh5co-counter-section').waypoint( function( direction ) {
										
				if( direction === 'down' && !$(this.element).hasClass('animated') ) {
					setTimeout( counter , 400);					
					$(this.element).addClass('animated');
						
				}
			} , { offset: '90%' } );
		}
	};

	// Document on load.
	$(function(){
		parallax();
		fullHeight();
		clickMenu();
		windowScroll();
		navigationSection();
		
		// Animations
		homeAnimate();
		exploreAnimate();
		gettingStartedAnimate();
		pricingAnimate();
		servicesAnimate();
		teamAnimate();
		footerAnimate();
		counter();
		counterWayPoint();

	});

// --- GOOGLE CALENDAR LOGIC STARTS HERE (FINAL STABLE VERSION) ---

const CALENDAR_ICS_URL =
  "https://api.allorigins.win/raw?url=https://calendar.google.com/calendar/ical/tacomaeuchre%40gmail.com/public/basic.ics";

fetch(CALENDAR_ICS_URL)
  .then(res => res.text())
  .then(text => {
    const events = text.split("BEGIN:VEVENT").slice(1);

    const now = new Date();
    let nextEvent = null;

    for (const event of events) {
      const startString = getField(event, "DTSTART");
      
      if (!startString) continue;

      const start = parseICSDate(startString);
      
      // Ensure the date is valid AND in the future
      if (start instanceof Date && !isNaN(start.getTime()) && start > now) {
        nextEvent = event;
        break;
      }
    }

    if (!nextEvent) return;

    renderEvent(nextEvent);
  });

/**
 * Parses the ICS date string (YYYYMMDDTHHMMSS) into a local Date object.
 */
function parseICSDate(icsDate) {
  // Format to standard ISO local time string: YYYY-MM-DDTHH:MM:SS
  const isoDateString = 
    icsDate.slice(0, 4) + '-' +    // YYYY
    icsDate.slice(4, 6) + '-' +    // MM
    icsDate.slice(6, 8) +          // DD
    'T' +
    icsDate.slice(9, 11) + ':' +   // HH
    icsDate.slice(11, 13) + ':' +  // MM
    icsDate.slice(13, 15);         // SS

  return new Date(isoDateString);
}


function renderEvent(eventText) {
  const summary = getField(eventText, "SUMMARY");
  const location = getField(eventText, "LOCATION");
  const description = getField(eventText, "DESCRIPTION");
  const start = parseICSDate(getField(eventText, "DTSTART"));
  
  // --- FINAL LINK FIX: Link directly to the public Google Calendar URL ---
  // This URL is stable and bypasses the problematic event ID generation.
  const eventLink = `https://calendar.google.com/calendar/u/0/r?src=tacomaeuchre%40gmail.com`;
  // --- END LINK FIX ---

  // Update the event details on the page
  const datetimeElement = document.getElementById("event-datetime");
  if (datetimeElement) {
    datetimeElement.textContent =
      start.toLocaleString(undefined, {
        weekday: "long",
        month: "long",
        day: "numeric",
        hour: "numeric",
        minute: "2-digit"
      });
  }

  // --- LOCATION PARSING AND CONDITIONAL LINKING ---
  const locationElement = document.getElementById("event-location");
  
  if (location && locationElement) {
    let cleanedLocationDisplay = location.replace(/\\/g, ''); 
    cleanedLocationDisplay = cleanedLocationDisplay.replace(', USA', '').trim();

    const firstCommaIndex = cleanedLocationDisplay.indexOf(',');
    
    let venueName = cleanedLocationDisplay;
    let addressPart = '';

    if (firstCommaIndex !== -1) {
        venueName = cleanedLocationDisplay.substring(0, firstCommaIndex).trim(); 
        addressPart = cleanedLocationDisplay.substring(firstCommaIndex).trim(); 
    }

    const isDoyles = venueName.toLowerCase().includes("doyle's public house");

    // The map link for Doyles (or a Google search for others)
    const mapLink = isDoyles ? "https://maps.app.goo.gl/pfMvcSYexrp4oYuZ9" : `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(cleanedLocationDisplay)}`;
    let locationHTML;

    if (isDoyles) {
        locationHTML = `<a href="${mapLink}" target="_blank">${venueName}</a>${addressPart}`;
    } else {
        locationHTML = `${venueName}${addressPart}`;
    }

    locationElement.innerHTML = locationHTML;
  }
  // --- END LOCATION FIX ---

  if (description && description.startsWith("ALERT:")) {
    const alert = document.getElementById("event-alert");
    if (alert) {
      alert.textContent = description.replace("ALERT:", "").trim(); 
      alert.hidden = false;
    }
  }
  
  // Update the main event link
  const calendarLinkElement = document.getElementById("calendar-link");
  if (calendarLinkElement) {
    calendarLinkElement.href = eventLink;
    calendarLinkElement.textContent = "View All Events"; 
  }
}

/**
 * Extracts a field value from the ICS text, ignoring field parameters like TZID.
 */
function getField(text, field) {
  // Regex: Find field, ignore parameters, capture value
  const match = text.match(new RegExp(field + "(?:;[^:]+)*:([^\\r\\n]+)", "i"));
  
  return match && match[1] ? match[1].trim().replace(/\\n/g, " ") : "";
}
}());