import { createApp } from 'vue';
// import './style.css'
import App from './App.vue';

/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core';

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

import { 
    faHeart,
    faUser,
    faBagShopping,
    // fabSquareInstagram,
    // faSquareFacebook,
    // faSquareXTwitter,
    // faSquarePinterst,
    // faSquareYoutube
} from '@fortawesome/free-solid-svg-icons'

library.add(
    faHeart,
    faUser,
    faBagShopping,
    // fabSquareInstagram,
    // fabSquareFacebook,
    // faSquareXTwitter,
    // faSquarePinterst,
    // faSquareYoutube
)
    


createApp(App).component('font-awesome-icon', FontAwesomeIcon).mount('#app')
