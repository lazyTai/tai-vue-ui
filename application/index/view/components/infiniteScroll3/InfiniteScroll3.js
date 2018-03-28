/* 
使用
import ScrollView from '../../src'
Vue.use(ScrollView) 

 <t-infinite-scroll3>
            <template scope="scrollviewdata">
                {{scrollviewdata}}
                <div v-for="n in 100">
                    {{n}}
                </div>
            </template>
        </t-infinite-scroll3>
*/
import _ from 'underscore';
function getEvent(e) {
    if (e.touches > 0) {
        return e.touches[0]
    }
    if (e.changedTouches) {
        return e.changedTouches[0]
    }
    return e
}
var ScrollView = {
    name: 't-infinite-scroll3',
    render(h) {
        return h(this.tag,
            {
                'class': {
                    container: true,
                    // 't-infinite-scroll3': true
                },
                style: {
                    width: '100%',
                    height: '100%',
                    overflow: 'hidden',
                    userSelect: 'none',
                    boxSizing: 'border-box'
                },
                domProps: {
                },
                ref: 'container'
            },
            [
                h('div', {
                    'class': {
                        content: true
                    },
                    style: {
                        width: '100%',
                        height: '100%',
                        transform: `translate3d(0,${this.$data.scrollClientY}px,0)`,
                    },
                    domProps: {
                    },
                    ref: 'content'
                }, [this.$scopedSlots.default(this.$data)])
            ])
    },
    data() {
        return {
            isOverTop: false,
            isOverBottom: false,
            isOverToping: false,
            isOverBottoming: false,
            currentClientY: 0,
            scrollClientY: 0,
        }
    },
    props: {
        tag: {
            type: String,
            default: () => 'div'
        }
    },
    watch: {
        // top() {
        //     console.log("watch:top", this.$props.top)
        //     this.$data.animateValue.top = this.$props.top
        // },
        // scrollClientY() {
        //     // console.log('change scrollClientY', this.$data.scrollClientY)
        //     // this.$data.animateValue.top = this.$data.scrollClientY
        // }
    },
    created() {
    },
    mounted() {
        this.dom_container = this.$refs['container']
        this.dom_content = this.$refs['content']
        /* 初始化滚动事件 */
        this.dom_container.addEventListener('mousedown', this.onmousedown)
        // this.dom_container.addEventListener('mousemove', _.throttle(this.onmousemove, 300))
        this.dom_container.addEventListener('mousemove', (this.onmousemove))
        this.dom_container.addEventListener('mouseup', this.onmouseup)
        this.dom_container.addEventListener('mouseleave', this.onmouseup)

        this.dom_container.addEventListener('touchstart', this.onmousedown)
        // this.dom_container.addEventListener('mousemove', _.throttle(this.onmousemove, 300))
        this.dom_container.addEventListener('touchmove', (this.onmousemove))
        this.dom_container.addEventListener('touchend', this.onmouseup)
        this.dom_container.addEventListener('touchleave', this.onmouseup)



        /* 最开始初始化动画 */
        function animate(time) {
            requestAnimationFrame(animate);
            TWEEN.update(time);
        }
        requestAnimationFrame(animate);

    },
    methods: {
        onmousedown(e) {
            this.isStart = true;
            this.$data.currentClientY = getEvent(e).clientY;
            // console.log("onmousedown", e)
        },
        onmousemove(e) {
            // console.log("getEvent(e).clientY ", getEvent(e).clientY)
            if (this.isStart) {
                this.$data.scrollClientY += getEvent(e).clientY - this.$data.currentClientY;
                // console.log("movetop", this.$data.scrollClientY)
                this.$data.currentClientY = getEvent(e).clientY;
                // console.log('move')
                // console.log("this.dom_content.offsetTop", this.dom_content.offsetTop)
                // console.log("this.dom_content.offsetHeight", this.dom_content.offsetHeight)
                // console.log("this.dom_content.scrollHeight", this.dom_content.scrollHeight)
                /* 判断下拉到上头了 */
                if (this.$data.scrollClientY > 0) {
                    /* 撤回去，使用动画效果 */
                    this.$data.isOverToping = true
                }

                /* 判断到底了，回撤回去 */
                if (this.dom_content.offsetTop + this.dom_content.offsetHeight + Math.abs(this.scrollClientY) > this.dom_content.scrollHeight) {
                    this.$data.isOverBottoming = true
                }
            }
        },
        onmouseup(e) {
            this.isStart = false;
            this.$data.currentClientY = getEvent(e).clientY;
            // - this.dom_container.offsetTop;
            /* 判断下拉到上头了 */
            if (this.$data.scrollClientY >= 0) {
                /* 撤回去，使用动画效果 */
                // console.log("到头了")
                this.$data.isOverTop = true;
                this.$data.isOverToping = false
                this.setToTop()
            }

            /* 判断到底了，回撤回去 */
            // debugger
            if (this.dom_content.offsetTop + this.dom_content.offsetHeight + Math.abs(this.scrollClientY) > this.dom_content.scrollHeight) {
                // console.log("到底了")
                this.$data.isOverBottom = true
                this.$data.isOverBottoming = false
                this.setToBottom()
            }

        },
        setToBottom() {
            var self = this;
            var _scrollClientY = this.dom_content.scrollHeight - this.dom_content.offsetHeight
            var coords = { x: this.$data.scrollClientY } // Start at (0, 0)
            var tween = new TWEEN.Tween(coords) // Create a new tween that modifies 'coords'.
                .to({ x: -_scrollClientY }, 500) // Move to (300, 200) in 1 second.
                .easing(TWEEN.Easing.Quadratic.Out) // Use an easing function to make the animation smooth.
                .onUpdate(function () { // Called after tween.js updates 'coords'.
                    // Move 'box' to the position described by 'coords' with a CSS translation.
                    // box.style.setProperty('transform', 'translate(' + coords.x + 'px, ' + coords.y + 'px)');
                    // console.log('update', coords)
                    // this.$data.scrollClientY=
                    self.$data.scrollClientY = coords.x
                })
                .onComplete(function () {
                    self.$data.scrollClientY = -_scrollClientY
                    // this.$data.animateValue.top = this.$data.scrollClientY
                    self.$data.isOverBottom = false
                })
                .start(); // Start the tween immediately.
        },
        setToTop() {
            var self = this;
            var coords = { x: self.$data.scrollClientY }
            // console.log("move", this.$data.scrollClientY)
            var tween = new TWEEN.Tween(coords) // Create a new tween that modifies 'coords'.
                .to({ x: 0 }, 500) // Move to (300, 200) in 1 second.
                .easing(TWEEN.Easing.Quadratic.Out) // Use an easing function to make the animation smooth.
                .onUpdate(function () { // Called after tween.js updates 'coords'.
                    self.$data.scrollClientY = coords.x
                })
                .onComplete(function () {
                    self.$data.scrollClientY = 0;
                    // this.$data.animateValue.top = this.$data.scrollClientY
                    self.$data.isOverTop = false
                })
                .start(); // Start the tween immediately.
        }
    },
    install(Vue, options) {
        Vue.component(ScrollView.name, ScrollView);
    }
};

export default ScrollView