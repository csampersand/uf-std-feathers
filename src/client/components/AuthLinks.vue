<template>
    <div v-if="user">
        <li class="nav-item">
            <a class="nav-link" href="">Account</a>
        </li>
    </div>
    <div v-else-if="!user">
        <li class="nav-item">
            <a class="nav-link" href="">Login</a>
        </li>
        <li class="nav-item">
            <a class="nav-link" href="">Sign Up</a>
        </li>
    </div>
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
