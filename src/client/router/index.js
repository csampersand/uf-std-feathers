import Vue from 'vue'
import VueRouter from 'vue-router'

import Foo from '../components/Foo.vue'
import Navbar from '../components/Navbar.vue'
import Login from '../components/Login.vue'
import Register from '../components/Register.vue'

Vue.component('Navbar', Navbar);
Vue.component('Login', Login);
Vue.component('Register', Register);

// VUE ROUTING

// 0. If using a module system (e.g. via vue-cli), import Vue and VueRouter
// and then call `Vue.use(VueRouter)`.
Vue.use(VueRouter)

// 1. Define route components.
// These can be imported from other files
const Bar = { template: '<div>bar</div>' }

// 3. Create the router instance and pass the `routes` option
// You can pass in additional options here, but let's
// keep it simple for now.
export default new VueRouter({
    routes: [
        { path: '/', component: Foo},
        { path: '/foo', component: Foo },
        { path: '/bar', component: Bar },

        // Auth pages
        { path: '/login', component: Login },
        { path: '/register', component: Register },


        // Default page is root path
        { path: '*', redirect: '/' }
    ]
})
