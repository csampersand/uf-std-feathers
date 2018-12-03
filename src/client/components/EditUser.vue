<template>
<div class="user-account-body">
<div class="user-account-card">

    <div style="text-align:left; padding-top:15px; padding-left:10px; padding-right:10px; width:100%;">
      <input class="user-account-input" type="text" placeholder="First Name" name="first-name" required>
      <input class="user-account-input" type="text" placeholder="Last Name" name="last-name" required>
      <input class="user-account-input" type="text" placeholder="Email" name="email" required>

      <select class="selection" required>
        <option value="default">Update Current Major</option>
        <option value="CS">Computer Science</option>
        <option value="CpE">Computer Engineering</option>
        <option value="EE">Electrical Engineering</option>
        <option value="Mech">Mechanical Engineering</option>
      </select>

      <input class="user-account-input" type="text" placeholder="Graduation Year" name="grad-year" required>

      <textarea class="user-account-input" type="text" name="subject" placeholder="Spice up your bio..." style="height:200px"></textarea>

      <input class="user-account-input" type="password" placeholder="Current Password" name="password" required>
      <input class="user-account-input" type="password" placeholder="New Password" name="password" required>
      <input class="user-account-input" type="password" placeholder="Confirm New Password" name="password" required>

    </div>

    <a class="user-account-a" href="http://instagram.com"><i class="fa fa-instagram" style="font-size:40px"></i></a>
    <a class="user-account-a" href="http://twitter.com"><i class="fa fa-twitter" style="font-size:40px"></i></a>
    <a class="user-account-a" href="http://linkedin.com"><i class="fa fa-linkedin" style="font-size:40px"></i></a>
    <a class="user-account-a" href="http://facebook.com"><i class="fa fa-facebook" style="font-size:40px"></i></a>

    <div class="clearfix">
      <button type="button" class="user-account-button-cancel"><b>CANCEL</b></button>
      <button type="submit" class="user-account-button"><b>UPDATE PROFILE</b></button>
    </div>

</div >
</template>

<style>
.user-account-body {font-family: Arial, Helvetica, sans-serif;
  padding-top: 10px;
  padding-left: 20%;
  padding-right: 20%;
  padding-bottom: 20px;
}

.user-account-img {
  float: center;
  max-width: 300px;
  border-radius: 50%;
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 50%;
  padding-bottom: 10px;
}

.user-account-card {
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
    max-width: 50%;
    margin: auto;
    text-align: center;
}

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
    background-color: black;
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

.user-account-button:hover, a:hover {
    opacity: 0.7;
}

.user-account-input[type=text], .user-account-input[type=password] {
  width: 100%;
  padding-top: 7px;
  padding-left: 7px;
  padding-right: none;
  padding-bottom: 7px;
  margin: 1px 0 19px 0;
  display: inline-block;
  background: #f1f1f1;
}

.user-account-input[type=text]:focus, .user-account-input[type=password]:focus {
  background-color: #ddd;
  outline: none;
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
