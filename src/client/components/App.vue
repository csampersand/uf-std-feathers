<script>
    import * as services from '../services/'
    import swal from 'sweetalert';

    import Navbar from '../components/Navbar.vue'
    import Sidebar from '../components/Sidebar.vue'

    export default {
        data() {
            return {
                user: null,
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
                        if (credentials.registered === true)
                        {
                            swal("Registered successfully!", "You are signed up.", "success", {
                                buttons: false,
                                timer: 2000
                            });
                        }
                        else {
                            swal("Logged in!", "You were logged in successfully.", "success", {
                                buttons: false,
                                timer: 2000
                            });
                        }
                        this.$router.push('/explore');
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
        },
        components: {
            Navbar,
            Sidebar,
        }
    }
</script>

<template>
    <div id="app">
        <navbar
            v-bind:user="user"
            v-on:logout="logout"></navbar>
        <!-- route outlet -->
        <!-- component matched by the route will render here -->
        <div id="wrapper" v-bind:class="{ toggled: user }">
            <sidebar>

            </sidebar>
            <router-view id="page-content-wrapper"
                v-on:login="login"
                v-bind:user="user"></router-view>
        </div>
    </div>
</template>
