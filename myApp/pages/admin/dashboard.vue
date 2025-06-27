<script setup>
definePageMeta({
    layout: 'admin'
})
</script>

<template>
    <div>
        <h1>Dashboard</h1>
        <br>
        <NuxtLink to="/admin/articles">articles</NuxtLink>
        <br>
        <NuxtLink to="/admin/create-post">create post</NuxtLink>
    </div>
</template>
