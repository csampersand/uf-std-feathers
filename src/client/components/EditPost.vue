<script>

</script>

<template>
    <!-- BLOG POST -->
    <div class="box-frame">

      <div class="jumbotron" style="padding-top:10px; padding-bottom:10px;">
        <h2 class="display-4">Toppic Of Discussion</h2>
        <div class="form-group">
          <input class="form-control form-control-lg" type="text" placeholder="New Name for Topic of Discussion" id="inputLarge">
        </div>
        <hr style="width: 90%;">
        <div class="form-group">
          <textarea class="form-control" rows="3" maxlength="250" placeholder="say something else..." required></textarea>
        </div>
        <div class="clearfix">
          <button type="button" class="btn btn-success btn-lg">UPDATE</button>
          <button type="button" class="btn btn-warning btn-lg">CANCEL</button>
          <div style="float:right;">
            <button type="button" class="btn btn-danger btn-lg">DELETE</button>
          </div>
        </div>
      </div>
    </div>
</template>

<style>
/* BLOG POST */
.box-frame {
  margin: auto;
  border: none;
  background-color: white;
  float: right;
  width: 100%;
  padding: 20px;
  position: absolute;
  top: 10px;
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
</style>
