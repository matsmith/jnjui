(function ($) {
	
	var pluginName = "jnjDrawer", defaults = {};
	
	function JnjDrawer ( element, options ) {
		this.element = element;
		this.settings = $.extend( {}, defaults, options );
		this._defaults = defaults;
		this._name = pluginName;
		this.init();
	}
	
	JnjDrawer.prototype = {
		init: function () {
			this.drawerEl = this.element;
			$("html").addClass("jnj_has_drawer");
			$(this.drawerEl).on( "click", $.proxy(function(e) {
				if(e.target === this.drawerEl) {
					this.open();
				}
			}, this ));

		},
		open: function() {
			$(this.drawerEl).addClass("open").off("click");
			$("<div id='drawer_mask'></div>").insertAfter(this.drawerEl).on( "click", $.proxy(this.close, this) );
		},
		close: function() {
			$(this.drawerEl).removeClass("open").on( "click", $.proxy(function(e) {
				if(e.target === this.drawerEl) {
					this.open();
				}
			}, this ));
			$("#drawer_mask").remove();
		}
	};
	
	$.fn[ pluginName ] = function ( options ) {
		return this.each(function() {
			if ( !$.data( this, "plugin_" + pluginName ) ) {
				$.data( this, "plugin_" + pluginName, new JnjDrawer( this, options ) );
			}
		});
	};
	
})(jQuery);