<script>

import * as services from '../services'

export default {
    props: ['user']
}

</script>

<template>
    <nav class="navbar navbar-expand-lg navbar-dark bg-primary navbar-fixed-top">
        <div class="container">
            <router-link to="/" class="navbar-brand mb-0 h1">UF-STD</router-link>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav mr-auto">
                    <li class="nav-item">
                        <router-link v-if="user" class="nav-link" to="/feed">Your Feed</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link" to="/explore">Explore</router-link>
                    </li>
                </ul>
                <ul class="navbar-nav">
                    <div v-if="user">
                      <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                          Account
                        </a>
                        <div class="dropdown-menu dropdown-menu-right" aria-labelledby="navbarDropdown">
                          <router-link class="dropdown-item" to="/profile" href="#">Profile</router-link>
                          <router-link class="dropdown-item" to="/" href="#">My Blog</router-link>
                          <div class="dropdown-divider"></div>
                          <a class="dropdown-item" v-on:click="$emit('logout')">Logout</a>
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
.router-active {
    font-weight: bold;
    color: #FFFFFF;
}
</style>
