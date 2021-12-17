<script setup lang="ts">
// const { data } = useAsyncData('getTest', () => $fetch('/api/gettest'));
const { data: tasks } = await useFetch('/api/gettest');
</script>

<template>
    <div>
        <p>test</p>
        <div v-for="task in tasks" :key="task.id">
            <p>{{ task.id }}</p>
            <p>{{ task.name }}</p>
        </div>
    </div>
</template>
