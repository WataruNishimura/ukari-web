<template lang="pug">
  div
    calendar(
      defaultView = "dayGridMonth"
      :events = "events"
      :googleCalendarApiKey = "googleCalendarApiKey"
      :plugins="plugins"
      :header="header"
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
      },
      header: {
        left: '',
        center: 'prev title next',
        right: 'today'
      }
    }
  }
}
</script>

<style lang="scss">
@import '@fullcalendar/core/main.css';
@import '@fullcalendar/daygrid/main.css';

.fc-center {
  display: flex;
}

.fc-button,
.fc-button:focus,
.fc-button:hover,
.fc-button:active,
.fc-button:disabled,
.fc-button-primary:not(:disabled):active,
.fc-button-primary:not(:disabled).fc-button-active {
  color: inherit;
  background: none;
  border: 1px solid;
}

.fc-unthemed td.fc-today {
  background: rgba($color: #fcf8e3, $alpha: 0.3);
}

.fc-today-button {
  @media screen and (max-width: 375px) {
    display: none;
  }
}
</style>
