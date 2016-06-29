// jQuery for page scrolling feature - requires jQuery Easing plugin
$(function() {
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top - 45
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
});

// Highlight the top nav as scrolling occurs
$('body').scrollspy({
    target: '.navbar-fixed-top',
    offset: 50
});

// Closes the Responsive Menu on Menu Item Click
$('.navbar-collapse ul li a').click(function() {
    $('.navbar-toggle:visible').click();
});

$('div.modal').on('show.bs.modal', function() {
	var modal = this;
	var hash = modal.id;
	window.location.hash = hash;
	window.onhashchange = function() {
		if (!location.hash){
			$(modal).modal('hide');
		}
	};
});

(function($) {
  "use strict";
  $(document).ready(function() {
    $('#request_quote_form').submit(function(event) {
      event.preventDefault();

      var email = $('#contact_detail').val(),
          message = $('#question_content').val();

      // Clear the message result in case it's still there from a previous attempt
      $('#message_result').remove();

      message = 'Email from: ' + email + '\n\nMessage:\n' + message + '\n';

      $.ajax({
        type: "POST",
        url: "https://mandrillapp.com/api/1.0/messages/send.json",
        data: {
          "key": "hONj7YkPxL46SGUZb0PruQ",
          "message": {
            "from_email": "info@bts-services.co.za",
            "from_name": name,
            "headers": {
              "Reply-To": email
            },
            "subject": "Request a Quote from the Website",
            "text": message,
            "to": [{
              "email": "terri-ann@bts-services.co.za",
              "name": "BTS Accounting and Consulting Services",
              "type": "to"
            }]
          }
        }
      })
      .done(function(response) {
        $('#contact_detail').val('');
        $('#question_content').val('');

        $('#contact_detail_label').before('<div id="message_result" class="success">Thanks! Your message was sent successfully. We&#39;ll get in touch with you shortly.</div');
      })
      .fail(function(response) {
        $('#contact_detail_label').before('<div id="message_result" class="failure">Your message could not be sent.</div');
      });
    });
  });
})(jQuery);
