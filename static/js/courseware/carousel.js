$(function() {
    (function() {
        var $frame = $('#carousel');
        var $wrap = $frame.parent();
        var leftBtn = $wrap.find('.carousel-left-btn');
        var rightBtn = $wrap.find('.carousel-right-btn');

        $frame.sly({
            horizontal: true,
            itemNav: 'forceCentered',
            smart: true,
            activateMiddle: true,
            mouseDragging: true,
            touchDragging: true,
            releaseSwing: true,
            startAt: 0,
            scrollBy: 1,
            speed: 350,
            cycleBy: 'items',
            pauseOnHover: true,
            prev: leftBtn,
            next: rightBtn
        }, {
            active: function(ev, idx) {
                var size = this.items.length;
                if (idx === 0) {
                    leftBtn.hide();
                } else if (idx === size-1) {
                    rightBtn.hide();
                } else {
                    leftBtn.show();
                    rightBtn.show();
                }
            }
        });
    })();
});  
