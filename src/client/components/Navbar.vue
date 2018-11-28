<template>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <a class="navbar-brand" href="#">UF-STD</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav mr-auto">
                <li class="nav-item active">
                    <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
                </li>
                <li class="nav-item active">
                    <a class="nav-link" href="#" data-toggle="modal" data-target="#profileModal">Profile <span class="sr-only">(current)</span></a>
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
