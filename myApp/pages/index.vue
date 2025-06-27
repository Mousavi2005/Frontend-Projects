<script setup>
definePageMeta({
    layout: 'default'
})

const articles = ref([1,2,3,4,5])
</script>

<template>
    <div>
        <div>
            <h1>List of Articles</h1>
        </div>
        <div v-for="(index, article) in articles" :key="index">
            <h2>Article - {{ article }}</h2>
            <p>
                lorem dummy text
            </p>
        </div>
        <br>
    </div>
</template>
