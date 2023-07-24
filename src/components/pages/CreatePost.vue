<template>

  <h1>Here header of App Logo</h1>
  <textarea name="post" id="post" cols="30" rows="10"></textarea>
  <TestButton :loading="true" >ADD POST</TestButton>
</template>

<script>
import TestButton from '../TestButton.vue';
export default {
  components: { TestButton },
};
</script>

<style scoped>
textarea {
  background: #d9d9d9;
  border-style: none;
}
</style>
