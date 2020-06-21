<template lang="pug">
  header.header
    div( :class="{'header-toggle-button--reversed': isHeaderActive}" @click="toggleHeader").header-toggle-button
      fa(:icon="faCaretDown")
    nav(:class="{'header__inner--active': isHeaderActive}").header__inner
      ul.header__container
        nuxt-link(to="/" @click.native="toggleHeader").header__item.ukari 
          img(src="/img/logos/UKARI_LOGO.svg", alt="UKARI Logo")
        nuxt-link(to="/salon" @click.native="toggleHeader").header__item.salon
          img(src="/img/logos/UKARI-SALON_LOGO.svg", alt="UKARI SALON Logo")
        nuxt-link(to="/labo" @click.native="toggleHeader").header__item.labo
          img(src="/img/logos/U-LABO_LOGO.svg", alt="U-LABO Logo")
</template>

<script>
import { faCaretDown } from '@fortawesome/free-solid-svg-icons'

export default {
  data() {
    return {
      isHeaderActive: false
    }
  },
  computed: {
    faCaretDown() {
      return faCaretDown
    }
  },
  methods: {
    toggleHeader() {
      const html = document.getElementsByTagName('html')[0]
      const body = document.getElementsByTagName('body')[0]
      if (window.innerWidth <= 768) {
        this.isHeaderActive
          ? (this.isHeaderActive = false)
          : (this.isHeaderActive = true)

        html.classList.toggle('scroll-fixed')
        body.classList.toggle('scroll-fixed')
      }
    }
  }
}
</script>

<style lang="scss">
.header {
  position: absolute;
  display: flex;
  align-items: center;
  width: 100%;
  height: 120px;

  &__inner {
    width: 100%;
  }

  &__container {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
  }

  &__item {
    margin: 2px 0;

    img {
      height: 1.2rem;
      margin: auto 0;
    }
  }

  &__item + &__item {
    margin-left: 2rem;
  }

  .header-toggle-button {
    display: none;
  }
}
</style>

<style lang="scss">
//under 768px
@media screen and (max-width: 768px) {
  .header {
    position: absolute;

    &__inner {
      position: absolute;
      top: 0;
      left: 0;
      z-index: 10;
      width: 100%;
      height: 0;
      background: $ukari-black-color;
      transition: all 0.5s ease;
      transform: translateY(-100vh);

      &--active {
        height: 100vh;
        transform: translateY(0vh);
      }
    }

    &__container {
      display: flex;
      flex-direction: column;
      flex-wrap: wrap;
      align-items: center;
      justify-content: center;
      height: 100%;
    }

    &__item {
      margin: 2px 0;

      img {
        height: 1.2rem;
        margin: auto 0;
      }
    }

    &__item + &__item {
      margin-top: 1.2rem;
      margin-left: 0rem;
    }

    .header-toggle-button {
      position: absolute;
      top: 2rem;
      right: 2rem;
      z-index: 100;
      display: block;
      font-size: 30px;
      color: $text-color;
      transition: all 0.5s ease;

      &--reversed {
        transform: rotateZ(-180deg);
      }
    }
  }
}
</style>
