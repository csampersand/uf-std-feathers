<script>
    import * as services from '../services/'
    import swal from 'sweetalert';

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
            login(credentials) {
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
                        swal("Logged in!", "You were logged in successfully.", "success", {
                            buttons: false,
                            timer: 2000
                        });
                        this.$router.push('/');
                    })
                    .catch(error => {
                        swal("Uh oh!", "We couldn't log you in. Please try again.", "error", {
                            buttons: false,
                            timer: 2000
                        });
                        console.error('Error authenticating!', error);
                    });
            },
            logout() {
                this.user = null,
                services.client.logout()
                swal("Logged out!", "You were logged out successfully.", "success", {
                    buttons: false,
                    timer: 2000
                });
                this.$router.push('/login');
            }
        }
    }
</script>

<template>
    <div id="app" class="toggled">
        <navbar
            v-bind:user="user"
            v-on:logout="logout"></navbar>
        <!-- route outlet -->
        <!-- component matched by the route will render here -->
        <div id="wrapper" class="toggled">
            <sidebar v-if="user"></sidebar>
            <router-view id="page-content-wrapper" class="container" tag="div"
                v-on:login="login"></router-view>
        </div>
    </div>
</template>
