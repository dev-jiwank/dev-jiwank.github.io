import { createApp } from 'vue'
import ViewUIPlus from 'view-ui-plus'
import App from './App.vue'
import router from './router'
import store from './store'
import './styles/index.less'
// import './mock'
import locale from 'view-ui-plus/dist/locale/en-US';

import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

const app = createApp(App)

app.use(store)
  .use(router)
  .use(ViewUIPlus)
  .use({locale})
  .use(ElementPlus)
  .mount('#app')
