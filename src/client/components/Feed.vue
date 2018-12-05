<script>

import * as services from '../services'

import PostListings from './PostListings.vue'

export default {
    props: ['user'],
    data() {
        return {
            posts: null,
        }
    },
    created() {
        this.getPosts();
    },
    methods: {
        getPosts() {
            services.postService.find({
                query: {
                    $sort: { updatedAt: -1 }
                }
            }).then(posts =>
            this.posts = posts.data);
        }
     },
    components: {
        PostListings
    }
}
</script>
<template>
<postListings
v-if="posts && user"
v-bind:posts="posts"
v-bind:user="user"
>
</postListings>
</template>
