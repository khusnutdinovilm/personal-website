<template>
  <span class="ui-icon">
    <Icon :name="name" class="ui-icon__icon" />
  </span>
</template>

<script setup lang="ts">
import type { IUiIconProps } from "./types";

defineProps<IUiIconProps>();
</script>

<style lang="scss">
.ui-icon {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  &__icon {
    width: 100%;
    height: 100%;
    transition: inherit;
  }
}
</style>
