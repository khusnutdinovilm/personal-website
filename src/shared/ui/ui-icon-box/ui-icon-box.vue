<template>
  <div class="ui-icon-box" :style="iconStyles">
    <UiIcon :name="iconName" size="md" class="ui-icon-box__icon" />
  </div>
</template>

<script setup lang="ts">
import { UiIcon } from "../ui-icon";

import type { IUiIconBoxProps } from "./types";

const props = defineProps<IUiIconBoxProps>();

const iconStyles = computed(() => ({
  "--icon-color": props.iconColor,
  "--box-color": props.boxColor,
}));
</script>

<style lang="scss">
.ui-icon-box {
  --icon-color: transparent;
  --box-color: transparent;

  @include square($size-4);

  border-radius: $radius-2;
  padding: $spacing-2;
  background-color: var(--box-color);

  &__icon {
    color: var(--icon-color);
  }
}
</style>
