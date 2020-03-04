<template lang="pug">
  .page.labo
    section.page__section
      h1.page__title U-LABO
    section.page__section
      h2.page__subtitle クラウドファンディング挑戦中
      p 現在、U-LABOに開設に向けて、クラウドファンディングに挑戦中です！
      a( href="https://camp-fire.jp/projects/view/240557" target="_blank" rel="noopener noreferrer").page__link 詳細はこちらから
    section.page__section
      h2.page__subtitle 利用方法・料金
      p 未定
    section.page__section
      h2.page__subtitle スケジュール
      full-calendar(:calendarId="calendarId").schedule-calendar  
</template>

<script>
import Meta from '@/assets/mixins/meta'

export default {
  mixins: [Meta],
  data() {
    return {
      calendarId: 'ukari.salon@gmail.com',
      meta: {
        title: 'U-LABO',
        description:
          'U-LABOは「好奇心が交差する社会実験場」がコンセプトのUKARIが運営するコミュニティスペースです。',
        type: 'article',
        url: 'https://ukari.hokkaido.jp/labo',
        image: 'https://ukari.hokkaido.jp/img/ogp/ogp_labo.jpg'
      }
    }
  }
}
</script>
