<template lang="pug">
  div.page.ukari
    section.page__section
      h1.page__title
        img(src="/img/logos/UKARI_LOGO.svg" alt="UKRAI Logo")
    section.page__section
      h2.page__subtitle About UKARI
    section.page__section
      h2.page__subtitle 代表挨拶
    section.page__section
      h2.page__subtitle 体制図
      img(:src="diagramImage").ukari-diagram
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
          note-viewer( :notes="notes" )
</template>

<script>
import ps from 'xml2js'
import NoteViewer from '@/components/NoteViewer'

export default {
  components: {
    NoteViewer
  },
  async asyncData(context) {
    const getThumnails = (data) => {
      const thumbnails = data.match(/https(.|\s)*?(jpg|png|gif|jpeg)/gi)
      return thumbnails !== null && thumbnails !== undefined
        ? Object.values(thumbnails)
        : false
    }
    const xml = await context.$axios.$get('https://note.com/ukarisalon/rss')
    const json = {
      items: []
    }
    ps.parseString(xml, (message, xmlres) => {
      json.items = xmlres.rss.channel[0].item
    })
    json.items.forEach((data) => {
      const thumb = getThumnails(data.description[0])
      Object.assign(data, { thumb })
    })
    return { notes: json }
  },
  data() {
    return {
      diagramImage: require('@/assets/img/diagram.jpeg'),
      notes: null
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
</style>
