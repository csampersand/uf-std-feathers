import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

import * as services from '../services'


import Login from '../components/Login.vue'
import Register from '../components/Register.vue'
import Explore from '../components/Explore.vue'
import Major from '../components/Major.vue'
import Feed from '../components/Feed.vue'
import Blog from '../components/UserAccount.vue'
import About from '../components/Home.vue'
import Profile from '../components/EditUser.vue'
import Admin from '../components/Admin.vue'

Vue.component('Login', Login);
Vue.component('Register', Register);
Vue.component('Explore', Explore);
Vue.component('Feed', Feed);
// Vue.component('Profile', Profile);
Vue.component('Blog', Blog);
Vue.component('About', About);
Vue.component('Profile', Profile);
Vue.component('Admin', Admin);

Vue.component('Major', Major);

// VUE ROUTING

// 0. If using a module system (e.g. via vue-cli), import Vue and Router
// and then call `Vue.use(Router)`.

// 1. Define route components.
// These can be imported from other files

// 3. Create the router instance and pass the `routes` option
// You can pass in additional options here, but let's
// keep it simple for now.
export default new Router({
    routes: [
        { path: '/', component: About},
        { path: '/feed', component: Feed },
        { path: '/explore', component: Explore },
        { path: '/explore/:majorId?', component: Major, props: true },
        { path: '/profile', component: Profile },
        { path: '/blog/:userId',name:"blog" ,  component: Blog, props: true },
        { path: '/admin', component: Admin},

        // Auth pages
        { path: '/login', component: Login },
        { path: '/register', component: Register },

        // Default page is root path
        { path: '*', redirect: '/' }
    ]
})
