<template lang="pug">
  header.header
    label(for="header-button").header__button
      fa(:icon="faCaretDown" style="font-size: 20px")
    input(type="checkbox" id="header-button").header__button__checkbox
    nav.header__inner
      ul.header__container
        nuxt-link(to="/").header__item.ukari 
          img(src="/img/logos/UKARI_LOGO.svg", alt="UKARI Logo")
        nuxt-link(to="/salon").header__item.salon
          img(src="/img/logos/UKARI-SALON_LOGO.svg", alt="UKARI SALON Logo")
        nuxt-link(to="/labo").header__item.labo
          img(src="/img/logos/U-LABO_LOGO.svg", alt="U-LABO Logo")
        nuxt-link(to="/steppinup").header__item.steppinup
          img(src="/img/logos/SteppinUp_LOGO.svg", alt="Steppin'Up Logo")
        nuxt-link(to="/dennoutai").header__item.dennoutai
          img(src="/img/logos/DENNOUAI_LOGO.svg", alt="DENNOUTAI Logo")
</template>

<script>
import { faCaretDown } from '@fortawesome/free-solid-svg-icons'

export default {
  computed: {
    faCaretDown() {
      return faCaretDown
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

  input {
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
      transition: 1s ease;
      transform: translateY(-100vh);
    }

    &__button__checkbox:checked + &__inner {
      height: 100vh;
      transform: translate(0);
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

    &__button {
      position: absolute;
      top: 30px;
      right: 30px;
      z-index: 11;
      display: flex;
      align-items: center;
      justify-content: center;
      width: 30px;
      height: 30px;
      background: $text-color;
      border-radius: 50%;

      svg {
        transition: 0.8s ease;
      }

      &:hover svg,
      &:active svg,
      &:checked svg {
        transform: rotateZ(180deg);
      }

      &__checkbox {
        display: none;
      }
    }
  }
}
</style>
