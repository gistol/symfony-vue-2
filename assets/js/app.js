require('../css/app.css');

// Including Materialize
require('materialize-css/dist/css/materialize.css');
import 'materialize-css/dist/js/materialize.js';

// Including JQuery
const $ = require('jquery');

// Including Lodash (used for orderby function)
var _ = require('lodash');

import Vue from 'vue';
import Ejemplos from './helpers/encoreExample.js';
import ToDoList from './components/ToDoList.vue'
import axios from 'axios';
window.events = new Vue();
window.axios = axios;

const app1 = new Vue({
  el: '#app-1',
  data: {
    message: 'Example 1'
  }
});

const app2 = new Vue({
  el: '#app-2',
  data: {
    message: 'Bound Title: You loaded this page on ' + new Date().toLocaleString()
  }
});

const app3 = new Vue({
  el: '#app-3',
  data: {
    todos: [
      { text: 'Learn JavaScript' },
      { text: 'Learn Vue' },
      { text: 'Build something awesome' }
    ]
  }
});

const app4 = new Vue({
  el: '#app-4',
  data: {
    message: 'This is my Example 4 text to reverse'
  },
  methods: {
    reverseMessage: function () {
      this.message = this.message.split('').reverse().join('')
    }
  }
});

const app5 = new Vue({
  el: '#app-5',
  data: {
    message: 'Hello Vue!'
  }
});

const app6 = new Vue({
  el: '#app-6',
  components: { ToDoList }
});
