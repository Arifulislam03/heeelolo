﻿// Quick feature detection
function isTouchEnabled() {
 	return (('ontouchstart' in window)
      	|| (navigator.MaxTouchPoints > 0)
      	|| (navigator.msMaxTouchPoints > 0));
}
jQuery(function(){
	jQuery("path[id^=\"ch_\"]").each(function (i, e) {
		addEvent( jQuery(e).attr('id') );
	});
})
function addEvent(id,relationId){
	var _obj = jQuery('#'+id);
	var _Textobj = jQuery('#'+id+','+'#'+ch_config[id]['visnames']);
	var _h = jQuery('#map').height();

	jQuery('#'+['visnames']).attr({'fill':ch_config['default']['visnames']});

		_obj.attr({'fill':ch_config[id]['upclr'],'stroke':ch_config['default']['borderclr']});
		_Textobj.attr({'cursor':'default'});
		if(ch_config[id]['enbl'] == true){
			if (isTouchEnabled()) {
				_Textobj.on('touchstart', function(e){
					var touch = e.originalEvent.touches[0];
					var x=touch.pageX-10, y=touch.pageY+(-15);
					var maptipw=jQuery('#tipch').outerWidth(), maptiph=jQuery('#tipch').outerHeight(), 
					x=(x+maptipw>jQuery(document).scrollLeft()+jQuery(window).width())? x-maptipw-(20*2) : x
					y=(y+maptiph>jQuery(document).scrollTop()+jQuery(window).height())? jQuery(document).scrollTop()+jQuery(window).height()-maptiph-10 : y
					if(ch_config[id]['targt'] != 'none'){
						jQuery('#'+id).css({'fill':ch_config[id]['dwnclr']});
					}
					jQuery('#tipch').show().html(ch_config[id]['hover']);
					jQuery('#tipch').css({left:x, top:y})
				})
				_Textobj.on('touchend', function(){
					jQuery('#'+id).css({'fill':ch_config[id]['upclr']});
					if(ch_config[id]['targt'] == '_blank'){
						window.open(ch_config[id]['url']);	
					}else if(ch_config[id]['targt'] == '_self'){
						window.parent.location.href=ch_config[id]['url'];
					}
					jQuery('#tipch').hide();
				})
			}
			_Textobj.attr({'cursor':'pointer'});
			_Textobj.hover(function(){
				//moving in/out effect
				jQuery('#tipch').show().html(ch_config[id]['hover']);
				_obj.css({'fill':ch_config[id]['ovrclr']})
			},function(){
				jQuery('#tipch').hide();
				jQuery('#'+id).css({'fill':ch_config[id]['upclr']});
			})
			if(ch_config[id]['targt'] != 'none'){
				//clicking effect
				_Textobj.mousedown(function(){
					jQuery('#'+id).css({'fill':ch_config[id]['dwnclr']});
				})
			}
			_Textobj.mouseup(function(){
				jQuery('#'+id).css({'fill':ch_config[id]['ovrclr']});
				if(ch_config[id]['targt'] == '_blank'){
					window.open(ch_config[id]['url']);	
				}else if(ch_config[id]['targt'] == '_self'){
					window.parent.location.href=ch_config[id]['url'];
				}
			})
			_Textobj.mousemove(function(e){
				var x=e.pageX+10, y=e.pageY+15;
				var maptipw=jQuery('#tipch').outerWidth(), maptiph=jQuery('#tipch').outerHeight(), 
				x=(x+maptipw>jQuery(document).scrollLeft()+jQuery(window).width())? x-maptipw-(20*2) : x
				y=(y+maptiph>jQuery(document).scrollTop()+jQuery(window).height())? jQuery(document).scrollTop()+jQuery(window).height()-maptiph-10 : y
				jQuery('#tipch').css({left:x, top:y})
			})
		}	
}