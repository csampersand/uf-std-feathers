<script>

import * as services from '../services'

export default {
    data() {
        return {
            email: '',
            password: '',
            error: false
        }
    }
}

</script>

<template>
  <div class="body-signup" id="authenticate">
    <form v-on:submit.prevent>

    <div class="jumbotron" style="border:3px solid #ccc;" >
      <center>
        <h1><b>LOGIN</b></h1>
      </center>
      <hr style="border:2px solid #ccc; color: #ccc; margin-bottom: 10px">

      <label for="email"><b>UFL EMAIL</b></label>
      <input v-model="email" class="form-control" type="text" placeholder="your_ufl@ufl.edu" name="email" required>

      <div style="padding-bottom: 20px;"></div>

      <label for="psw"><b>PASSWORD</b></label>
      <input v-model="password" class="form-control" type="password" placeholder="Enter Password" name="psw" required>

      <div style="padding-bottom: 40px;"></div>

      <div class="clearfix">
        <button v-on:click="$router.push('/')" type="button" class="btn btn-danger" style="font-size : 17px;float: left; width: 48%; padding: 14px 20px;"><b>CANCEL</b></button>
        <button id="submit" v-on:click="$emit('login', {email, password})" type="button" class="btn btn-success" style="font-size : 17px;float: right; width: 48%; padding: 14px 20px;"><b>LOGIN</b></button>
      </div>

    </div>
    </form>
  </div>
</template>

<style>
.body-signup {font-family: Arial, Helvetica, sans-serif;
  padding-top: 10px;

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
  border: 1px solid black;
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
</style>
