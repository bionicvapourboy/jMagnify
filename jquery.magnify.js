(function($) {
	$.fn.jMagnify = function() {
		var item, _that = this;
		return this.bind("mouseenter", function() {
			item = '<div id="Magnify_popThumb" style="padding:10px;background-color:#fff;box-shadow: 0px 0px 15px 5px rgba(0, 0, 0, .30);"><img src="' + _that.attr('src') + '"/></div>';
			$(item).appendTo('body').css({
				position: 'absolute'
			}).hide().fadeIn();
			_that.bind("mousemove",function(e) {
				if(e.pageY-_that.height()-$('#Magnify_popThumb').height() >= 0){
					$('#Magnify_popThumb').css('top', e.pageY-_that.height()-$('#Magnify_popThumb').height());
				}else{
					$('#Magnify_popThumb').css('top', e.pageY+_that.height());
				}
				if(e.pageX-_that.width()-$('#Magnify_popThumb').width() >= 0){
					$('#Magnify_popThumb').css('left', e.pageX-_that.width()-$('#Magnify_popThumb').width());
				}else{
					$('#Magnify_popThumb').css('left', e.pageX+_that.width());
				}			
			})
		})
		.bind("mouseleave", function() {
			$('#Magnify_popThumb').remove();
		})
	};
})(jQuery);
