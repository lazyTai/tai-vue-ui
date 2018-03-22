import { Layout } from './layout';
import { HeaderBack } from './header/index.js';
import { Icon } from './icon/index.js';
import { GridGroup, GridItem } from './grid/index.js';
import { Button, ButtonGroup, IconButton } from './button/index.js';

window.document.addEventListener('touchstart', function (event) {
    /* Do Nothing */
}, false);

const install = function (Vue) {
    Vue.component(Layout.name, Layout);
    Vue.component(HeaderBack.name, HeaderBack);
    Vue.component(Icon.name, Icon);
    Vue.component(GridGroup.name, GridGroup);
    Vue.component(GridItem.name, GridItem);
    Vue.component(Button.name, Button);
    Vue.component(ButtonGroup.name, ButtonGroup);
    Vue.component(IconButton.name, IconButton);
};

if (typeof window !== 'undefined' && window.Vue) {
    install(window.Vue);
}

export default {
    install
};