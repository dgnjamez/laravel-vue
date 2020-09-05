<template>
    <div class="home" @click="redirect">Home Page</div>
</template>

<script>
export default {
    mounted () {
        console.log('vue home page');
    },
    methods: {
        redirect () {
            window.location.href = '/example-component'
        }
    }
}
</script>

<style scoped>
    .home {
        color: green;
    }
</style>