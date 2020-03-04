<template lang="pug">
  .page.dennoutai
    section.page__section
      h1.page__title 電脳隊
    section.page__section
      h2.page__subtitle 参加申込フォーム
      <iframe class="google-form" src="https://docs.google.com/forms/d/e/1FAIpQLSd2_I_gNvLHYHSGFO2wBHXotbRzlVifxTQvvnCiSvpign8qJQ/viewform?embedded=true" frameborder="0" marginheight="0" marginwidth="0">読み込んでいます…</iframe>
</template>

<script>
import Meta from '@/assets/mixins/meta'

export default {
  mixins: [Meta],
  data() {
    return {
      meta: {
        title: '電脳隊',
        description: '現在ウェブサイト準備中です。',
        type: 'article',
        url: 'https://ukari.hokkaido.jp/dennoutai',
        image: 'https://ukari.hokkaido.jp/img/ogp/ogp_dennoutai.jpg'
      }
    }
  }
}
</script>
