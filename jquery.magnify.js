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
				var _outerHeight = _appendedItem.outerHeight();
				var _outerWidth = _appendedItem.outerWidth();
				var _winHeight = $(window).height();
				var _winWidth = $(window).width();
				var _scrollTop = $(window).scrollTop();
				var _scrollLeft = $(window).scrollLeft();
				if(_outerHeight < _winHeight){
					if(e.pageY+_outerHeight <= _scrollTop + _winHeight ){
						_appendedItem.css('top', e.pageY + _padding);
					}else{
						_appendedItem.css('top', e.pageY - _outerHeight - 10);
					}
					if(_outerHeight > e.pageY && e.pageY+_outerHeight > _scrollTop + _winHeight){
						if(e.pageY >= _winHeight/2){
							_appendedItem.css('top', _winHeight-_outerHeight);
						}	
					}
				}else{
					_appendedItem.css('top', _scrollTop);
					_appendImg.css('height', _winHeight-(_padding*2));
				}
				if(_outerWidth < _winWidth){
					if(e.pageX+_outerWidth <= _scrollLeft + _winWidth){
						_appendedItem.css('left', e.pageX + _padding);
					}else if(_outerWidth < e.pageX){
						_appendedItem.css('left', e.pageX-_outerWidth);
					}
					if(_outerWidth > e.pageX && e.pageX+_outerWidth > _scrollLeft + _winWidth){
						if(e.pageX >= _winWidth/2){
							_appendedItem.css('left', _winWidth-_outerWidth);
						}	
					}
				}else{
					_appendedItem.css('left', _scrollLeft);
					_appendImg.css('width', _winWidth-(_padding*2));
				}			
			})
		})
		.bind("mouseleave", function() {
			_appendedItem.remove();
		})
	};
})(jQuery);
