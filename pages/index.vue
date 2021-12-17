<script setup lang="ts">
const { data } = useAsyncData('getTest', () => $fetch('/api/gettest'));
</script>

<template>
    <div>
        <p>test</p>
        <div v-for="task in data" :key="task.id">
            <p>{{ task.id }}</p>
            <p>{{ task.name }}</p>
        </div>
    </div>
</template>
