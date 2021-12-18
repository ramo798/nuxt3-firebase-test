<script setup lang="ts">
// const { data: tasks } = await useFetch('/api/gettest');

const f = useFirestore();
// aaa.testDo();
</script>

<template>
    <div>
        <p @click="f.testDo">Current : {{ f }}</p>

        <NuxtLink to="/authpage">Home page</NuxtLink>
    </div>
</template>
