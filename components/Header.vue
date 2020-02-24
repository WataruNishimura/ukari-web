<template lang="pug">
  header.header
    nav.header__inner
      ul.header__container
        nuxt-link(to="/").header__item UKARI
        nuxt-link(to="/salon").header__item UKARI SALON
        nuxt-link(to="/labo").header__item U-LABO
        nuxt-link(to="/steppinup").header__item Steppin'Up
        nuxt-link(to="/dennoutai").header__item 電脳隊
</template>

<style lang="scss">
.header {
  display: flex;
  align-items: center;
  width: 100%;
  height: 120px;

  &__inner {
    width: 100%;
  }

  &__container {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  &__item + &__item {
    margin-left: 2rem;
  }
}
</style>
