<script setup>
definePageMeta({
    layout: 'auth'
})
</script>

<template>
    <div>
        <h1>Login Page</h1>
        <NuxtLink to="/auth/register">Register</NuxtLink>
        <br>
        <NuxtLink to="/admin/dashboard">Move to Dashboard</NuxtLink>

    </div>
</template>
