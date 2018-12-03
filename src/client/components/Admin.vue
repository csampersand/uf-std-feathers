<script>
      // Get the elements with class="column"
    var elements = document.getElementsByClassName("column");
    var i;

    function listView() {
        for (i = 0; i < elements.length; i++) {
            elements[i].style.width = "100%";
        }
    }

    function gridView() {
        for (i = 0; i < elements.length; i++) {
             elements[i].style.width = "33.3%";
        }
    }
</script>

<template>

<div class="user-account-body">
      <img class="user-account-img" src="./img/blank-profile-img.png">

      <div class="user-account-card">

        <h1>Admin</h1>
        <p class="user-account-title">Head of Major</p>
        <p style="text-align:left; padding-left:10px; padding-right:10px;">
          <b>Bio: </b>
        This is the student from Harvard University. This is the student from Harvard University.
        This is the student from Harvard University. This is the student from Harvard University.
        This is the student from Harvard University. This is the student from Harvard University.
        This is the student from Harvard University. This is the student from Harvard University. </p>

        <a class="user-account-a" href="http://instagram.com"><i class="fa fa-instagram" style="font-size:40px"></i></a>
        <a class="user-account-a" href="http://twitter.com"><i class="fa fa-twitter" style="font-size:40px"></i></a>
        <a class="user-account-a" href="http://linkedin.com"><i class="fa fa-linkedin" style="font-size:40px"></i></a>
        <a class="user-account-a" href="http://facebook.com"><i class="fa fa-facebook" style="font-size:40px"></i></a>
      </div>
    </div>

    <!-- BLOG POST -->
    <div class="box-frame">

      <!-- Buttons to choose list or grid view -->
      <button onclick="listView()" type="button" class="btn btn-primary" style="width:49%;"><i class="fa fa-bars"></i> List</button>
      <button onclick="gridView()" type="button" class="btn btn-info" style="width:49%; float:right;"><i class="fa fa-th-large"></i> Grid</button>
      <div style="margin-bottom:15px;"></div>
      <div class="row">
        <div class="column">
          <div class="card border-dark mb-3">
            <div class="card-header">Username</div>
            <div class="card-body">
              <h4 class="card-title">Last Name, First Name</h4>
              <h5>Major, Year</h5>
              <p class="card-text"><b>Bio: </b>Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            </div>
          </div>
        </div>
        <div class="column">
          <div class="card border-dark mb-3">
            <div class="card-header">Username</div>
            <div class="card-body">
              <h4 class="card-title">Last Name, First Name</h4>
              <h5>Major, Year</h5>
              <p class="card-text"><b>Bio: </b>Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            </div>
          </div>
        </div>
        <div class="column">
          <div class="card border-dark mb-3" ">
            <div class="card-header">Username</div>
            <div class="card-body">
              <h4 class="card-title">Last Name, First Name</h4>
              <h5>Major, Year</h5>
              <p class="card-text"><b>Bio: </b>Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            </div>
          </div>
        </div>
        <div class="column">
          <div class="card border-dark mb-3"">
            <div class="card-header">Username</div>
            <div class="card-body">
              <h4 class="card-title">Last Name, First Name</h4>
              <h5>Major, Year</h5>
              <p class="card-text"><b>Bio: </b>Some quick example text to build on the card title and make up the bulk of the card's content.</p>
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
  right: 10px;
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
