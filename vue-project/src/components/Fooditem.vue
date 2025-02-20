<script>
export default {
  data() {
    return {
      message: "Ola mundo!",
      count: 0,
    };
  },
};
</script>
<template>
  <h1>{{ message }}</h1>
  <button @click="count++">You clicked me {{ count }} times.</button>
  <h1>apples</h1>
</template>
<style></style>
