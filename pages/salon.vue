<template lang="pug">
  div.page.ukari
    section.page__section
      h1.page__title UKARI SALON
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
      full-calendar(:calendarId="calendarId").schedule-calendar
</template>

<script>
export default {
  data() {
    return {
      calendarId: 'ukari.salon@gmail.com'
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
}
</style>
