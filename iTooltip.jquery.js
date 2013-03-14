/*!
 * iTooltip jQuery Plugin v1.0.0
 * http://jqplugin.net/itooltip-jquery-plugin-tooltips-for-form-inputs
 *
 * Created by jqplugin.net
 * Released under the GPLv2 - General Public License (Feel free to copy, modify or redistribute this plugin.)
 *
 */
 
(function($){

  var methods = {
		init : function( options, callbacks) {

			var settings = $.extend({
				'initClass':'init',
				'inactiveClass':'inactive',
				'activeClass':'active',
				'onFocus':function(value){},
				'onKeyUp':function(value){},
				'onBlur':function(value){}
			}, options);

			return this.each(function(){

				$iTooltipElement = $(this);

				if($iTooltipElement.val().trim().length == 0)
					$iTooltipElement.addClass(settings.initClass).val($iTooltipElement.data('text'));
				
				$iTooltipElement.on('focus click', function(){
					if($(this).val() == $(this).data('text')) {
						this.setSelectionRange(0, 0);
						$(this).removeClass(settings.initClass).removeClass(settings.activeClass).addClass(settings.inactiveClass);
						settings.onFocus($(this).val());
					}
				}).on('keydown', function(){
					if($(this).val() == $(this).data('text'))
						$(this).removeClass(settings.initClass).removeClass(settings.inactiveClass).addClass(settings.activeClass).val('');
				}).on('blur', function(){
					if($(this).val().trim().length == 0)
						$(this).removeClass(settings.activeClass).removeClass(settings.inactiveClass).addClass(settings.initClass).val($(this).data('text'));
					else
						if($(this).val() == $(this).data('text'))
							$(this).removeClass(settings.activeClass).removeClass(settings.inactiveClass).addClass(settings.initClass);
					settings.onBlur($(this).val());
				}).on('keyup',function(){
					settings.onKeyUp($(this).val());	
				});

			});
		}
	};
	
	$.fn.iTooltip = function(method) {
    	if ( methods[method] ) {
      		return methods[method].apply( this, Array.prototype.slice.call( arguments, 1 ));
    	} else if ( typeof method === 'object' || ! method ) {
      		return methods.init.apply( this, arguments );
    	} else {
      		$.error( 'Method ' +  method + ' does not exist on jQuery.iTooltip' );
    	}
  	};

})(jQuery);
