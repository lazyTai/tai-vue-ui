import { Layout } from './layout';
import { HeaderBack } from './header/index.js';
import { Icon } from './icon/index.js';
import { GridGroup, GridItem } from './grid/index.js';
import { Button, ButtonGroup, IconButton } from './button/index.js';
import { Toast } from './dialog/index'
import { InfiniteScroll, InfiniteScroll2 } from './infiniteScroll/index'
import { Mark } from './mark/mark.js'
import { Pick, PickItem } from './pick/pick.js'
import { DatePicker } from './datePicker/index.js'
import { DateTimePicker } from './datetimePicker/index'
import { Swiper } from './swiper/index'
import { Loading } from './loading/index'
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
    Vue.component(DateTimePicker.name, DateTimePicker);
    Vue.component(Swiper.name, Swiper);
    Vue.component(InfiniteScroll2.name, InfiniteScroll2);
    Vue.component(Loading.name, Loading);

    Vue.prototype.$toast = Toast;
    Vue.prototype.$mark = Mark;

};

if (typeof window !== 'undefined' && window.Vue) {
    install(window.Vue);
}

export default {
    install
};