

require('./bootstrap');

import Vue from 'vue' 
import axios from 'axios'
import VueAxios from 'vue-axios' 


window.Vue = require('vue').default;

Vue.use(VueAxios, axios)

Vue.component('todo', require('./components/Todo.vue').default);


const app = new Vue({
    el: '#app',
});
  
