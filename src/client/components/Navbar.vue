<template>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <a class="navbar-brand mb-0 h1" href="#">UF-STD</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav mr-auto">
                <li class="nav-item active">
                    <router-link class="nav-link" to="/foo">Foo <span class="sr-only">(current)</span></router-link>
                </li>
                <li class="nav-item active">
                    <router-link class="nav-link" to="/bar">Bar</router-link>
                </li>
            </ul>
            <form class="form-inline my-2 my-lg-0">
                <span>Welcome back !</span>
                <button id="login" class="btn btn-outline-info my-2 my-sm-0" type="button" data-toggle="modal" data-target="#loginModal">Log in</span></button>
                <button id="logout" class="btn btn-outline-danger my-2 my-sm-0" type="button">Log out</span></button>
            </form>
        </div>
    </nav>
</template>

<style>
.navbar button {
	margin-left: 10px;
}
</style>
