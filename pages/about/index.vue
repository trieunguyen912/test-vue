<script setup>
definePageMeta({
  layout: "custom",
});
const { sayHello } = useUtils();
sayHello();
</script>

<template>
  <div>
    <h1>about</h1>
    <img src="image/BG.svg" alt="bg_page" />
  </div>
</template>
