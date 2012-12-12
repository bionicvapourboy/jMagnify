(function($) {
	$.fn.jMagnify = function() {
		var _item, 
		_appendedItem, 
		_appendedImg, 
		_padding = 10,
		_color = '#fff'
		return this.bind("mouseenter", function() {
			var _that = $(this);
			_item = '<div id="Magnify_popThumb" style="padding:'+_padding+'px;background-color:'+_color+';box-shadow: 0px 0px 15px 5px rgba(0, 0, 0, .30);"><img src="' + _that.attr('src') + '"/></div>';
			_appendedItem = $(_item).appendTo('body').css({
				position: 'absolute'
			}).hide().fadeIn();
			_appendImg = _appendedItem.find('img');
			_that.bind("mousemove",function(e) {
				if(_appendedItem.outerHeight() < $(window).height()){
					//console.log(_appendedItem.outerHeight())
					if(e.pageY+_appendedItem.outerHeight() <= $(window).scrollTop() + $(window).height() ){
						_appendedItem.css('top', e.pageY + _padding);
					}else{
						_appendedItem.css('top', e.pageY - _appendedItem.outerHeight() - 10);
					}
				}else{
					_appendedItem.css('top', $(window).scrollTop());
					_appendImg.css('height', $(window).height()-(_padding*2));
				}
				if(_appendedItem.outerWidth() < $(window).width()){
					if(e.pageX+_appendedItem.outerWidth() <= $(window).scrollLeft() + $(window).width()){
						_appendedItem.css('left', e.pageX+_padding);
					}else if(_appendedItem.outerWidth() < e.pageX){
						_appendedItem.css('left', e.pageX-_appendedItem.outerWidth());
					}
					if(_appendedItem.outerWidth() > e.pageX && e.pageX+_appendedItem.outerWidth() > $(window).scrollLeft() + $(window).width()){
						if(e.pageX >= $(window).width()/2){
							_appendedItem.css('left', $(window).width()-_appendedItem.outerWidth());
						}	
					}
				}else{
					_appendedItem.css('left', $(window).scrollLeft());
					_appendImg.css('width', $(window).width()-(_padding*2));
				}			
			})
		})
		.bind("mouseleave", function() {
			_appendedItem.remove();
		})
	};
})(jQuery);
