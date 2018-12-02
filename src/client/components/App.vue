<template>
    <div id="app" class="toggled">
        <navbar></navbar>
        <!-- route outlet -->
        <!-- component matched by the route will render here -->
        <div id="wrapper" class="toggled">
            <sidebar></sidebar>
            <router-view id="page-content-wrapper" class="container" tag="div"></router-view>
        </div>
    </div>
</template>
