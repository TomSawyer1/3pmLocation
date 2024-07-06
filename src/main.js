import { createApp } from 'vue';
import { IonicVue } from '@ionic/vue';
import App from './App.vue';
import router from './router';
import pinia from './stores'; // Importer Pinia depuis stores/index.js

// Importer les styles de base d'Ionic
import '@ionic/vue/css/core.css';
import '@ionic/vue/css/normalize.css';
import '@ionic/vue/css/structure.css';
import '@ionic/vue/css/typography.css';
import '@ionic/vue/css/padding.css';
import '@ionic/vue/css/float-elements.css';
import '@ionic/vue/css/text-alignment.css';
import '@ionic/vue/css/text-transformation.css';
import '@ionic/vue/css/flex-utils.css';
import '@ionic/vue/css/display.css';

// Optionnellement, importer les thèmes d'Ionic
import '@ionic/vue/css/ionic.bundle.css';

const app = createApp(App)
  .use(IonicVue)
  .use(router)
  .use(pinia);

router.isReady().then(() => {
  app.mount('#app');
});
