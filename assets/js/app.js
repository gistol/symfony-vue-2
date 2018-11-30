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

const app = new Vue ({
    el: '#app',
    data: {
        message_app1: 'Message example 1',
        message_app2: 'Bound Title: You loaded this page on ' + new Date().toLocaleString(),
        todos: [
            { text: 'Learn JavaScript' },
            { text: 'Learn Vue' },
            { text: 'Build something awesome' }
        ],
        message_app4: 'This is my Example 4 text to reverse',
        message_app5: 'Hello vue!'
    },
    methods: {
        reverseMessage: function () {
            this.message_app4 = this.message_app4.split('').reverse().join('')
        }
    },
    components: { ToDoList }
});
