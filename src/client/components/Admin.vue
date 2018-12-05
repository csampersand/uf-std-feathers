<script>
    import * as services from '../services'
    export default {
        props: ['user'],
        data() {
          return {
                users: [],
                majors: [],
                errors: []
            }
        },
        created() {
            services.userService.find().then(user => this.users = user.data);
            services.majorService.find().then(major => this.majors = major.data);
        },
        methods: {
            listView() {
              var elements = document.getElementsByClassName("column");
              for (var i = 0; i < elements.length; i++) {
                elements[i].style.width = "100%";
              }
            },
            gridView() {
              var elements = document.getElementsByClassName("column");
              for (var i = 0; i < elements.length; i++) {
                elements[i].style.width = "33.3%";
              }
            },
            getMajor(majorId){
              var major = this.majors.find(major => major._id === majorId);
              return major.majorName;
            },
            banUser(user) {
                user.isBanned = true;
                services.userService.patch(user._id, user).then(() => {
                  swal("User banned!", "Successfully banned the user.", "success", {
                      buttons: false,
                      timer: 2000
                  });
                  services.userService.find().then(user => this.users = user.data);
                }).catch(error => {
                    this.errors = error.errors;
                    swal("Uh oh!", "We couldn't ban the user. Please try again.", "error", {
                        buttons: false,
                        timer: 2000
                    });
                })
            },
            unbanUser(user) {
                user.isBanned = false;
                services.userService.patch(user._id, user).then(() => {
                  swal("User unbanned!", "Successfully unbanned the user.", "success", {
                      buttons: false,
                      timer: 2000
                  });
                  services.userService.find().then(user => this.users = user.data);
                }).catch(error => {
                    this.errors = error.errors;
                    swal("Uh oh!", "We couldn't unban the user. Please try again.", "error", {
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
      <!-- Buttons to choose list or grid view -->
      <button v-on:click="listView()" type="button" class="btn btn-primary" style="width:49%;"><i class="fa fa-bars"></i> List</button>
      <button v-on:click="gridView()" type="button" class="btn btn-info" style="width:49%; float:right;"><i class="fa fa-th-large"></i> Grid</button>
      <div style="margin-bottom:15px;"></div>
      <div class="row">
        <div v-for="_user in users" class="column">
          <div v-bind:class="{'card text-white bg-danger mb-3': _user.isBanned, 'card border-dark mb-3': !_user.isBanned}">
            <div class="card-header">{{ _user.email }}</div>
            <div class="card-body">
              <h4 class="card-title">{{ _user.fname }}, {{ _user.lname }}</h4>
              <h5>{{ getMajor(_user.major) }}, {{ _user.gradYear }}</h5>
              <p class="card-text"><b>Email: </b>{{ _user.email }}</p>
              <p class="card-text"><b>Created: </b>{{ _user.createdAt }}</p>
              <p class="card-text"><b>Modified: </b>{{ _user.updatedAt }}</p>
              <button v-if="!_user.isBanned" v-on:click="banUser(_user)" type="button" class="btn btn-warning" style="float: right"><i class="fa fa-bars"></i>Ban</button>
              <button v-else v-on:click="unbanUser(_user)" type="button" class="btn btn-info" style="float: right"><i class="fa fa-bars"></i>Unban</button>
            </div>
          </div>
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

/* Create two equal columns that floats next to each other */
.column {
    float: left;
    width: 33.3%;
    padding: 10px;
}

/* Clear floats after the columns */
.row:after {
    content: "";
    display: table;
    clear: both;
}
</style>
