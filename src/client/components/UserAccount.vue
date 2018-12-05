
<script>
import * as services from '../services'

import Post from './Post.vue'

    export default {
        props: ['user'],
        data() {
        return {
            posts: null,
            author:null
        }
    },
    watch: {
    '$route.params.userId': function () {
      this.getUser()
    }
  },
    created() {
        this.getPosts();
        this.getUser();
    },
        methods:{
        getPosts() {
        if(this.$route.params.userId){
            services.postService.find({
                query: {
                    $sort: { updatedAt: -1 }
                }
            }).then(posts =>
            this.posts = posts.data);
            }
        },
        getUser(){
            if(this.$route.params.userId){
                services.userService.get(this.$route.params.userId).then(author => this.author = author);
            }
        },
        swapText() {
        var x = document.getElementById("myComments");
        if (x.innerHTML === "COMMENT SECTION") {
          x.innerHTML = "COLLAPSE";
        } else {
          x.innerHTML = "COMMENT SECTION";
        }
      },
        replyComment() {
        var x = document.getElementById("myReply");
        if (x.innerHTML === "COMMENT") {
          x.innerHTML = "CANCEL";
        } else {
          x.innerHTML = "COMMENT";
        }
      },
        follow(userId){
            this.$emit('follow',userId);
     },
        unfollow(userId){
            this.$emit('unfollow',userId);
        }
    },
    components: {
        Post
    }

}


</script>

<template>
<div v-if="author && user">
    <div class="row">
    <div class="col" v-if="author.major" style="float:left; padding-top: 15px; padding-left: 15px;">

      <div style="box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2); max-width: 300px; margin: 10px; text-align: center;" >

        <h1>{{author.fname}} {{author.lname}}</h1>
        <p class="user-account-title">{{author.major.majorName}}, {{author.gradYear}}</p>
        <p style="text-align:left; padding-left:10px; padding-right:10px;">
          <b>Bio: </b>
            {{author.bio}}

        <!-- <p><button type="button" class="btn btn-danger" style="width:80%;"><b>Follow</b></button></p> -->
        <p>
            <button v-if="(user._id != author._id) && !user.following.includes(author._id)" type="button" class="btn btn-primary" style="width:80%;" v-on:click="$emit('follow', author._id)"><b>Follow</b></button>
            <button v-else-if="(user._id != author._id) && user.following.includes(author._id)" type="button" class="btn btn-danger" style="width:80%;" v-on:click="$emit('unfollow', author._id)"><b>Unfollow</b></button>

        </p>

        <p><button v-if="author._id != user._id" type="button" class="btn btn-danger" style="width:80%; margin-bottom:20px;"><b>Report User</b></button></p>
        <router-link to="/post"><button v-if="author._id == user._id" type="button" class="btn btn-success" style="width:80%; margin-bottom:20px;"><b>New Blog Post</b></button></router-link>

      </div>
    </div>

    <!-- BLOG POST -->
    <div class="col-6" v-if="posts && user && author">
        <post
            v-for="post in posts"
            v-if="author._id == post.author._id"
            :key="post._id"
            v-bind:post="post"
            v-bind:user="user"
            v-on:follow="follow"
            v-on:unfollow="unfollow">>
        </post>
    </div>
    <div class="col"></div>
    </div>

</div>

</template>

<style>

.user-account-title {
    color: grey;
    font-size: 18px;
}

.user-account-a {
    text-decoration: none;
    font-size: 22px;
    color: black;
}
