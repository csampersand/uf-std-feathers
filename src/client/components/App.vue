<script>
    import * as services from '../services/'

    // Style components
    import swal from 'sweetalert'
    import bootstrap from 'bootstrap'

    import Navbar from '../components/Navbar.vue'
    import Sidebar from '../components/Sidebar.vue'

    export default {
        data() {
            return {
                user: null
            }
        },
        created() {
            this.auth();
        },
        updated() {
            this.banCheck();
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
            logout(banned) {
                this.user = null,
                services.client.logout()
                swal("Logged out!", "You were logged out successfully.", "success", {
                    buttons: false,
                    timer: 2000
                });
                this.$router.push('/login');
            },
            banCheck() {
                if (this.user != null && this.user.isBanned) {
                    this.user = null,
                    services.client.logout()
                    swal("Uh oh!", "Looks like you have been banned. You are now logged out.", "error", {
                        buttons: false,
                        timer: 2000
                    });
                    this.$router.push('/login');
                }
            },
            follow(userId){
                if(userId){
                    this.user.following.push(userId);
                    services.userService.patch(this.user._id,this.user).then(()=>{
                        swal("Followed", "Succesfully followed.", "success", {
                            buttons: false,
                            timer: 2000
                        });
                    });
                }
            },
            unfollow(userId){
                if(userId){
                    this.user.following.splice(this.user.following.indexOf(),1);
                    services.userService.patch(this.user._id,this.user).then(()=>{
                        swal("Unfollowed", "Succesfully Unfollowed.", "success", {
                            buttons: false,
                            timer: 2000
                        });
                    });
                }
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
        <div id="wrapper" v-bind:class="{ toggled: user && this.$route.path.includes('/explore') }">
            <sidebar>

            </sidebar>
            <router-view id="page-content-wrapper"
                v-on:login="login"
                v-on:follow="follow"
                v-on:unfollow="unfollow"
                v-bind:user="user"></router-view>
        </div>
    </div>
</template>

<style lang="scss">
@import "bootstrap/scss/bootstrap.scss";
@import "../styles/_bootswatch.scss";
@import "../styles/_variables.scss";
</style>
