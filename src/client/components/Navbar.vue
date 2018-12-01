<script>

import * as services from '../services'

export default {
    data() {
        return {
            loggedIn: !!localStorage.getItem("feathers-jwt"),
        }
    },
    methods: {
        logout() {
            services.client.logout();
            this.loggedIn = false;
        }
    }
}

</script>

<template>
    <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
        <router-link to="/" class="navbar-brand mb-0 h1">UF-STD</router-link>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav mr-auto">
                <li class="nav-item active">
                    <router-link class="nav-link" to="/foo">Foo</router-link>
                </li>
                <li class="nav-item active">
                    <router-link class="nav-link" to="/bar">Bar</router-link>
                </li>
            </ul>
            <ul class="navbar-nav">
                <div v-if="loggedIn">
                  <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle active" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                      Account
                    </a>
                    <div class="dropdown-menu dropdown-menu-right" aria-labelledby="navbarDropdown">
                      <a class="dropdown-item" href="#">Profile</a>
                      <div class="dropdown-divider"></div>
                      <a class="dropdown-item" href="#" v-on:click="logout">Logout</a>
                    </div>
                  </li>
                </div>
                <form v-else class="form-inline my-2 my-lg-0">
                  <router-link to="/login">
                      <button class="btn btn-outline-light my-2 my-sm-0" type="submit">Login</button>
                  </router-link>
                  <router-link to="/register">
                      <button class="btn btn-outline-light my-2 my-sm-0" type="submit">Register</button>
                  </router-link>
                </form>
            </ul>
        </div>
    </nav>
</template>

<style>
.navbar button {
	margin-left: 10px;
}
.pull-left {
    left:0;
}
</style>
