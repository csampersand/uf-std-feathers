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
            }).then(posts =>{
            this.posts = posts.data.filter(f =>
                this.user.following.includes(f.author._id));
            });
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
