<template lang="pug">
  div.container
    common-header
    nuxt
    common-footer
</template>

<script>
import CommonHeader from '@/components/Header'
import CommonFooter from '@/components/Footer'

export default {
  components: {
    CommonHeader,
    CommonFooter
  }
}
</script>

<style lang="scss">
.container {
  position: relative;
}
</style>
