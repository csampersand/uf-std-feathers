<template>
    <div v-if="user">
        <li class="nav-item">
            <a class="nav-link" href="">Account</a>
        </li>
    </div>
    <form v-else class="form-inline my-2 my-lg-0">
      <router-link to="/login">
          <button class="btn btn-outline-light my-2 my-sm-0" type="submit">Login</button>
      </router-link>
      <router-link to="/register">
          <button class="btn btn-outline-light my-2 my-sm-0" type="submit">Register</button>
      </router-link>
    </form>
</template>

<script>
module.exports = {
    data: () => {
        return {
            // user: {
            //     fname: 'Chris'
            // }
        }
    }
}
</script>
