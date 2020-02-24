<template lang="pug">
  div
    calendar(
      defaultView = "dayGridMonth"
      :events = "events"
      :googleCalendarApiKey = "googleCalendarApiKey"
      :plugins="plugins"
    )
</template>

<script>
import Calendar from '@fullcalendar/vue'
import dayGridPlugin from '@fullcalendar/daygrid'
import GoogleCalendarPlugin from '@fullcalendar/google-calendar'

export default {
  components: {
    Calendar
  },
  props: {
    calendarId: {
      type: String
    }
  },
  data() {
    return {
      plugins: [dayGridPlugin, GoogleCalendarPlugin],
      googleCalendarApiKey: 'AIzaSyCt-st86mf6R7fZ0j03w0J8ZLqV_GDCxM0',
      events: {
        googleCalendarId: this.calendarId
      }
    }
  }
}
</script>

<style lang="scss">
@import '@fullcalendar/core/main.css';
@import '@fullcalendar/daygrid/main.css';
</style>
