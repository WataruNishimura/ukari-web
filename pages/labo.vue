<template lang="pug">
  .page.labo
    section.page__section
      h1.page__title
        img(src="/img/logos/U-LABO_Logo.svg", alt="U-LABO logo")
    section.page__section
      h2.page__subtitle About U-LABO
      p.page__text ULABOは高校生が運営するコミュニティースペースです。コンセプトは「好奇心が交差する社会実験場」
      p.page__text 高校生同士が互いに助け合い好奇心をぶつけ会えるコミュニティースペースを目指しています。
      p.page__text 高校生のやってみたいを高校生が共に発見し実現させていき、イベントを開き人を呼び込んでまた新しい出会いと経験を広げて仲間を増やしていける場にしたいです。学校でも家庭でもない第3のコミュニティとなり放課後の時間を高校生の輝ける環境を作っていきます。
      h3.page__small-title 「好奇心が交差する社会実験場」
    section.page__section
      h2.page__subtitle クラウドファンディング挑戦中
      p 現在、U-LABOに開設に向けて、クラウドファンディングに挑戦中です！
      a( href="https://camp-fire.jp/projects/view/240557" target="_blank" rel="noopener noreferrer").page__button 詳細はこちらから
    section.page__section
      h2.page__subtitle 利用方法・料金
      p 未定
    section.page__section
      h2.page__subtitle スケジュール
      full-calendar(:calendarId="calendarId").schedule-calendar.schedule-calendar--labo  
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

<style lang="scss">
.page {
  &__button {
    &:hover {
      color: $ukari-black-color;
      background: $labo-color;
    }
  }
}

.schedule-calendar {
  &--labo {
    .fc-content {
      font-weight: 800;
      color: $ukari-black-color;
      background: $labo-color;
    }

    .fc-event {
      border-color: $labo-color;
    }
  }
}
</style>
