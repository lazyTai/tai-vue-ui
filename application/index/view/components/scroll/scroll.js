import Animate from './lib/Animate'
import Scroller from './lib/Scroller'
var renderUtil = require('./renderUtil.js').default
/*使用
* new Scroll(container,content,{
* start:function(){},
*  end:function(){},
*   move:function(){},
* })
* */
// Settings
// var contentWidth = 2000;
// var contentHeight = 2000;
// var container = document.getElementById("container");
// var content = document.getElementById("content");
// content.style.width = contentWidth + "px";
// content.style.height = contentHeight + "px";
// window.tScroll=tScroll;
export default function tScroll(container, content, opt) {
    var render = renderUtil(content)
    var scroller = new Scroller(render, {
        zooming: true, scrollingX: false
    });
    var rect = container.getBoundingClientRect();
    scroller.setPosition(rect.left + container.clientLeft, rect.top + container.clientTop);
    if ('ontouchstart' in window) {
        container.addEventListener("touchstart", function (e) {
            // Don't react if initial down happens on a form element
            if (e.touches[0] && e.touches[0].target && e.touches[0].target.tagName.match(/input|textarea|select/i)) {
                return;
            }
            scroller.doTouchStart(e.touches, e.timeStamp);
            opt.start && opt.start.call(this, scroller.getValues())
            e.preventDefault();
        }, false);

        document.addEventListener("touchmove", function (e) {
            scroller.doTouchMove(e.touches, e.timeStamp, e.scale);
            opt.move && opt.move.call(this, scroller.getValues())
        }, false);

        document.addEventListener("touchend", function (e) {
            scroller.doTouchEnd(e.timeStamp);
            opt.end && opt.end.call(this, scroller.getValues())
        }, false);

        // document.addEventListener("touchcancel", function (e) {
        //     opt.cancel && opt.cancel.call(this, e.touches[0])
        //     scroller.doTouchEnd(e.timeStamp);
        // }, false);

    } else {
        var mousedown = false;
        container.addEventListener("mousedown", function (e) {
            if (e.target.tagName.match(/input|textarea|select/i)) {
                return;
            }

            scroller.doTouchStart([{
                pageX: e.pageX,
                pageY: e.pageY
            }], e.timeStamp);
            opt.start && opt.start.call(this, scroller.getValues())
            mousedown = true;
        }, false);
        document.addEventListener("mousemove", function (e) {
            if (!mousedown) {
                return;
            }
            scroller.doTouchMove([{
                pageX: e.pageX,
                pageY: e.pageY
            }], e.timeStamp);
            opt.move && opt.move.call(this, scroller.getValues())
            mousedown = true;
        }, false);
        document.addEventListener("mouseup", function (e) {
            if (!mousedown) {
                return;
            }
            scroller.doTouchEnd(e.timeStamp);
            opt.end && opt.end.call(this, scroller.getValues())
            mousedown = false;
        }, false);
        container.addEventListener(navigator.userAgent.indexOf("Firefox") > -1 ? "DOMMouseScroll" : "mousewheel", function (e) {
            scroller.doMouseZoom(e.detail ? (e.detail * -120) : e.wheelDelta, e.timeStamp, e.pageX, e.pageY);
        }, false);
    }
    
    return scroller;
}
// export default ()=>{window.tScroll()};
// var _scroller = tScroll(container, content, {
//     start: function (values) {
//     },
//     move: function (values) {
//         // console.log('move', e)
//     },
//     end: function (values) {
//         console.log('end', values)
//     }
// })


// var scrollTopField = document.getElementById("scrollTop");
// setInterval(function () {
//     /* left
//      top
//      zoom*/
//     var values = _scroller.getValues();
//     scrollTopField.value = values.top.toFixed(2);
// }, 500);