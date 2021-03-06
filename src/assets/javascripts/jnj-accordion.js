(function ($) {
	
	var pluginName = "jnjAccordion", defaults = {};
	
	function JnjAcdn ( element, options ) {
		this.element = element;
		this.settings = $.extend( {}, defaults, options );
		this._defaults = defaults;
		this._name = pluginName;
		this.init();
	}
	
	JnjAcdn.prototype = {
		init: function () {
			this.acdnEl = this.element;
			$(".acdn_header", this.acdnEl).on( "click", $.proxy(this.toggle, this) );
		},
		toggle: function(e) {
			e.preventDefault();
			$(this.acdnEl).toggleClass("open");
		}
	};
	
	$.fn[ pluginName ] = function ( options ) {
		return this.each(function() {
			if ( !$.data( this, "plugin_" + pluginName ) ) {
				$.data( this, "plugin_" + pluginName, new JnjAcdn( this, options ) );
			}
		});
	};
	
})(jQuery);