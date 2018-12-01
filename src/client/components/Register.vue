<template>
<div class="body-signup">
  <form action="/#" style="border:1px solid #ccc">

  <div class="container">
    <center>
      <h1><b>SIGN UP</b></h1>
    </center>
    <hr class="hr-signup">

    <label for="first-name"><b>FIRST NAME</b></label>
    <input class="input-signup" type="text" placeholder="Enter Your First Name" name="first-name" required>

    <label for="last-name"><b>LAST NAME</b></label>
    <input class="input-signup" type="text" placeholder="Enter Your Last Name" name="last-name" required>

    <label for="major"><b>MAJOR OF STUDY</b></label>
    <br>
    <select class="selection">
      <option value="default">Please Select</option>
      <option value="CS">Computer Science</option>
      <option value="CpE">Computer Engineering</option>
      <option value="EE">Electrical Engineering</option>
      <option value="Mech">Mechanical Engineering</option>
    </select>
    <br>
    <!-- <input class="input-signup" type="text" placeholder="Enter Your Major of Study" name="major" required> -->

    <label for="email"><b>UFL EMAIL</b></label>
    <input class="input-signup" type="text" placeholder="your_ufl@ufl.edu" name="email" required>

    <label for="psw"><b>PASSWORD</b></label>
    <input class="input-signup" type="password" placeholder="Enter Password" name="psw" required>

    <label for="psw-repeat"><b>CONFIRM PASSWORD</b></label>
    <input class="input-signup" type="password" placeholder="Confirm Password" name="psw-repeat" required>

    <label for="bio"><b>WRITE A SHORT BIOGRAPHY</b></label>
    <textarea class="input-signup" type="text" name="subject" placeholder="Write your life story..." style="height:200px"></textarea>

    <label>
      <input type="checkbox" checked="checked" name="remember" style="margin-bottom:15px"> Make my profile public.
    </label>

    <div class="clearfix">
      <button type="button" class="cancel-button"><b>CANCEL</b></button>
      <button type="submit" class="signup-button"><b>CREATE</b></button>
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
