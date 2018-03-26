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
function tScroll(container, content, opt) {
    var self = this;
    var scrollingX, scrollingY;
    if (opt.scrollingX === undefined) {
        scrollingX = false;
    } else {
        scrollingX = opt.scrollingX;
    }
    if (opt.scrollingY === undefined) {
        scrollingY = true;
    } else {
        scrollingY = opt.scrollingX;
    }

    var render = renderUtil(content)
    this.scroller = new Scroller(render, {
        zooming: true, scrollingX, scrollingY
    });
    this.scroller.container = container
    this.scroller.content = content
    var rect = container.getBoundingClientRect();
    self.scroller.setPosition(rect.left + container.clientLeft, rect.top + container.clientTop);
    if ('ontouchstart' in window) {
        this.touchstart = function (e) {
            // Don't react if initial down happens on a form element
            if (e.touches[0] && e.touches[0].target && e.touches[0].target.tagName.match(/input|textarea|select/i)) {
                return;
            }
            self.scroller.doTouchStart(e.touches, e.timeStamp);
            opt.start && opt.start.call(this, self.scroller.getValues())
            e.preventDefault();
        }
        container.addEventListener("touchstart", this.touchstart, false);

        this.touchmove = function (e) {
            self.scroller.doTouchMove(e.touches, e.timeStamp, e.scale);
            opt.move && opt.move.call(this, self.scroller.getValues())
        }
        document.addEventListener("touchmove", this.touchmove, false);

        this.touchend = function (e) {
            self.scroller.doTouchEnd(e.timeStamp);
            opt.end && opt.end.call(this, self.scroller.getValues())
        }
        document.addEventListener("touchend", this.touchend, false);

        // document.addEventListener("touchcancel", function (e) {
        //     opt.cancel && opt.cancel.call(this, e.touches[0])
        //     scroller.doTouchEnd(e.timeStamp);
        // }, false);

    } else {
        var mousedown = false;
        this.mousedown = function (e) {
            if (e.target.tagName.match(/input|textarea|select/i)) {
                return;
            }

            self.scroller.doTouchStart([{
                pageX: e.pageX,
                pageY: e.pageY
            }], e.timeStamp);
            opt.start && opt.start.call(this, self.scroller.getValues())
            mousedown = true;
        }
        container.addEventListener("mousedown", this.mousedown, false);
        this.mousemove = function (e) {
            if (!mousedown) {
                return;
            }
            self.scroller.doTouchMove([{
                pageX: e.pageX,
                pageY: e.pageY
            }], e.timeStamp);
            opt.move && opt.move.call(this, self.scroller.getValues())
            mousedown = true;
        }
        document.addEventListener("mousemove", this.mousemove, false);
        this.mouseup = function (e) {
            if (!mousedown) {
                return;
            }
            self.scroller.doTouchEnd(e.timeStamp);
            opt.end && opt.end.call(this, self.scroller.getValues())
            mousedown = false;
        }
        document.addEventListener("mouseup", this.mouseup, false);

        container.addEventListener(navigator.userAgent.indexOf("Firefox") > -1 ? "DOMMouseScroll" : "mousewheel", function (e) {
            self.scroller.doMouseZoom(e.detail ? (e.detail * -120) : e.wheelDelta, e.timeStamp, e.pageX, e.pageY);
        }, false);
    }

    return self.scroller;
}
export default tScroll;
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