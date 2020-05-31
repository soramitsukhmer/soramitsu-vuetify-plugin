<template>
  <button v-bind="$attrs" v-on="$listeners">
    <slot>My awesome button</slot>
  </button>
</template>

<script>
export default {
  name: 'Button',
  mounted () {
    console.log('Button', this)
  }
}
</script>
