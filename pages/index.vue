<template lang="pug">
  div.page.ukari
    section.page__section
      h1.page__title
        img(src="/img/logos/UKARI_LOGO.svg" alt="UKRAI Logo" decoding="async" loading="lazy")
      a(href="https://note.com/ukarisalon/n/n35d975b99015" target="_blank" rel="noreferrer noopener").page__text.toppage-anounce 新型コロナウイルス感染拡大ならびに緊急事態宣言を踏まえた対応について（外部リンク）
    section.page__section
      h2.page__subtitle About UKARI
      p.page__text UKARIは「挑戦者のベースキャンプ」を理念とし、札幌を始めとして多くの高校生によって作りだされるコミュニティです。
    section.page__section
      h2.page__subtitle 創設者挨拶
      p.page__text 今から2年前、高校1年生の2月に学生団体UKARI を立ち上げました。当初の人数は5人、小さな交流イベントを行うサークルのような団体でした。
      p.page__text それから2年経ち、多くの大人の方に応援をいただく中でUKARIは、70人を超えるメンバーと共に高校生向けのコミュニティスペースを運営し、数日にまたがる学生フェスを企画するような大きな団体になっていきました。
      p.page__text UKARIの理念は「挑戦者のベースキャンプ」です。頑張りたい、頑張る、頑張った、頑張ってみたい人、それらが交差して作り出すコミュニティを、札幌に作っていって欲しいと願っています。
      p.page__text--author UKARI 創設者 種市慎太郎
    section.page__section
      h2.page__subtitle 体制図
      img(:src="diagramImage" alt="UKARI体制図" decoding="async" loading="lazy").ukari-diagram
    section.page__section
      h2.page__subtitle SNS
      .sns-group__container
        .sns-group__box
          h3.page__small-title Twitter
          <a class="twitter-timeline" data-lang="ja" data-width="300" data-height="400" data-theme="dark" href="https://twitter.com/UKARI2018?ref_src=twsrc%5Etfw">Tweets by UKARI2018</a> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
        .sns-group__box
          h3.page__small-title Facebook
          <iframe src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2FUKARI2018%2F&tabs=timeline&width=300&height=400&small_header=true&adapt_container_width=true&hide_cover=false&show_facepile=false&appId" width="300" height="400" style="overflow:hidden;border:none" scrolling="no" frameborder="0" allowTransparency="true" allow="encrypted-media"></iframe>
        .sns-group__box 
          h3.page__small-title note
          noteViewer(:notes="jsonData")
</template>

<script>
import diagramImage from '@/assets/img/diagram.jpeg'
import jsonData from '@/static/_nuxt/api/index.json'
import noteViewer from '@/components/NoteViewer'

export default {
  components: {
    noteViewer
  },
  data() {
    return {
      diagramImage
    }
  },
  computed: {
    jsonData() {
      return jsonData[0].items[0]
    }
  },
  head() {
    return {
      title: 'トップページ'
    }
  }
}
</script>

<style lang="scss">
.ukari-diagram {
  width: 90%;
  object-fit: cover;
}

.sns-group {
  &__container {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
  }

  &__box {
    width: 300px;
    margin: 8px;
    text-align: center;

    .page__small-title {
      margin-top: 2rem;
    }
  }
}
</style>

<style lang="scss" scoped>
.page-title,
.page-subtitle {
  color: #f7b82c;
}

.toppage-anounce {
  margin-top: 4rem;
  font-size: 1.2rem;
  font-weight: 800;
  text-align: center;
  text-decoration: underline;
}
</style>
