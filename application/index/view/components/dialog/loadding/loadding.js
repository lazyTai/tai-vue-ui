/* 使用
Loading({mes:'ad',time:100})
*/
import Vue from 'vue'
import LoadingOption from './loadding.vue'
var LoadingConstructor = Vue.extend(LoadingOption)

export function Loadding(opt = {}) {
    LoadingConstructor.prototype.close = function () {
        const el = instance.$el;
        this.$mark&&this.$mark.closeMark();
        el.parentNode && el.parentNode.removeChild(el);
        typeof this.callback === 'function' && this.callback();
    }
    var instance = new LoadingConstructor({
        el: document.createElement('div')
    });
    instance.callback = opt.callback
    instance.mes = opt.mes;
    document.body.appendChild(instance.$el);
    setTimeout(() => {
        instance.close();
    }, opt.time || 1000)
    return instance.$el;

}