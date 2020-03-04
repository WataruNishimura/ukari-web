<template lang="pug">
  div.page.ukari
    section.page__section
      h1.page__title UKARI
    section.page__section
      h2.page__subtitle 体制図
      img(:src="diagramImage").ukari-diagram
</template>

<script>
export default {
  data() {
    return {
      diagramImage: require('@/assets/img/diagram.jpeg')
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
</style>

<style lang="scss" scoped>
.page-title,
.page-subtitle {
  color: #f7b82c;
}
</style>
