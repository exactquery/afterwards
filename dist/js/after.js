
/**
 * Fires an event after the last repeated event finishes.  Useful for resize & similar events.
 *
 * @author  AMJones <am@jonesiscoding.com>
 * @version v1.0
 * @returns {jQuery}
 */
;(function($){
  $.fn.extend({
    after: function( eventName, callback, options ) {

      var plugin = this;
      var $plugin = $(plugin);
      var eTimer;

      plugin.defaultOptions = {
        'interval': 250,
        'preventDefault': false,
        'stopPropagation': false,
        'stopImmediatePropagation': false
      };

      var settings = $.extend({}, plugin.defaultOptions, options);

      return $plugin.on(eventName, function(e) {

        if ( settings.preventDefault ) { e.preventDefault(); }
        if ( settings.stopPropagation ) { e.stopPropagation(); }
        if ( settings.stopImmediatePropagation ) { e.stopImmediatePropagation(); }

        clearTimeout(eTimer);
        eTimer = setTimeout(callback, settings.interval);
      });
    }
  });
})(jQuery);