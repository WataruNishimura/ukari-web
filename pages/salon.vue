<template lang="pug">
  div.page.ukari
    section.page__section
      h1.page__title 
        img(src="/img/logos/UKARI-SALON_LOGO.svg" alt="UKARI SALON Logo" decoding="async" loading="lazy")
    section.page__section
      h2.page__subtitle About UKARI SALON
      p.page__text #[span.page__text--bold 「札幌では自己実現が叶わないから、いつか上京してからやりたいことをしよう。]
      p.page__text #[span.page__text--bold 「学生には力も機会もないから、今はやりたいことを我慢しなくちゃ。」]
      p.page__text という声に対抗し、学生の自己実現へのハードルを下げ、挑戦者へのベースキャンプとして日本有数の環境を作るべく活動しています。
      h3.page__small-title 活動内容
      .salon-activity
        .salon-activity__container
          h4.salon-activity__title 毎月開催のミートアップ
          p.salon-activity__text SALONメンバー内の親睦を深め、新たな仲間を見つけるために月に１回、ミートアップを開催します。
        .salon-activity__container
          h4.salon-activity__title 有志開催のイベント＆企画
          p.salon-activity__text U-LABOや13LABOのイベントスペースとU-LABOに設定予定の様々な設備を利用したイベントの運営・企画をSALON内から有志企画として行います。
        .salon-activity__container
          h4.salon-activity__title 大規模オンラインコミュニティ
          p.salon-activity__text SALONメンバー限定のLINEグループとSlackを活用した大規模なコミュニティがあります。
          p.salon-activity__text そこでは、高校生同士が互いの情報を共有し、新たな交流を生むことができます。
    section.page__section
      h2.page__subtitle 参加申込フォーム
      <iframe class="google-form" src="https://docs.google.com/forms/d/e/1FAIpQLSeGTynIebZ4kesARtvysGke4Djlg01OoB6Fn75MFHNs7tGn5w/viewform?embedded=true" frameborder="0" marginheight="0" marginwidth="0">読み込んでいます…</iframe>
    section.page__section
      h2.page__subtitle スケジュール
      full-calendar(:calendarId="calendarId").schedule-calendar.schedule-calendar--salon
</template>

<script>
import Meta from '@/assets/mixins/meta'

export default {
  mixins: [Meta],
  data() {
    return {
      calendarId: 'ukari.salon@gmail.com',
      meta: {
        title: 'UKARI SALON',
        description:
          'UKARI SALONは学生の自己実現へのハードルを下げ、挑戦者へのベースキャンプとして日本有数の環境を作るべく活動しています。',
        type: 'article',
        url: 'https://ukari.hokkaido.jp/salon',
        image: 'https://ukari.hokkaido.jp/img/ogp/ogp_salon.jpg'
      }
    }
  }
}
</script>

<style lang="scss">
.salon-activity {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  text-align: center;

  &__container {
    width: 260px;
    margin: 2rem;
  }

  &__title {
    position: relative;
    margin: 2rem 0;

    &:before {
      position: absolute;
      top: 2.4rem;
      left: 50%;
      width: 100%;
      height: 1px;
      content: '';
      border-top: solid 0.5px;
      transform: translateX(-50%);
    }
  }

  &__text {
    margin-top: 1rem;
    line-height: 1.5;
  }
}

.schedule-calendar {
  width: 50%;

  @media screen and (max-width: 768px) {
    width: 90%;
  }

  &--salon {
    .fc-content {
      font-weight: 800;
      color: $ukari-black-color;
      background: $ukari-color;
    }

    .fc-event {
      border-color: $ukari-color;
    }
  }
}
</style>
