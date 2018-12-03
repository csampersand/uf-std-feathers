<script>
          function swapText() {
        var x = document.getElementById("myComments");
        if (x.innerHTML === "COMMENT SECTION") {
          x.innerHTML = "COLLAPSE";
        } else {
          x.innerHTML = "COMMENT SECTION";
        }
      };
            function replyComment() {
        var x = document.getElementById("myReply");
        if (x.innerHTML === "COMMENT") {
          x.innerHTML = "CANCEL";
        } else {
          x.innerHTML = "COMMENT";
        }
      }
</script>

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
      <h1 class="display-3" style="padding-bottom:20px;"><b>Username's Blog</b></h1>

      <div class="jumbotron" style="padding-top:10px; padding-bottom:10px;">
        <h2 class="display-4">Toppic Of Discussion</h2>
        <h6 class="blog-text"><i>posted by </i><b>Username</b></h6>
        <hr style="width: 90%;">

        <p class="blog-text">
          THIS IS WHERE THE POST FROM THE STUDENTS ARE GONNA BE ISH.
        </p>
        <div class="clearfix">
          <button type="button" onclick="replyComment()"  id="myReply" class="btn btn-success btn-lg" data-toggle="collapse" data-target="#my-reply">COMMENT</button>
          <button type="button" onclick="swapText()"  id="myComments" class="btn btn-primary btn-lg" data-toggle="collapse" data-target="#comment-section">COMMENT SECTION</button>
          <div style="float:right;">
            <button type="button" class="btn btn-info btn-lg">EDIT</button>
            <button type="button" class="btn btn-danger btn-lg">DELETE</button>
            <button type="button" class="btn btn-warning btn-lg">REPORT POST</button>
          </div>
        </div>
      </div>

      <div id="my-reply" class="collapse">
        <div class="jumbotron" style="width:90%;margin: auto;position: relative;float: inherit;padding-top:10px; padding-bottom:10px;">
          <h6 class="blog-text"><i>comment posted by </i><b>Username</b></h6>
          <div class="form-group">
            <textarea class="form-control" rows="3" maxlength="250" placeholder="say something, I'm giving up on you..."required></textarea>
              <div style="padding:5px;"></div>
              <button type="submit" class="btn btn-primary">POST</button>
          </div>
        </div>
        <div style="padding:17px;"></div>
      </div>

      <div id="comment-section" class="collapse">
        <div class="jumbotron" style="width:90%;margin: auto;position: relative;float: inherit;padding-top:10px; padding-bottom:10px;">
          <h6 class="blog-text"><i>comment posted by </i><b>Username</b></h6>
          <p class="blog-text">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit,
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </p>
          <button type="submit" class="btn btn-danger">DELETE</button>
        </div>
      </div>
    </div>

</template>
