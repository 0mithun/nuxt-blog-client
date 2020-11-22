<template>
  <button
    class="btn"
    :class="{[`btn-${type}`]: true, ['btn-block']: block, [`btn-${size}`]: true}"
    :type="nativeType"
    :disabled="loading"
    >
    <span v-if="loading">
      <i class="fas fa-spinner fa-spin"></i>
    </span>
   <slot></slot>

  </button>
</template>

<script>
  export default {
    name:'base-button',
    props:{
      type:{
        type: String,
        default: 'primary'
      },
      nativeType:{
        type: String,
        default: 'submit'
      },
      loading:{
        type: Boolean,
        default: false
      },
      block:{
        type: Boolean,
        default: false
      },
      size: {
        type: String,
        default: 'md'
      }
    },

  }
</script>

<style lang="scss" scoped>

</style>
