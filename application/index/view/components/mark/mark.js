/* s使用
Mark(true);
*/
import Vue from 'vue';
import MarkConfi from './mark.vue'
var MarkConstruct = Vue.extend(MarkConfi)
var instance = null;
export function Mark(opt={}) {
    MarkConstruct.prototype.close = function () {
        const el = instance.$el;
        el.parentNode && el.parentNode.removeChild(el);
        typeof this.callback === 'function' && this.callback();
    }
    instance = new MarkConstruct({
        el: document.createElement('div')
    });
    document.body.append(instance.$el);
    instance.show = opt.show || true;

    return instance
}