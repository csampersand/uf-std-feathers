<script>

import * as services from '../services'

export default {
    data() {
        return {
            email: '',
            password: '',
            error: false
        }
    },
    methods: {
        login() {
            services.client.authenticate({
                strategy: 'local',
                email: this.email,
                password: this.password
            })
            .then(response => {
                console.log('Authenticated!', response);
                return services.client.passport.verifyJWT(response.accessToken);
            })
            .then(payload => {
                console.log('JWT Payload', payload);
                return services.client.service('users').get(payload.userId);
            })
            .then(user => {
                services.client.set('user', user);
                console.log('User', services.client.get('user'));
            })
            .catch(function(error){
                console.error('Error authenticating!', error);
            });
        }
    }
}

</script>

<template>
  <div class="body-signup" id="authenticate">
    <form style="border:1px solid #ccc">

    <div class="container">
      <center>
        <h1><b>LOGIN</b></h1>
      </center>
      <hr class="hr-signup">

      <label for="email"><b>UFL EMAIL</b></label>
      <input v-model="email" class="input-signup" type="text" placeholder="your_ufl@ufl.edu" name="email" required>

      <label for="psw"><b>PASSWORD</b></label>
      <input v-model="password" class="input-signup" type="password" placeholder="Enter Password" name="psw" required>

      <div class="clearfix">
        <button type="button" class="cancel-button"><b>CANCEL</b></button>
        <button v-on:click="$emit('login-attempt', {email, password})" class="signup-button"><b>LOGIN</b></button>
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
</style>
