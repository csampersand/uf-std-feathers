<script>
    import * as services from '../services'
    import swal from 'sweetalert';


    export default {
        props: ['user', 'post','major'],
        data() {
            return {
                editing: false
            }
        },
        methods: {
            editPost() {
                services.postService.patch(this.post._id, this.post).then(() => {
                    swal("Edited your post!", "Your post was edited successfully.", "success", {
                        buttons: false,
                        timer: 2000
                    });
                    this.editing = false;
                }).catch(() => {
                    swal("Uh oh!", "There was an error editing your post. Please try again later.", "error", {
                        buttons: false,
                        timer: 2000
                    });
                })
            }
            deletePost() {
                services.postService.patch(this.post._id, this.post).then(() => {
                    swal("Edited your post!", "Your post was edited successfully.", "success", {
                        buttons: false,
                        timer: 2000
                    });
                    this.editing = false;
                }).catch(() => {
                    swal("Uh oh!", "There was an error editing your post. Please try again later.", "error", {
                        buttons: false,
                        timer: 2000
                    });
                })
            }
        }
    }
</script>

<template>
<div>
  <div class="jumbotron" style="padding-top:10px; padding-bottom:10px;">
    <h4 v-if="!editing" class="h2">{{ post.title }}</h4>
    <input v-else class="form-control" v-model="post.title"></input>
    <i>posted by </i> <router-link :to="{ name:'blog', params: { userId: post.author._id} }" href="#"><b>{{ post.author.fname }} {{ post.author.lname }}</b></router-link>
    <hr style="width: 90%;">

    <p v-if="!editing" class="blog-text">
      {{ post.body }}
    </p>
    <textarea v-else class="form-control" id="editPostBody" rows="5" v-model="post.body"></textarea>

    <div class="clearfix">
      <div v-if="!editing" style="float:right;">
        <button v-if="user._id == post.author._id || user.isAdmin" type="button" v-on:click="editing = true" class="btn btn-info btn-lg">Edit</button>
        <button v-if="user._id == post.author._id || user.isAdmin" type="button" class="btn btn-danger btn-lg">Delete</button>
        <button type="button" class="btn btn-warning btn-lg">Report</button>
      </div>
      <div v-else style="float:right;">
        <button v-on:click="editing=false" class="btn btn-error btn-lg">Cancel</button>
        <button v-on:click="editPost" type="submit" class="btn btn-primary btn-lg">Save Changes</button>
      </div>

    </div>
  </div>
</div>
</template>
