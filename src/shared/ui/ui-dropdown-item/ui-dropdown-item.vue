<template>
  <button type="button" :class="dropdownItemClasses" :style="dropdownItemStyles" @click="onClick">
    <span class="ui-dropdown-item__wrapper">
      <UiIcon
        v-if="expandable"
        name="ri:arrow-drop-right-line"
        size="sm"
        class="ui-dropdown-item__arrow-icon"
      />

      <span class="ui-dropdown-item__label">
        <UiIcon v-if="icon" :name="icon" size="sm" class="ui-dropdown-item__label-icon" />

        <span class="ui-dropdown-item__label-text">
          {{ label }}
        </span>
      </span>
    </span>
  </button>
</template>

<script setup lang="ts">
import { UiIcon } from "../ui-icon";

import type { IUiDropdownItemProps } from "./types";

const props = defineProps<IUiDropdownItemProps>();
const emit = defineEmits<{
  (e: "click", event: MouseEvent): void;
}>();

const dropdownItemClasses = computed(() => [
  "ui-dropdown-item",
  { "ui-dropdown-item--open": props.open },
]);

const dropdownItemStyles = computed(() => ({ "--level": props.level ?? 0 }));

const onClick = (event: MouseEvent) => {
  if (!props.expandable) return;
  emit("click", event);
};
</script>

<style lang="scss">
.ui-dropdown-item {
  @include button-reset;

  width: 100%;
  text-align: left;
  user-select: none;
  padding-left: calc(var(--level, 0) * #{$size-4});

  &--open &__arrow-icon {
    transform: rotate(90deg);
  }

  &__arrow-icon {
    color: $slate-500;
    transition: transform $duration-slow $easing-standard;
  }

  &__wrapper {
    padding-right: $spacing-4;
    padding-left: $spacing-4;
    display: flex;
    flex-flow: row nowrap;
    align-items: center;
    gap: $spacing-4;
    cursor: pointer;
  }

  &__label {
    display: flex;
    flex-flow: row nowrap;
    align-items: center;
    gap: $spacing-4;

    &-icon {
      color: $slate-500;
    }

    &-text {
      @include body-md;
      color: $theme-heading-foreground;
    }
  }
}
</style>
