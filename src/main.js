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
import { Bar } from 'vue-chartjs'

// Vuetify
// import 'vuetify/styles'
// import { createVuetify } from 'vuetify'
// import * as components from 'vuetify/components'
// import * as directives from 'vuetify/directives'

// const vuetify = createVuetify({
//   components,
//   directives,
// })

const app = createApp(App)

app.use(store)
  .use(router)
  .use(ViewUIPlus)
  .use({locale})
  .use(ElementPlus)
  .use(Bar)
  // .use(vuetify)
  .mount('#app')
