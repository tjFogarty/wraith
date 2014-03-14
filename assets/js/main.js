/* globals jQuery, ga, document, InstantClick */
(function ($) {
  'use strict';

  $(document).ready(function () {

    InstantClick.on('change', function() {
      ga('send', 'pageview', location.pathname + location.search);
    });

    InstantClick.init();

  });

}(jQuery));