<template lang="pug">
  header.header
    nav.header__inner
      ul.header__container
        nuxt-link(to="/").header__item.ukari UKARI
        nuxt-link(to="/salon").header__item.salon UKARI SALON
        nuxt-link(to="/labo").header__item.labo U-LABO
        nuxt-link(to="/steppinup").header__item.steppinup Steppin'Up
        nuxt-link(to="/dennoutai").header__item.dennoutai 電脳隊
</template>

<style lang="scss">
.header {
  position: absolute;
  display: flex;
  align-items: center;
  width: 100%;
  height: 120px;
  font-weight: 800;

  @media screen and (max-width: 768px) {
    height: 80px;
  }

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
  }

  &__item + &__item {
    margin-left: 2rem;
  }
}
</style>

<style lang="scss" scoped></style>
