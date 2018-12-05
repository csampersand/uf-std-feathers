<script>
import * as services from '../services'
import swal from 'sweetalert';


export default {
    props: ['user'],
    data() {
        return {
            post: {
                title: '',
                body: ''
            }
        }
    },
    methods: {
        newPost() {
            services.postService.create(this.post).then(() => {
                swal("Posted!", "Your post was created successfully.", "success", {
                    buttons: false,
                    timer: 2000
                }).then(() => {
                    this.$router.push('/blog/' + this.user._id);
                });
            }).catch(() => {
                swal("Uh oh!", "Something went wrong. Please try again.", "error", {
                    buttons: false,
                    timer: 2000
                });
            });
        }
    }
}
</script>

<template>
  <div class="box-frame">

    <div class="jumbotron" style="padding-top:10px; padding-bottom:10px;">
      <div class="form-group" style="padding-top: 20px; ">
        <input class="form-control form-control-lg" v-model="post.title" style="padding: 25px; font-size: 25px;"type="text" placeholder="New Name for Topic of Discussion" id="inputLarge">
      </div>
      <hr style="width: 90%;">

      <div class="form-group">
        <textarea class="form-control" rows="5" maxlength="1000" v-model="post.body" placeholder="say something else..."required></textarea>
      </div>
      <div class="clearfix">
        <button v-on:click="$router.go(-1)" type="button" class="btn btn-warning btn-lg">CANCEL</button>
        <div style="float:right;">
          <button v-on:click="newPost" type="button" class="btn btn-success btn-lg">CREATE</button>
        </div>
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
  width: 100%;
  padding: 20px;
  position: absolute;
  top: 10px;
  height: 100%;
}
</style>
