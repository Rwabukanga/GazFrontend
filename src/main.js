import '@mdi/font/css/materialdesignicons.css';
import { createApp } from 'vue'
import App from './App.vue'
import router from './router';
import VueSweetalert2 from 'vue-sweetalert2';


import 'sweetalert2/dist/sweetalert2.min.css';

// Vuetify
import 'vuetify/styles'; // Import Vuetify styles

import { createVuetify } from 'vuetify';
import * as components from 'vuetify/components';
import * as directives from 'vuetify/directives';




/*const vuetify = createVuetify({
    components,
    directives,
});*/

const vuetify = createVuetify({
    components,
    directives,
    theme: {
        defaultTheme: 'light',
        themes: {
            light: {
                colors: {
                    primary: '#1976D2',
                    secondary: '#424242',
                    accent: '#82B1FF',
                },
            },
        },
    },
    icons: {
        iconfont: 'mdi', // Default - already set to 'mdi'
    },
});


createApp(App).use(router).use(vuetify).use(VueSweetalert2).mount('#app')
