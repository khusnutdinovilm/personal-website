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
    </div>
  </div>
</template>

<script setup lang="ts">
import { SiteHeader } from "~/widgets/site-header";
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

  &__page {
    display: flex;
    flex-direction: column;
    gap: $spacing-6;
    padding: $spacing-5;

    & h1 {
      @include heading-h1;
      color: $theme-foreground;
    }
  }

  &__main {
    position: relative;
    flex: 1;
  }
}
</style>
