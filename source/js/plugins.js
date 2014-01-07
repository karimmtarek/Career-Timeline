// Avoid `console` errors in browsers that lack a console.
if (!(window.console && console.log)) {
    (function() {
        var noop = function() {};
        var methods = ['assert', 'clear', 'count', 'debug', 'dir', 'dirxml', 'error', 'exception', 'group', 'groupCollapsed', 'groupEnd', 'info', 'log', 'markTimeline', 'profile', 'profileEnd', 'markTimeline', 'table', 'time', 'timeEnd', 'timeStamp', 'trace', 'warn'];
        var length = methods.length;
        var console = window.console = {};
        while (length--) {
            console[methods[length]] = noop;
        }
    }());
}

//  Pop Easy | jQuery Modal Plugin
//  Version 1.0
//  Created 2013 by Thomas Grauer
(function($){

    $.fn.modal= function(options){

        options = $.extend({
            trigger: '.modalLink',
            olay: 'div.overlay',
            modals: 'div.modal',
            animationEffect: 'fadeIn',
            animationSpeed: 400,
            moveModalSpeed: 'slow',
            background: '000',
            opacity: 0.8,
            openOnLoad: false,
            docClose: true,
            closeByEscape: true,
            moveOnScroll: true,
            resizeWindow: true,
            video:'',
            videoClass:'video',
            close:'.closeBtn'

        },options);

        var olay = $(options.olay);
        var modals = $(options.modals);
        var currentModal;
        var isopen=false;

        if (options.animationEffect==='fadein'){options.animationEffect = 'fadeIn';}
        if (options.animationEffect==='slidedown'){options.animationEffect = 'slideDown';}

        olay.css({opacity : 0});

        if(options.openOnLoad) {
            openModal();
        }else{
            olay.hide();
            modals.hide();
        }

        $(options.trigger).bind('click', function(e){
            e.preventDefault();

            if ($('.modalLink').length >1) {
                getModal = $(this).attr('href');
                currentModal = $(getModal);
            }else{
                currentModal = $('.modal');
            }
            openModal();
        });

        function openModal(){
            $('.' + options.videoClass).attr('src',options.video);
            modals.hide();
            currentModal.css({
                // top:$(window).height() /2 - currentModal.outerHeight() /2 + $(window).scrollTop(),
                // left:$(window).width() /2 - currentModal.outerWidth() /2 + $(window).scrollLeft()
                top:$(window).height() /2,
                'margin-top':-(currentModal.outerHeight() /2),
                left:$(window).width() /2,
                'margin-left':-(currentModal.outerWidth() /2)
            });

            if(isopen===false){
                olay.css({opacity : options.opacity, backgroundColor: '#'+options.background});
                olay[options.animationEffect](options.animationSpeed);
                currentModal.delay(options.animationSpeed)[options.animationEffect](options.animationSpeed);
            }else{
                currentModal.show();
            }

            isopen=true;
        }

        function moveModal(){
            modals
            .stop(true)
            .animate({
            // top:$(window).height() /2 - modals.outerHeight() /2 + $(window).scrollTop(),
            // left:$(window).width() /2 - modals.outerWidth() /2 + $(window).scrollLeft()
                top:$(window).height() /2,
                'margin-top':-(currentModal.outerHeight() /2),
                left:$(window).width() /2,
                'margin-left':-(currentModal.outerWidth() /2)
            },options.moveModalSpeed);
        }

        function closeModal(){
            $('.' + options.videoClass).attr('src','');
            isopen=false;
            modals.fadeOut(100, function(){
                if (options.animationEffect === 'slideDown') {
                    olay.slideUp();
                }else if (options.animationEffect === 'fadeIn') {
                    olay.fadeOut();
                }
            });
            return false;
        }

        if(options.docClose){
            olay.bind('click', closeModal);
        }

        $(options.close).bind('click', closeModal);

        if (options.closeByEscape) {
            $(window).bind('keyup', function(e){
                if(e.which === 27){
                    closeModal();
                }
            });
        }

        if (options.resizeWindow) {
            $(window).bind('resize', moveModal);
        }else{
            return false;
        }

        if (options.moveOnScroll) {
            $(window).bind('scroll', moveModal);
        }else{
            return false;
        }
    };
})(jQuery);