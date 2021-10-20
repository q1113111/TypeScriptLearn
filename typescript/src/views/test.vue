<template>
  {{ a='sam' }}
</template>

<script setup lang="ts">
import { ref } from 'vue'
const a = ref(0)
a.value = 'sam'
</script>
