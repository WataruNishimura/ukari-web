<template lang="pug">
  .note-viewer__container
    .note-viewer__header
      img(src="/img/square/UKARI_LOGO.jpeg" alt="UKARI note profile image").note-viewer__header__img
      p.note-viewer__header__title 学生団体UKARI
      a( href="https://note.com/ukarisalon" ).note-viewer__header__link さらに見る
    .note-viewer__frame
      a(
        v-for="(post, index) in notes.items"
        :key="index"
        :href="post.link[0]"
        target="__blank"
      ).note-viewer__box
        img( v-if="post.thumb[0]" :src="post.thumb[0]" :alt="post.title[0]" )
        p.note-viewer__box__pub-date {{ getPubDate(post.pubDate[0]) }}
        p.note-viewer__box__title {{ post.title[0] }}
        p.note-viewer__box__link noteを読む
    .note-viewer__footer
</template>

<script>
export default {
  props: ['notes'],
  methods: {
    getPubDate(date) {
      return this.$moment(date).format('YYYY.MM.DD (ddd)')
    }
  }
}
</script>

<style lang="scss">
.note-viewer {
  &__container {
    position: relative;
    width: 300px;
    height: 400px;
    background: #fff;
    transform: translateY(-3px);
  }

  &__frame {
    position: absolute;
    z-index: 3;
    width: 300px;
    height: 400px;
    padding-top: 70px;
    padding-bottom: 40px;
    overflow: scroll;
  }

  &__header {
    position: absolute;
    top: 0;
    left: 0;
    z-index: 10;
    display: flex;
    align-items: flex-end;
    width: 300px;
    height: 60px;
    padding: 10px;
    background: #fff;
    border-bottom: 1px solid #e6e6e6;

    &__img {
      width: 40px;
      height: 40px;
      border-radius: 50%;
    }

    &__title {
      margin-left: 8px;
      font-size: 0.9rem;
      font-weight: 800;
      color: black;
      text-align: left;
    }

    &__link {
      margin-left: 12px;
      font-size: 0.6rem;
      color: #42c9b4;
      text-align: left;
      text-decoration: underline;
    }
  }

  &__footer {
    position: absolute;
    bottom: 0;
    left: 0;
    z-index: 10;
    width: 300px;
    height: 30px;
    background: #fff;
    border-top: 1px solid #e6e6e6;
  }

  &__box {
    display: block;
    width: 280px;
    padding: 1rem;
    margin: 10px;
    text-align: left;
    background: #fff;
    border: 1px solid #e6e6e6;
    border-radius: 4px;

    &__title {
      margin-bottom: 10px;
      font-size: 0.8rem;
      color: black;
    }

    &__pub-date {
      margin-bottom: 0.6rem;
      font-size: 0.6rem;
      color: black;
    }

    &__link {
      font-size: 0.6rem;
      color: #42c9b4;
      text-decoration: underline;
    }
  }
}
</style>
