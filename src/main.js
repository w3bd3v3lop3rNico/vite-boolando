import { createApp } from 'vue';
// import './style.css'
import App from './App.vue';

/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core';

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

// import {  } from '@fortawesome/free-solid-svg-icons'

// library.add()

createApp(App).component('font-awsome-icon', FontAwesomeIcon).mount('#app')
