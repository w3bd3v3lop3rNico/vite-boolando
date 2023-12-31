import { createApp } from 'vue';
// import './style.css'
import App from './App.vue';

/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core';

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

import { faHeart as fasFaHeart, faBagShopping, faCircleXmark } from '@fortawesome/free-solid-svg-icons';

import { faUser, faHeart as farFaHeart } from '@fortawesome/free-regular-svg-icons';

import {  faSquareInstagram, faSquareFacebook, faSquareXTwitter, faSquarePinterest, faSquareYoutube } from '@fortawesome/free-brands-svg-icons';

library.add(
    fasFaHeart,
    farFaHeart,
    faUser,
    faCircleXmark,
    faBagShopping,
    faSquareInstagram,
    faSquareFacebook,
    faSquareXTwitter,
    faSquarePinterest,
    faSquareYoutube
);
    


createApp(App).component('font-awesome-icon', FontAwesomeIcon).mount('#app')
