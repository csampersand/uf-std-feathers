<script>
    import * as services from '../services/'

    export default {
        data() {
            return {
                user: null
            }
        },
        created() {
            this.auth();
        },
        methods: {
            auth() {
                services.client.authenticate()
                    .then(response => {
                        return services.client.passport.verifyJWT(response.accessToken);
                    })
                    .then(payload => {
                        return services.client.service('users').get(payload.userId);
                    })
                    .then(user => {
                        services.client.set('user', user);
                        console.log('Authenticated', user);
                        this.user = services.client.get('user');
                    })
                    .catch(error => {
                        console.error('Error authenticating!', error);
                        this.$router.push('/login');
                    });
            },
            onLoginAttempt(credentials) {
                services.client.authenticate({
                    strategy: 'local',
                    email: credentials.email,
                    password: credentials.password
                })
                    .then(response => {
                        return services.client.passport.verifyJWT(response.accessToken);
                    })
                    .then(payload => {
                        return services.client.service('users').get(payload.userId);
                    })
                    .then(user => {
                        services.client.set('user', user);
                        console.log('Authenticated', user);
                        this.user = services.client.get('user');
                    })
                    .catch(error => {
                        console.error('Error authenticating!', error);
                    });
            }
        }
    }
</script>

<template>
    <div id="app" class="toggled">
        <navbar v-bind:user="user" ></navbar>
        <!-- route outlet -->
        <!-- component matched by the route will render here -->
        <div id="wrapper" class="toggled">
            <sidebar v-if="user"></sidebar>
            <router-view v-on:login-attempt="onLoginAttempt" id="page-content-wrapper" class="container" tag="div"></router-view>
        </div>
    </div>
</template>
