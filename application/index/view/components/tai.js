import {Layout} from './layout';

window.document.addEventListener('touchstart', function (event) {
    /* Do Nothing */
}, false);

const install = function (Vue) {
    Vue.component(Layout.name, Layout);
};

if (typeof window !== 'undefined' && window.Vue) {
    install(window.Vue);
}

export default {
    install
};