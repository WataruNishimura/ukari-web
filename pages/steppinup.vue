<template lang="pug">
  .page.steppinup
    section.page__section
      h1.page__title
        img(src="/img/logos/SteppinUp_Logo.svg", alt="Steppin'Up Logo" decoding="async" loading="lazy")
    section.page__section
      p.steppinup__ready-text Coming soon...
</template>

<script>
import Meta from '@/assets/mixins/meta'

export default {
  mixins: [Meta],
  data() {
    return {
      meta: {
        title: 'SteppinUp',
        description: '現在ウェブサイト準備中です。',
        type: 'article',
        url: 'https://ukari.hokkaido.jp/steppinup',
        image: 'https://ukari.hokkaido.jp/img/ogp/ogp_steppinup.jpg'
      }
    }
  }
}
</script>

<style lang="scss">
.steppinup__ready-text {
  font-size: 2rem;
}
</style>
