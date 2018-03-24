import { Layout } from './layout';
import { HeaderBack } from './header/index.js';
import { Icon } from './icon/index.js';
import { GridGroup, GridItem } from './grid/index.js';
import { Button, ButtonGroup, IconButton } from './button/index.js';
import { Toast } from './dialog/index'
import { InfiniteScroll } from './infiniteScroll/index'
import { Mark } from './mark/mark.js'
import { Pick, PickItem } from './pick/pick.js'
import { DatePicker } from './datePicker/index.js'
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
    Vue.component(InfiniteScroll.name, InfiniteScroll);
    Vue.component(Pick.name, Pick);
    Vue.component(PickItem.name, PickItem);
    Vue.component(DatePicker.name, DatePicker);
    Vue.prototype.$toast = Toast;
    Vue.prototype.$mark = Mark;

};

if (typeof window !== 'undefined' && window.Vue) {
    install(window.Vue);
}

export default {
    install
};