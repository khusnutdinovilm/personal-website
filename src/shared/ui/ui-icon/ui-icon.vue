<template>
  <span class="ui-icon" :class="`ui-icon--${size}`">
    <Icon :name="name" class="ui-icon__icon" />
  </span>
</template>

<script setup lang="ts">
import type { IUiIconProps } from "./types";

const { size = "md" } = defineProps<IUiIconProps>();
</script>

<style lang="scss">
.ui-icon {
  display: inline-flex;
  align-items: center;
  justify-content: center;

  &--sm {
    @include square($icon-sm);
  }

  &--md {
    @include square($icon-md);
  }

  &--lg {
    @include square($icon-lg);
  }

  &__icon {
    width: 100%;
    height: 100%;
    transition: inherit;
  }
}
</style>
