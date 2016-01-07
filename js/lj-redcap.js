  $(document).ready(function (){
    'use strict';
    
    // Ajax mailchimp
    // Example MailChimp url: http://xxx.xxx.list-manage.com/subscribe/post?u=xxx&id=xxx
    $('#newsletter').ajaxChimp({
      language: 'lj',
      url: 'http://fayre.us12.list-manage.com/subscribe/post?u=560d7771e38fc8d02a0bfefbd&id=9ebfe60aba'
    });

    // Mailchimp translation
    //
    // Defaults:
    //'submit': 'Submitting...',
    //  0: 'We have sent you a confirmation email',
    //  1: 'Please enter a value',
    //  2: 'An email address must contain a single @',
    //  3: 'The domain portion of the email address is invalid (the portion after the @: )',
    //  4: 'The username portion of the email address is invalid (the portion before the @: )',
    //  5: 'This email address looks fake or invalid. Please enter a real email address'

    $.ajaxChimp.translations.lj = {
      'submit': 'Submitting...',
      0: '<i class="fa fa-check"></i> We will be in touch soon!',
      1: '<i class="fa fa-warning"></i> You must enter a valid e-mail address.',
      2: '<i class="fa fa-warning"></i> E-mail address is not valid.',
      3: '<i class="fa fa-warning"></i> E-mail address is not valid.',
      4: '<i class="fa fa-warning"></i> E-mail address is not valid.',
      5: '<i class="fa fa-warning"></i> E-mail address is not valid.'
    }

    // Scroll to newsletter 
    // Function that scrolls to newsletter form placed on the bottom
    $(".lj-header-button a").click(function(e) { 
      e.preventDefault();
      $('html,body').animate({
        scrollTop: $("#newsletter-form").offset().top},
        'slow');           
    });

    // Countdown
    // To change date, simply edit: var endDate = "June 26, 2015 20:39:00";
    // $(function() {
    //   var endDate = "June 26, 2015 20:39:00";
    //   $('.lj-countdown .row').countdown({
    //     date: endDate,
    //     render: function(data) {
    //       $(this.el).html('<div><div><span>' + this.leadingZeros(data.days, 2) + '</span><span>d</span></div><div><span>' + this.leadingZeros(data.hours, 2) + '</span><span>h</span></div></div><div class="lj-countdown-ms"><div><span>' + this.leadingZeros(data.min, 2) + '</span><span>m</span></div><div><span>' + this.leadingZeros(data.sec, 2) + '</span><span>s</span></div></div>');
    //     }
    //   });
    // });
  });