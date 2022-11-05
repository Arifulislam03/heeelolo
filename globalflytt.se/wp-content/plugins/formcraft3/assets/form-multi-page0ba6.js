jQuery(document).ready(function(){
	jQuery('.page-next').append("<span class='spin-cover'><i class='icon-spin5 animate-spin'></i></span>");
	jQuery('body').on('click','.page-next',function(){
		if ( jQuery(this).hasClass('inactive') ) { return false; }
		jQuery(this).parents('.form-live').find('.pagination-trigger.active').next().trigger('click');
	});
	jQuery('body').on('click','.page-prev',function(){
		if ( jQuery(this).hasClass('inactive') ) { return false; }
		jQuery(this).parents('.form-live').find('.pagination-trigger.active').prev().trigger('click');
	});
	jQuery('.fc-pagination .pagination-trigger').click(function(){
		var mainParent = jQuery(this).parents('.form-live');
		var existing_index = parseInt(jQuery(this).parent().find('.pagination-trigger.active').attr('data-index'));
		var index = parseInt(jQuery(this).attr('data-index'));
		var index = Math.min(existing_index+1,index);
		if ((existing_index-index)>0)
		{

			jQuery('.page-prev, .page-next').removeClass('inactive');
			jQuery(this).parents('.form-live').find('.fc-pagination > div .error-count').remove();
			jQuery(this).parent().find('.pagination-trigger.active').removeClass('active');
			jQuery(this).addClass('active');
			jQuery(this).parents('.form-live').find('.fc-form .form-page').removeClass('active');
			jQuery(this).parents('.form-live').find('.fc-form .form-page-'+index).addClass('active');
			if ( index==0 )
			{
				jQuery('.page-prev').addClass('inactive');
			}
		}
		else
		{
			jQuery('.page-next').addClass('loading');
			FormCraftSubmitForm(jQuery(this).parents('.form-live').find('.fc-form'), existing_index+1, function(e, form){
				jQuery('.page-next').removeClass('loading');
				if ( typeof e.validated !='undefined' )
				{
					jQuery('.page-prev, .page-next').removeClass('inactive');
					form.parents('.form-live').find('.pagination-trigger').removeClass('active');
					form.parents('.form-live').find('.pagination-trigger[data-index="'+index+'"]').addClass('active');
					form.parents('.form-live').find('.fc-form .form-page').removeClass('active');
					form.parents('.form-live').find('.fc-form .form-page-'+index).addClass('active');
					var len = form.parents('.form-live').find('.fc-pagination .pagination-trigger').length;
					var y = form.offset().top;
					jQuery('html, body').animate({ scrollTop: y-200 }, 600);
					if ( len-1 == index )
					{
						form.parents('.form-live').find('.page-next').addClass('inactive');
					}
				}
			});
		}
	});

var mtop = parseInt(jQuery('html').css('margin-top'));
jQuery('.fc-pagination').css('margin-top',mtop+'px');
if (jQuery('.fc-pagination').length)
{
	var top = jQuery('.fc-pagination').offset().top - parseFloat(jQuery('.fc-pagination').css('margin-top').replace(/auto/, 0));
}
setTimeout(function(){
	if (jQuery('.fc-pagination').length)
	{
		var top = jQuery('.fc-pagination').offset().top - parseFloat(jQuery('.fc-pagination').css('margin-top').replace(/auto/, 0));
	}
}, 2000);
var _height = jQuery('.fc-pagination').height();
jQuery(window).scroll(function(event) {
	var y = jQuery(this).scrollTop();
	if (y >= top ) {
		jQuery('.fc-pagination').addClass('fixed');
	} else {
		jQuery('.fc-pagination').removeClass('fixed');
	}
});
jQuery(window).trigger('scroll');
});

jQuery(document).bind('formcraft_submit_trigger', function(event, form, data){
	form.parent().find('.fc-pagination > div .error-count').remove();
});
jQuery(document).bind('formcraft_submit_result', function(event, form, response){
	if (response.success)
	{
		form.parent().find('.pagination-trigger').removeClass('pagination-trigger');
	}
	form.find('.form-page').each(function(){
		var index = jQuery(this).index();
		if (jQuery(this).find('.error-field').length!=0)
		{
			form.parent().find('.fc-pagination > div').eq(index).find('.page-number').append('<span class="error-count">'+jQuery(this).find('.error-field').length+'</span>');
		}
	});
});