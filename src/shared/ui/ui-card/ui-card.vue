<template>
  <article class="ui-card">
    <header class="ui-card__header">
      <UiImage :src="src" :alt="alt" class="ui-card__image" object-fit="cover" />

      <div v-if="$slots['icon-box']" class="ui-card__icon-box">
        <slot name="icon-box" />
      </div>
    </header>

    <div class="ui-card__text-container">
      <slot name="text-container" />
    </div>
  </article>
</template>

<script setup lang="ts">
import { UiImage } from "../ui-image";
import type { IUiCardProps } from "./types";

defineProps<IUiCardProps>();
</script>

<style lang="scss">
.ui-card {
  $card-header-height: 144px;

  &__header {
    height: $card-header-height;
    position: relative;
    overflow: hidden;
    border-top-left-radius: $radius-4;
    border-top-right-radius: $radius-4;
  }

  &__image {
    width: 100%;
    height: 100%;
  }

  &__text-container {
    border: 1px solid $theme-surface-stroke;
    border-bottom-left-radius: $radius-4;
    border-bottom-right-radius: $radius-4;
    border-top: none;
    padding: $spacing-7;

    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: $spacing-6;
    background-color: $theme-surface-background;
  }
}
</style>
