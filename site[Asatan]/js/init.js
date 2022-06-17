$(window).on('load', function() { 
    menuMargin();
});

$( window ).resize(function() {
    menuMargin();
});

function menuMargin(){
    tlw = 0;
    tuw = 0;
    ww = $(window).width();
    $mul = $('#main-menu ul:visible');
    $smli = $('#main-sub-menu li:visible');
    $smli.each(function(){
        tlw += $(this).width();
    });
    $mul.not('#main-sub-menu').each(function(){
        tuw += $(this).width() + 120;
    });
    $('#main-sub-menu li').each(function(){
        margin = (ww - tuw - tlw - 120.5) / (($smli.length-1) * 2);
        $(this).css('margin','0 ' + margin + 'px');
    });
}