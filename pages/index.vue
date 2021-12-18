<script setup lang="ts">
// const { data } = useAsyncData('getTest', () => $fetch('/api/gettest'));
const { data: tasks } = await useFetch('/api/gettest');
// const foo = useFoo();
// console.log(foo);
</script>

<template>
    <div>
        <div v-for="task in tasks" :key="task.id">
            <p>{{ task.id }}</p>
            <p>{{ task.name }}</p>
        </div>
        <NuxtLink to="/authpage">Home page</NuxtLink>
    </div>
</template>
