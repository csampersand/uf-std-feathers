<script>
    import * as services from '../services'

    export default {
        props: ['user', 'post']
    }
</script>

<template>
  <div class="jumbotron" style="padding-top:10px; padding-bottom:10px;">
    <h4 class="h2">{{ post.title }}</h4>
    <router-link class="dropdown-item" :to="{ name:'blog', params: { userId: post.author._id} }" href="#"><i>posted by </i><b>{{ post.author.fname }} {{ post.author.lname }}</b></router-link>
    <button v-if="(user._id != post.author._id) && !user.following.includes(post.author._id)" type="button" class="btn btn-primary btn-xs"  v-on:click="$emit('follow', post.author._id)">Follow</button>
    <button v-else-if="(user._id != post.author._id) && user.following.includes(post.author._id)" type="button" class="btn btn-danger btn-xs" v-on:click="$emit('unfollow', post.author._id)">Unfollow</button>

    <hr style="width: 90%;">

    <p class="blog-text">
      {{ post.body }}
    </p>
    <div class="clearfix">
      <div style="float:right;">
        <button v-if="user._id == post.author._id || user.isAdmin" type="button" class="btn btn-info btn-lg">Edit</button>
        <button v-if="user._id == post.author._id || user.isAdmin" type="button" class="btn btn-danger btn-lg">Delete</button>
        <button type="button" class="btn btn-warning btn-lg">Report</button>
      </div>
    </div>
  </div>
</template>
