import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import chotacss from 'chota'

const app = createApp(App);

app.use(createPinia());
app.use(router);

app.component(chotacss)

app.mount('#app');
