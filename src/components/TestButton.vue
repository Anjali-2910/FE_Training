<template>
  <button :disabled="isDisabled">
    <div v-if="loading" class="loading-btn"></div>
    <span v-else>{{ text }}</span>
  </button>
</template>

<script>
export default {
  props: {
    text: {
      type: String,
      default: "",
    },
    loading: {
      type: Boolean,
      default: false,
    },
    isDisabled: {
      type: Boolean,
      default: false,
    },
    height:{
        type:String,
        default: "",
    },
    width:{
        type:String,
        default: "",
    }
  },
};
</script>

<style scoped>
.loading-btn {
    background: #0059df;
  font-weight: 700;
  font-size: 24px;
  border-style: none;
  width: 260;
  height: 40px;
  top: 263px;
  left: -1337px;
  border-radius: 2px;
  
}
</style>
