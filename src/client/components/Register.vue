<script>
    import * as services from '../services'
    import swal from 'sweetalert';

    export default {
        data() {
            return {
                majors: [],
                user: {},
                errors: []
            }
        },
        created() {
            services.majorService.find().then(majors => this.majors = majors.data);
        },
        methods: {
            register() {
                services.userService.create(this.user).then(() => {
                    services.client.set('user', this.user);
                    this.$emit('login', {email: this.user.email, password: this.user.password, registered: true})
                }).catch(error => {
                    console.error("Error registering", error);
                    console.log(Object.keys(error.errors));
                    this.errors = error.errors;
                    swal("Uh oh!", "We couldn't sign you up. Please try again.", "error", {
                        buttons: false,
                        timer: 2000
                    });
                })
            }
        }
    }
</script>

<template>
<div class="body-signup">
  <form v-on:submit.prevent="register">

  <div class="jumbotron" style="border:3px solid #ccc;">
    <center>
      <h1><b>SIGN UP</b></h1>
    </center>
    <hr style="border:2px solid #ccc; color: #ccc; margin-bottom: 10px">

    <label v-bind:class="{ error: Object.keys(errors).includes('fname') }" for="fname"><b>FIRST NAME</b></label>
    <input v-model="user.fname" class="form-control" type="text" placeholder="Enter Your First Name" name="first-name" required>

    <div style="padding-bottom: 20px;"></div>

    <label v-bind:class="{ error: Object.keys(errors).includes('lname') }" for="lname"><b>LAST NAME</b></label>
    <input v-model="user.lname" class="form-control" type="text" placeholder="Enter Your Last Name" name="last-name" required>

    <div style="padding-bottom: 20px;"></div>

    <label v-bind:class="{ error: Object.keys(errors).includes('major') }" for="major"><b>MAJOR OF STUDY</b></label>
    <br>
    <select v-model="user.major" class="selection">
      <option value="default">Please Select</option>
      <option v-for="major in majors" :value="major._id">{{ major.majorName }}</option>
    </select>
    <br>

    <div style="padding-bottom: 8px;"></div>

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
    <!-- <input class="input-signup" type="text" placeholder="Enter Your Major of Study" name="major" required> -->

    <div style="padding-bottom: 8px;"></div>

    <label v-bind:class="{ error: Object.keys(errors).includes('email') }" for="email"><b>UFL EMAIL</b></label>
    <input v-model="user.email" class="form-control" type="text" placeholder="your_ufl@ufl.edu" name="email"  pattern="[a-z0-9._%+-]+@ufl.edu$" title="Please provide a valid ufl email" required>

    <div style="padding-bottom: 20px;"></div>

    <label v-bind:class="{ error: Object.keys(errors).includes('password') }" for="password"><b>PASSWORD</b></label>
    <input v-model="user.password" class="form-control" type="password" placeholder="Enter Password" name="psw" required>

    <div style="padding-bottom: 20px;"></div>

    <label v-bind:class="{ error: Object.keys(errors).includes('bio') }" for="bio"><b>WRITE A SHORT BIOGRAPHY</b></label>
    <textarea v-model="user.bio" class="form-control" type="text" name="subject" placeholder="Write your life story..." style="height:200px"></textarea>

    <div style="padding-bottom: 20px;"></div>

    <label v-bind:class="{ error: Object.keys(errors).includes('public') }" for="public">
      <input v-model="user.public" type="checkbox" checked="checked" name="remember" style="margin-bottom:15px"> Make my profile public.
    </label>

    <div style="padding-bottom: 30px;"></div>

    <div class="clearfix">
      <button v-on:click="$router.push('/')" type="button" class="btn btn-danger" style="font-size : 17px;float: left; width: 48%; padding: 14px 20px;"><b>CANCEL</b></button>
      <button type="submit" class="btn btn-success" style="font-size : 17px;float: right; width: 48%; padding: 14px 20px;"><b>CREATE</b></button>
    </div>

  </div>
  </form>
</div>
</template>

<style>
.body-signup {font-family: Arial, Helvetica, sans-serif;
  padding-top: 10px;
  padding-left: 25%;
  padding-right: 25%;
}

.header-signup {
  position:
}

.input-signup[type=text], .input-signup[type=password] {
  width: 100%;
  padding-top: 7px;
  padding-left: 7px;
  padding-right: none;
  padding-bottom: 7px;
  margin: 1px 0 19px 0;
  display: inline-block;
  background: #f1f1f1;
}

.input-signup[type=text]:focus, .input-signup[type=password]:focus {
  background-color: #ddd;
  outline: none;
}

.selection {
  margin: 1px 0 19px 0;
}

.hr-signup {
  border: 1px solid #f1f1f1;
  margin-bottom: 22px;
}

.button-signup:hover {
  opacity:1;
}

.cancel-button {
  float: left;
  width: 50%;
  padding: 14px 20px;
  background-color: #FF6633;
  color: black;
  margin: 8px 0;
  border: none;
  cursor: pointer;
  opacity: 0.9;

}

.signup-button {
  float: left;
  width: 50%;
  background-color: #66CC33;
  color: black;
  padding: 14px 20px;
  margin: 8px 0;
  border: none;
  cursor: pointer;
  opacity: 0.9;

}

.container {
  /* background-color: #00CCFF; */
  padding-top: 10px;
  padding-right: 16px;
  padding-left: 16px;
  padding-bottom: 16px;
}

.clearfix::after {
  content: "";
  clear: both;
  display: table;
}

.error::after {
    content: "*";
    color: red;
}
</style>
