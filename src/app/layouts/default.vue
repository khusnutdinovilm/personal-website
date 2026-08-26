<template>
  <div class="layout">
    <div class="layout__wrapper">
      <SiteHeader />

      <main class="layout__main">
        <div class="layout__page">
          <slot />
        </div>

        <div id="header-menu-outlet"></div>
      </main>

      <SiteFooter />
    </div>
  </div>
</template>

<script setup lang="ts">
import { SiteHeader } from "~/widgets/site-header";
import { SiteFooter } from "~/widgets/site-footer";
</script>

<style lang="scss">
.layout {
  min-height: 100dvh;
  display: flex;
  flex-direction: column;
  padding: $spacing-5;

  @include media-up("lg") {
    padding: 70px;
  }

  &__wrapper {
    flex: 1;
    display: flex;
    flex-direction: column;
    border: $border-hairline;
    border-radius: $radius-3;
    background-color: $theme-background;
    overflow: hidden;
  }

  &__main {
    position: relative;
    flex: 1;
    display: flex;
    flex-direction: column;
  }

  &__page {
    flex: 1;
    display: flex;
  }
}
</style>
