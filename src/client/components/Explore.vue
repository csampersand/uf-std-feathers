<script>

import * as services from '../services'

import Post from './Post.vue'
import Sidebar from './Sidebar.vue'

export default {
    props: ['user', 'majorId'],
    data() {
        return {
            posts: null,
            major: null
        }
    },
    created() {
        this.getPosts();
    },
    methods: {
        getPosts() {
            services.postService.find({
                query: {
                    $sort: { updatedAt: -1 }
                }
            }).then(posts =>
            this.posts = posts.data);
        },
        getMajors(){
            if(this.$route.params.majorId){
                services.majorService.find({
                query:{
                    _id: this.$route.params.majorId
                }
            }).then(posts => this.posts = posts.data);
                this.major = major.data[0];
            }
            else{
                this.major = null;
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
    <div>
        <div class="box-frame">
          <h1 class="display-3" style="padding-bottom:20px;" v-if="major">
              <b>{{major.majorName}}</b>
              </h1>
            <h1 class="display-3" style="padding-bottom:20px;" v-else><b>Explore</b></h1>

            <div v-if="posts.length == 0" style="font-size: 24px">
                There aren't any posts here right now. How about you make one!
            </div>
            <div v-if="posts && user">
                <post
                    v-if="major == null || post.author.major._id == major._id"
                    v-for="post in posts"
                    :key="post._id"
                    v-bind:major="major"
                    v-bind:post="post"
                    v-bind:user="user"
                    v-on:follow="follow"
                    v-on:unfollow="unfollow">
                </post>
            </div>
        </div>
    </div>
</template>

<style>
/* BLOG POST */
.box-frame {
  margin: auto;
  border: none;
  background-color: white;
  float: right;
  width: 70%;
  padding: 20px;
  position: absolute;
  top: 10px;
  left: 10px;
  height: 100%;
}

.blog-post-frame {
  position: relative;
  width: 100%;
  height: relative;
  background-color: lightgrey;
  border: 2px solid darkgray;

}

.blog-post-title {
  padding-top: 12px;
  padding-left: 12px;
}

.blog-text {
  padding-top: 0px;
  padding-left: 0px;
}

.user-account-button-comment {
    border: none;
    float: left;
    outline: 0;
    display: inline-block;
    padding: 8px;
    color: white;
    background-color: grey;
    text-align: center;
    cursor: pointer;
    width: 80%;
    font-size: 18px;
}

.user-account-button-report {
    border: none;
    float: left;
    outline: 0;
    display: inline-block;
    padding: 8px;
    color: white;
    background-color: darkgray;
    text-align: center;
    cursor: pointer;
    width: 20%;
    font-size: 18px;
}

.user-account-button:hover {
    opacity: 0.7;
    background-color: darkred;
}

.user-account-button-comment:hover {
    opacity: 0.7;
    background-color: green;
}
.user-account-button-report:hover {
    opacity: 0.7;
    background-color: darkred;
}

.blog-post-comment {
  margin: auto;
  position: relative;
  float: inherit;
  width: 95%;
  height: relative;
  background-color: lightgrey;
  border: 2px solid darkgray;

}

</style>
