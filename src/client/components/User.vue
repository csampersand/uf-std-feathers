<template>
    <div class="user-account-body">
      <img class="user-account-img" src="./img/blank-profile-img.png">

      <div class="user-account-card">

        <h1>John Doe</h1>
        <p class="user-account-title">Major, Year</p>
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

        <p><button class="user-account-button"><b>Report User</b></button></p>

      </div>
    </div>

    <!-- BLOG POST -->
    <div class="box-frame">
      <h1 style="padding-bottom:20px;">Username's Blog</h1>
      <div class="blog-post-frame">
        <h2 class="blog-post-title">Toppic Of Discussion</h2>
        <h6 class="blog-text"><i>posted by </i><b>Username</b></h6>
        <hr style="width: 90%;">

        <p class="blog-text">
          THIS IS WHERE THE POST FROM THE STUDENTS ARE GONNA BE ISH.
        </p>
        <div class="clearfix">
          <button type="button" class="user-account-button-comment"><b>CLOSE</b></button>
          <button type="button" class="user-account-button-report"><b>REPORT POST</b></button>
        </div>
      </div>
      <div style="padding-bottom:20px;"></div>

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
  padding-left: 12px;
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
</style>
