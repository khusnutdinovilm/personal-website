<template>
  <div class="site-header">
    <SiteHeaderDesktop class="site-header__desktop"></SiteHeaderDesktop>

    <SiteHeaderMobile class="site-header__mobile"></SiteHeaderMobile>
  </div>
</template>

<script setup lang="ts">
import SiteHeaderDesktop from "./site-header-desktop.vue";
import SiteHeaderMobile from "./site-header-mobile.vue";
</script>

<style lang="scss">
.site-header {
  &__desktop {
    display: none;

    @include media-up($breakpoint-nav) {
      display: block;
    }
  }

  &__mobile {
    display: block;

    @include media-up($breakpoint-nav) {
      display: none;
    }
  }
}
</style>
