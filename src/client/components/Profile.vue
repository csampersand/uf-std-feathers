<script>
    import * as services from '../services'
    import swal from 'sweetalert';

    export default {
        props: ['user'],
        data() {
            return {
                majors: [],
                errors: []
            }
        },
        created() {
            services.majorService.find().then(majors => this.majors = majors.data);
        },
        methods: {
            register() {
                services.userService.patch(this.user._id, this.user).then(() => {
                    swal("Updated profile!", "Your profile has been updated.", "success", {
                        buttons: false,
                        timer: 2000
                    });
                }).catch(error => {
                    this.errors = error.errors;
                    swal("Uh oh!", "We couldn't update your profile. Please try again.", "error", {
                        buttons: false,
                        timer: 2000
                    });
                })
            }
        }
    }
</script>

<template>
<div >
<div class="container">

  <form class="jumbotron" style="border:3px solid #ccc" v-on:submit.prevent="register">

    <h1><center>Edit Profile</center></h1>
    <hr style="border:2px solid #ccc; color: #ccc; margin-bottom: 10px">

    <div v-if="user" style="text-align:left; padding-top:15px; padding-left:10px; padding-right:10px; width:100%;">

      <label v-bind:class="{ error: Object.keys(errors).includes('fname') }" for="fname"><b>FIRST NAME</b></label>
      <input v-model="user.fname" style="margin-bottom: 15px;" class="form-control" type="text" placeholder="First Name" name="first-name" required>

      <label v-bind:class="{ error: Object.keys(errors).includes('lname') }" for="lname"><b>LAST NAME</b></label>
      <input v-model="user.lname" style="margin-bottom: 15px;" class="form-control" type="text" placeholder="Last Name" name="last-name" required>

      <label v-bind:class="{ error: Object.keys(errors).includes('email') }" for="email"><b>EMAIL</b></label>
      <input v-model="user.email" style="margin-bottom: 15px;" class="form-control" type="text" placeholder="Email" name="email" required>

      <label v-bind:class="{ error: Object.keys(errors).includes('major') }" for="major"><b>MAJOR OF STUDY</b></label>
      <select v-model="user.major._id" class="selection" required>
        <option value="default">Please Select</option>
        <option v-for="major in majors" :value="major._id">{{ major.majorName }}</option>
      </select>

      <label v-bind:class="{ error: Object.keys(errors).includes('gradYear') }" for="gradYear"><b>Graduation Year</b></label>
        <br>
        <select v-model="user.gradYear" class="selection">
          <option value="default">Please Select</option>
          <option value="2018">2018</option>
          <option value="2019">2019</option>
          <option value="2020">2020</option>
          <option value="2021">2021</option>
          <option value="2022">2022</option>
          <option value="2023">2023</option>
        </select>
        <br>

      <label v-bind:class="{ error: Object.keys(errors).includes('bio') }" for="bio"><b>WRITE A SHORT BIOGRAPHY</b></label>
      <textarea v-model="user.bio" class="form-control" type="text" name="subject" placeholder="Spice up your bio..." style="height:200px"></textarea>

    </div>

    <a class="user-account-a" href="http://instagram.com"><i class="fa fa-instagram" style="font-size:40px"></i></a>
    <a class="user-account-a" href="http://twitter.com"><i class="fa fa-twitter" style="font-size:40px"></i></a>
    <a class="user-account-a" href="http://linkedin.com"><i class="fa fa-linkedin" style="font-size:40px"></i></a>
    <a class="user-account-a" href="http://facebook.com"><i class="fa fa-facebook" style="font-size:40px"></i></a>

    <div style="padding-bottom: 40px;"></div>

    <div class="clearfix">
      <button v-on:click="$router.go(-1)" type="button" class="btn btn-warning" style="font-size : 17px;float: left; width: 48%; padding: 14px 20px;"><b>CANCEL</b></button>
      <button type="submit" class="btn btn-success" style="font-size : 17px;float: right; width: 48%; padding: 14px 20px;"><b>UPDATE PROFILE</b></button>
    </div>
</form>
</div >
</div >
</template>

<style>
.user-account-title {
    color: grey;
    font-size: 18px;
}

.user-account-button {
    border: none;
    float: left;
    outline: 0;
    display: inline-block;
    padding: 8px;
    color: white;
    background-color: #66CC33;
    text-align: center;
    cursor: pointer;
    width: 50%;
    font-size: 18px;
}

.user-account-button-cancel {
    border: none;
    float: left;
    outline: 0;
    display: inline-block;
    padding: 8px;
    color: white;
    background-color: grey;
    text-align: center;
    cursor: pointer;
    width: 50%;
    font-size: 18px;
}

.user-account-a {
    text-decoration: none;
    font-size: 22px;
    color: black;
}

.selection {
  margin: 1px 0 19px 0;
  width: 100%;
}

.clearfix::after {
  content: "";
  clear: both;
  display: table;
}
</style>
