/* 使用
Toast({mes:'ad',time:100})
*/
import Vue from 'vue'
import ToastOption from './toast.vue'
var ToastConstructor = Vue.extend(ToastOption)

export function Toast(opt = {}){
    ToastConstructor.prototype.close = function () {
        const el = instance.$el;
        el.parentNode && el.parentNode.removeChild(el);
        typeof this.callback === 'function' && this.callback();
    }
    var instance = new ToastConstructor({
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