$(function() {

    function fix_header(){
        header_width = Math.round($('header').width());
        name_width = Math.round($('header h1').outerWidth());
        bio_width = (header_width - name_width) - 20;
        bio = $('header p');
        bio.css('width', bio_width);
    }
    fix_header();


    function fix_milestone_height(){
        $('#career_timeline').find('li').each(
            function(){
                div_title = $(this).find('.title');
                div_from_to = $(this).find('.from_to');
                getHeight = Math.round(div_title.height());
                div_title.css('height', getHeight)
                div_from_to.css('height', getHeight)
                // console.log(getHeight);
            }
        )
    }
    // initiate fix_milestone_height
    fix_milestone_height();

    function fix_timeline_height() {
        point_A = Math.round($('.timeline > li:first').offset().top);
        point_B = Math.round($('.timeline > li:first .arrow').offset().top);
        point_C = Math.round($('.timeline > li:last').offset().top);
        vline_height = (point_C - point_A) + 5;
        $('.vline').css({height: vline_height, top: point_B});
        // console.log(point_B);
        // console.log(point_C);
    }
    // initiate fix_timeline_height
    fix_timeline_height();

    // on windows resize
    $(window).resize(function() {
        fix_header();
        fix_milestone_height();
        fix_timeline_height();
    });

    //initiate pop easy modal + settings
    $('.modalLink').modal({
        trigger: '.modalLink',          // id or class of link or button to trigger modal
        olay:'div.overlay',             // id or class of overlay
        modals:'div.modal',             // id or class of modal
        animationEffect: 'slideDown',   // overlay effect | slideDown or fadeIn | default=fadeIn
        animationSpeed: 400,            // speed of overlay in milliseconds | default=400
        moveModalSpeed: 'slow',         // speed of modal movement when window is resized | slow or fast | default=false
        background: 'e74c3c',           // hexidecimal color code - DONT USE #
        opacity: 0.9,                   // opacity of modal |  0 - 1 | default = 0.8
        openOnLoad: false,              // open modal on page load | true or false | default=false
        docClose: true,                 // click document to close | true or false | default=true
        closeByEscape: true,            // close modal by escape key | true or false | default=true
        moveOnScroll: false,             // move modal when window is scrolled | true or false | default=false
        resizeWindow: true,             // move modal when window is resized | true or false | default=false
        close:'.closeBtn'               // id or class of close button
    });

// end of doc ready
});
