import Vue from 'vue'
import VueRouter from 'vue-router'

import Foo from './components/Foo.vue'
import Navbar from './components/Navbar/Navbar.vue'
import AuthLinks from './components/Navbar/AuthLinks.vue'
import LoginPage from './components/Auth/LoginPage.vue'
import RegisterPage from './components/Auth/RegisterPage.vue'

Vue.component('Navbar', Navbar);
Vue.component('AuthLinks', AuthLinks);
Vue.component('LoginPage', LoginPage);
Vue.component('RegisterPage', RegisterPage);

window.onload = () => {
    // VUE ROUTING

    // 0. If using a module system (e.g. via vue-cli), import Vue and VueRouter
    // and then call `Vue.use(VueRouter)`.
    Vue.use(VueRouter)

    // 1. Define route components.
    // These can be imported from other files
    const Bar = { template: '<div>bar</div>' }

    // 2. Define some routes
    // Each route should map to a component. The "component" can
    // either be an actual component constructor created via
    // `Vue.extend()`, or just a component options object.
    // We'll talk about nested routes later.
    const routes = [
        { path: '/', component: Foo},
        { path: '/foo', component: Foo },
        { path: '/bar', component: Bar },

        // Auth pages
        { path: '/login', component: LoginPage },
        { path: '/register', component: RegisterPage },


        // Default page is root path
        { path: '*', redirect: '/' }
    ]

    // 3. Create the router instance and pass the `routes` option
    // You can pass in additional options here, but let's
    // keep it simple for now.
    const router = new VueRouter({
        routes // short for `routes: routes`
    })

    // 4. Create and mount the root instance.
    // Make sure to inject the router with the router option to make the
    // whole app router-aware.
    const app = new Vue({
        router
    }).$mount('#app')

    // Now the app has started!
}
