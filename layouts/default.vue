<template lang="pug">
  div
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
*,
*::before,
*::after {
  padding: 0;
  margin: 0;
}

html {
  background: #1c1b1b;
}

a {
  text-decoration: none;
}
</style>
