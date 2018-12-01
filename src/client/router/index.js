import Vue from 'vue'
import VueRouter from 'vue-router'

import Foo from '../components/Foo.vue'
import Navbar from '../components/Navbar/Navbar.vue'
import AuthLinks from '../components/Navbar/AuthLinks.vue'
import LoginPage from '../components/Auth/LoginPage.vue'
import RegisterPage from '../components/Auth/RegisterPage.vue'

Vue.component('Navbar', Navbar);
Vue.component('AuthLinks', AuthLinks);
Vue.component('LoginPage', LoginPage);
Vue.component('RegisterPage', RegisterPage);

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
        { path: '/login', component: LoginPage },
        { path: '/register', component: RegisterPage },


        // Default page is root path
        { path: '*', redirect: '/' }
    ]
})
