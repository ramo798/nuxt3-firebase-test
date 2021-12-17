<script setup lang="ts">
const { data: test } = useFetch('/api/hello');
</script>

<template>
    <div>
        <p>{{ test }}</p>
    </div>
</template>
