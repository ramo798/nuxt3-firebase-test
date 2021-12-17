<script setup lang="ts">
const { data } = await useAsyncData('hello', () => $fetch('/api/users'));
</script>

<template>
    <div>
        <p>hello</p>
    </div>
</template>
