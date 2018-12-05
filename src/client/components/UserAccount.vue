
<script>
import * as services from '../services'

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
      }
    }
}


</script>

<template>
<div v-if="author">
        <div v-if="author.major" class="user-account-body" >
      <!-- <img class="user-account-img" src="./img/blank-profile-img.png"> -->

      <div class="user-account-card" >

        <h1>{{author.fname}}</h1>
        <p class="user-account-title">{{author.major.majorName}}, {{author.gradYear}}</p>
        <p style="text-align:left; padding-left:10px; padding-right:10px;">
          <b>Bio: </b>
            {{author.bio}}
        <a class="user-account-a" href="http://instagram.com"><i class="fa fa-instagram" style="font-size:40px"></i></a>
        <a class="user-account-a" href="http://twitter.com"><i class="fa fa-twitter" style="font-size:40px"></i></a>
        <a class="user-account-a" href="http://linkedin.com"><i class="fa fa-linkedin" style="font-size:40px"></i></a>
        <a class="user-account-a" href="http://facebook.com"><i class="fa fa-facebook" style="font-size:40px"></i></a>

        <p><button class="user-account-button"><b>Report User</b></button></p>

      </div>
    </div>

    <!-- BLOG POST -->
    <dir v-if="posts">
        <div style="float: right; width: 65%;">
            <h1 class="display-3" style="padding-bottom:20px;"><b>{{author.fname}}'s Blog</b></h1>
        </div>

  <div style="float: right; width: 65%;"  v-for="post in posts" :key="post._id" v-if="post.author._id == author._id">

      <div class="jumbotron" style="padding-top:10px; padding-bottom:10px;">
        <h2 class="display-4">{{post.title}}</h2>
        <h6><i>posted by </i><b>{{author.fname}}</b></h6>
        <hr style="width: 90%;">

        <p class="blog-text">
          {{post.body}}
        </p>
        <div class="clearfix">
          <button type="button" class="btn btn-primary btn-lg" >COMMENT SECTION</button>
          <div style="float:right;">
            <button type="button" class="btn btn-info btn-lg">EDIT</button>
            <button type="button" class="btn btn-danger btn-lg">DELETE</button>
            <button type="button" class="btn btn-warning btn-lg">REPORT POST</button>
          </div>
        </div>
      </div>

      <div id="my-reply" class="collapse">
        <div class="jumbotron" style="width:90%;margin: auto;position: relative;float: inherit;padding-top:10px; padding-bottom:10px;">
          <h6 class="blog-text"><i>comment posted by </i><b>Username</b></h6>
          <div class="form-group">
            <textarea class="form-control" rows="3" maxlength="1000" placeholder="say something, I'm giving up on you..." required></textarea>
              <div style="padding:5px;"></div>
              <button type="submit" class="btn btn-primary">POST</button>
          </div>
        </div>
        <div style="padding:17px;"></div>
      </div>

      <div id="comment-section" class="collapse">
        <div class="jumbotron" style="width:90%;margin: auto;position: relative;float: inherit;padding-top:10px; padding-bottom:10px;">
          <h6 class="blog-text"><i>comment posted by </i><b>Username</b></h6>
          <p class="blog-text">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit,
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </p>
          <button type="submit" class="btn btn-danger">DELETE</button>
        </div>
      </div>
    </div>
    </dir>


</div>

</template>

<style>
.user-account-body {font-family: Arial, Helvetica, sans-serif;
  padding-top: 5px;
  padding-left: 15px;
  float: left;
  position: fixed;
}

.user-account-card {
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
    max-width: 300px;
    margin: auto;
    text-align: center;
}

.user-account-title {
    color: grey;
    font-size: 18px;
}

.user-account-button {
    border: none;
    outline: 0;
    display: inline-block;
    padding: 8px;
    color: white;
    background-color: grey;
    text-align: center;
    cursor: pointer;
    width: 100%;
    font-size: 18px;
}

.user-account-a {
    text-decoration: none;
    font-size: 22px;
    color: black;
}

.user-account-button:hover, a:hover {
    opacity: 0.7;
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

.user-account-button-report:hover {
    opacity: 0.7;
    background-color: darkred;
}

</style>
