//jQuery for page scrolling feature - requires jQuery Easing plugin
$(function() {
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1200);
        event.preventDefault();
    });
});

var icons = ["trophy","bulb","brain","rocket","code"], i=0;
var icons_timer = setInterval(function(){
	$('#header-icon').attr('src', 'img/'+icons[i]+'.png')
	if (i+1 < icons.length) i++;
	else i=0;
},1500);


$('div.panel-heading').click(function(){
    var el = $(this).parent().find('div.hidden-md');
    var showing = (el.length == 0) ? true : false;
    if (!showing){
        el.removeClass('hidden-sm hidden-xs hidden-md hidden-lg');
        $(this).find('span.pull-right').removeClass('ti-angle-down');
        $(this).find('span.pull-right').addClass('ti-angle-up');
    }
    else {
        $(this).parent().find('div.panel-body').addClass('hidden-sm hidden-xs hidden-md hidden-lg');
        $(this).find('span.pull-right').removeClass('ti-angle-up');
        $(this).find('span.pull-right').addClass('ti-angle-down');
    }
});