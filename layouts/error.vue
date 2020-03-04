<template lang="pug">
.error-page
  h1(
    v-if="error.statusCode === 404"
  ) UKARIのメンバーが音速で探しましたが、ページは見つかりませんでした...
    br
    | Error Status Code: {{ error.statusCode }}
  h1(
    v-else-if="error.statusCode === 403"
  ) おっと！よくこのページを見つけましたね...でも、あなたにはこのページを見る権限がないみたいです。
    br
    | Error Status Code: {{ error.statusCode }}
  h1(
    v-else
  ) あなたはWebの不思議な世界に迷い込んでしまったようです...下のエラーコードをお伝えください...
    br
    | もちろんこのことは秘密ですよ...
    br
    | Error Status Code {{ error.statusCode }}
</template>

<script>
export default {
  props: {
    error: {
      type: Object,
      default: null
    }
  }
}
</script>

<style lang="scss">
.error-page {
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 100%;
  min-height: 100vh;
  padding: 10vh 10vw;
  color: $ukari-color;
  text-align: center;
  background: $ukari-black-color;

  @media screen and (max-width: 768px) {
    font-size: 0.8rem;
  }
}
</style>
