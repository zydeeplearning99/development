import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { Button, Select, Header, Main, Footer, Container, Menu, Submenu, MenuItem, Icon, Row, Col, Link, Carousel, CarouselItem, Input, Popover, Tabs, TabPane, Message, Breadcrumb, BreadcrumbItem, Dialog,MessageBox } from 'element-ui';

Vue.config.productionTip = false
Vue.use(Button)
Vue.use(Select)
Vue.use(Header)
Vue.use(Main)
Vue.use(Footer)
Vue.use(Container)
Vue.use(Menu)
Vue.use(Submenu)
Vue.use(MenuItem)
Vue.use(Icon)
Vue.use(Row)
Vue.use(Col)
Vue.use(Link)
Vue.use(Carousel)
Vue.use(CarouselItem)
Vue.use(Popover)
Vue.use(Tabs)
Vue.use(TabPane)
Vue.use(Input)
Vue.use(Breadcrumb)
Vue.use(BreadcrumbItem)
Vue.use(Dialog)
Vue.prototype.$message = Message;
Vue.prototype.$alert = MessageBox.alert

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

