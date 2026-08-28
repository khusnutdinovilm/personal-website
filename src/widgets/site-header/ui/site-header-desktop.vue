<template>
  <header class="site-header-desktop">
    <div class="site-header-desktop__wrapper">
      <div class="site-header-desktop__logo-container">
        <SiteLogo />

        <div class="site-header-desktop__navigate">
          <SiteNav :items="NAV_ITEMS" item-class="site-header-desktop__menu-item" />
        </div>
      </div>

      <SiteNav :items="CONTACT_ITEMS" item-class="site-header-desktop__menu-item" />
    </div>
  </header>
</template>

<script setup lang="ts">
import { CONTACT_ITEMS, NAV_ITEMS } from "../model/nav";

import SiteLogo from "./site-logo.vue";
import SiteNav from "./site-nav.vue";
</script>

<style lang="scss">
.site-header-desktop {
  &__wrapper {
    border-bottom: $border-hairline;

    display: flex;
    flex-flow: row nowrap;
    align-items: stretch;
    justify-content: space-between;
  }

  &__logo-container {
    display: flex;
    flex-flow: row nowrap;
    align-items: stretch;
    justify-content: space-between;
    gap: $spacing-10 * 2;
  }

  &__navigate {
    display: flex;
    flex-flow: row nowrap;
    align-items: stretch;

    & .site-header-desktop__menu-item:last-child {
      border-right: $border-hairline;
    }
  }

  &__menu-item {
    display: flex;
    border-left: $border-hairline;
  }

  & .ui-menu-item {
    --menu-item-underline-offset: -1px;
  }
}
</style>
