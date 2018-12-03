<script>

import * as services from '../services'

export default {
    props: ['user'],
    data() {
        return {
            posts: []
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
            }).then(posts => this.posts = posts.data);
        }
    }
}

function replyComment() {
    var x = document.getElementById("myReply");
    if (x.innerHTML === "COMMENT") {
        x.innerHTML = "CANCEL";
    } else {
        x.innerHTML = "COMMENT";
    }
}

function swapText() {
    var x = document.getElementById("myComments");
    if (x.innerHTML === "COMMENT SECTION") {
        x.innerHTML = "COLLAPSE";
    } else {
        x.innerHTML = "COMMENT SECTION";
    }
}
</script>
<template>
    <div>
        <div class="box-frame">
          <h1 class="display-3" style="padding-bottom:20px;"><b>Major</b></h1>

          <div v-for="post in posts" class="jumbotron" style="padding-top:10px; padding-bottom:10px;">
            <h4 class="h2">{{ post.title }}</h4>
            <h6 class="blog-text"><i>posted by </i><b>{{ post.author.fname }} {{ post.author.lname }}</b></h6>
            <hr style="width: 90%;">

            <p class="blog-text">
              {{ post.body }}
            </p>
            <div class="clearfix">
              <button type="button" onclick="replyComment()"  id="myReply" class="btn btn-success btn-lg" data-toggle="collapse" data-target="#my-reply">COMMENT</button>
              <button type="button" onclick="swapText()"  id="myComments" class="btn btn-primary btn-lg" data-toggle="collapse" data-target="#comment-section">COMMENT SECTION</button>
              <div style="float:right;">
                <button v-if="user._id == post.author._id || user.isAdmin" type="button" class="btn btn-info btn-lg">Edit</button>
                <button v-if="user._id == post.author._id || user.isAdmin" type="button" class="btn btn-danger btn-lg">Delete</button>
                <button type="button" class="btn btn-warning btn-lg">Report</button>
              </div>
            </div>
          </div>

        </div>
    </div>
</template>

<style>
.user-account-body {font-family: Arial, Helvetica, sans-serif;
  padding-top: 5px;
  padding-left: 15px;
  float: left;
  position: fixed;
}

.user-account-img {
  float: center;
  max-width: 300px;
  border-radius: 50%;
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 100%;
  padding-bottom: 10px;
}

.user-account-card {
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
    max-width: 350px;
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
