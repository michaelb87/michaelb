<template>
    <span class="tag is-light">{{tag.name}}</span>
</template>

<script>
export default {
    props: ['tag'],
}
</script>

<style scoped>
    .tag {
        cursor: pointer;
    }
</style>