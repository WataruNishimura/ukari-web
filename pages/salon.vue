<template lang="pug">
  div.common-container
    h1.page-title UKARI SALON
    h2.page-subtitle 参加申込フォーム
    h2.page-subtitle スケジュール
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

<style lang="scss" scoped>
.page-title,
.page-subtitle {
  color: #f7b82c;
}

.schedule-calendar {
  width: 50%;

  @media screen and (max-width: 768px) {
    width: 90%;
  }
}
</style>
