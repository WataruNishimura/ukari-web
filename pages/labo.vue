<template lang="pug">
  .page.labo
    section.page__section
      h1.page__title
        img(src="/img/logos/U-LABO_Logo.svg", alt="U-LABO logo")
    section.page__section
      h2.page__subtitle About U-LABO
      h3.page__small-title 「好奇心が交差する社会実験場」
      p.page__text ULABOは高校生が運営するコミュニティースペースです。コンセプトは「好奇心が交差する社会実験場」
      p.page__text 高校生同士が互いに助け合い好奇心をぶつけ会えるコミュニティースペースを目指しています。
      p.page__text 高校生のやってみたいを高校生が共に発見し実現させていき、イベントを開き人を呼び込んでまた新しい出会いと経験を広げて仲間を増やしていける場にしたいです。学校でも家庭でもない第3のコミュニティとなり放課後の時間を高校生の輝ける環境を作っていきます。
    section.page__section
      h2.page__subtitle クラウドファンディング
      p.page__text U-LABO 開設に向けたクラウドファンディングが終了しました。皆様のご支援誠にありがとうございました。
      p.page__text 200%以上のご支援をいただき、ネクストゴールまで達成することができました。
      h3.page__small-title 主にご支援くださった方々
      a( href="https://camp-fire.jp/projects/view/240557" target="_blank" rel="noopener noreferrer").page__button 詳細はこちらから
    section.page__section
      h2.page__subtitle 利用方法・料金
      p 未定
    section.page__section
      h2.page__subtitle アクセス
      p 地下鉄南北線北12条駅 徒歩３分
      <iframe class="labo-google-map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2914.3468105242464!2d141.34638540093843!3d43.07620362253294!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5f0b29d9949e59bb%3A0x95d230ffc88647c!2sU-LABO!5e0!3m2!1sja!2sjp!4v1585771459176!5m2!1sja!2sjp" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
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
      calendarId: 'b4v0e4jv19sr4v7t4i8c8thnnc@group.calendar.google.com',
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

.labo-google-map {
  width: 50%;
  height: 350px;
  margin: 2rem 0;

  @media screen and (max-width: 768px) {
    width: 90%;
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
