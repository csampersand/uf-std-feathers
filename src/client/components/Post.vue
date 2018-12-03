<script>
    export default {
        props: ['user', 'post']
    }
</script>

<template>
  <div class="jumbotron" style="padding-top:10px; padding-bottom:10px;">
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
</template>
