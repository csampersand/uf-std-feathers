import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

import * as services from '../services'


import Login from '../components/Login.vue'
import Register from '../components/Register.vue'
import Feed from '../components/Feed.vue'

Vue.component('Login', Login);
Vue.component('Register', Register);
Vue.component('Feed', Feed);

// VUE ROUTING

// 0. If using a module system (e.g. via vue-cli), import Vue and Router
// and then call `Vue.use(Router)`.

// 1. Define route components.
// These can be imported from other files
const About = { template: '<h1>About UF-STD</h1>'}
const Explore = { template: '<h1>Explore</h1>' }
const Profile = { template: '<h1>Profile</h1>' }

// 3. Create the router instance and pass the `routes` option
// You can pass in additional options here, but let's
// keep it simple for now.
export default new Router({
    routes: [
        { path: '/', component: About},
        { path: '/explore', component: Explore },
        { path: '/feed', component: Feed },
        { path: '/profile', component: Profile },

        // Auth pages
        { path: '/login', component: Login },
        { path: '/register', component: Register },

        // Default page is root path
        { path: '*', redirect: '/' }
    ]
})
