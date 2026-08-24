<template>
  <button type="button" class="ui-menu-item" :class="{ 'ui-menu-item--selected': selected }">
    <span class="ui-menu-item__wrapper">
      <span class="ui-menu-item__label">
        {{ label }}
      </span>

      <UiIcon v-if="icon" :name="icon" size="lg" class="ui-menu-item__icon" />
    </span>
  </button>
</template>

<script setup lang="ts">
import { UiIcon } from "../ui-icon";

import type { IUiMenuItemProps } from "./types";

defineProps<IUiMenuItemProps>();
</script>

<style lang="scss">
.ui-menu-item {
  $underline-height: 3px;

  @include button-reset;

  --text-color: #{$theme-foreground};
  --color-transition: color $duration-base $easing-standard;

  & &__wrapper::before,
  & &__wrapper::after {
    content: "";
    position: absolute;
    bottom: 0;
    width: 0;
    left: 50%;
    height: $underline-height;
    background: $primary-background;
    transition: all $duration-slow $easing-standard;
  }

  &--selected &__wrapper::before,
  &--selected &__wrapper::after {
    width: 50%;
  }

  &--selected &__wrapper::before {
    transform: translateX(-100%);
  }

  &--selected,
  &:hover {
    --text-color: #{$theme-heading-foreground};
  }

  &__wrapper {
    display: flex;
    flex-flow: row nowrap;
    align-items: center;
    justify-content: center;
    gap: $spacing-3;
    padding: $spacing-5 $spacing-7;
    position: relative;
    cursor: pointer;
  }

  &__label {
    @include body-md;
    color: var(--text-color);
    transition: var(--color-transition);
  }

  &__icon {
    color: var(--text-color);
    transition: var(--color-transition);
  }
}
</style>
