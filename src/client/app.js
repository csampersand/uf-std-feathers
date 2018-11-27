import Vue from 'vue'
import VueRouter from 'vue-router'

const feathers = require('@feathersjs/feathers');
const rest = require('@feathersjs/rest-client');
const auth = require('@feathersjs/authentication-client');

const superagent = require('superagent');
const localStorage = require('localstorage-memory');

const feathersClient = feathers();

feathersClient.configure(rest('http://localhost:3030').superagent(superagent))
    .configure(auth({ storage: localStorage }));

feathersClient.authenticate({
    strategy: 'local',
    email: 'chris.scott.anders@gmail.com',
    password: 'secret'
})
    .then(response => {
        console.log('Authenticated!', response);
        return feathersClient.passport.verifyJWT(response.accessToken);
    })
    .then(payload => {
        console.log('JWT Payload', payload);
        return feathersClient.service('users').get(payload.userId);
    })
    .then(user => {
        feathersClient.set('user', user);
        console.log('User', feathersClient.get('user'));
    })
    .catch(function (error) {
        console.error('Error authenticating!', error);
    });



window.onload = () => {
    // VUE ROUTING

    // 0. If using a module system (e.g. via vue-cli), import Vue and VueRouter
    // and then call `Vue.use(VueRouter)`.
    Vue.use(VueRouter)

    // 1. Define route components.
    // These can be imported from other files
    const Foo = { template: '<div>foo</div>' }
    const Bar = { template: '<div>bar</div>' }

    // 2. Define some routes
    // Each route should map to a component. The "component" can
    // either be an actual component constructor created via
    // `Vue.extend()`, or just a component options object.
    // We'll talk about nested routes later.
    const routes = [
        { path: '/foo', component: Foo },
        { path: '/bar', component: Bar }
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
