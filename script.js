
$(window).on('load', function () {
    'use strict';
    const imgcount = $('#slider ul li').length;
    const imgwidth = $('#slider ul li img').first().width();
    const totalwidth = (imgwidth * imgcount) + 'px';


    let leftpos = 0;
    let counter = 0;
    $('#slider ul').css('width', totalwidth);

    $('#next').click(function () {
        counter=(counter+1)%imgcount
        leftpos = `${-(counter * imgwidth)}px`;
        console.log(leftpos);
        $('#slider ul').animate({'left':leftpos},700,'easeInQuad');

    });
        $('#previous').click(function () {
        counter=(imgcount+counter-1)%imgcount
        leftpos = `${-(counter * imgwidth)}px`;
        console.log(leftpos);
        $('#slider ul').animate({'left':leftpos},700,'easeInQuad');

    });

})

