<template>
  <NuxtLink :to="homePageParams" class="site-logo">
    <span class="site-logo__text">
      {{ SITE_NAME }}
    </span>
  </NuxtLink>
</template>

<script setup lang="ts">
import { homePageParams, SITE_NAME } from "../model/nav";
</script>

<style lang="scss">
.site-logo {
  padding: $spacing-5 $spacing-6;
  display: flex;
  align-items: center;

  &__text {
    @include body-md;
    color: $theme-foreground;
  }
}
</style>
