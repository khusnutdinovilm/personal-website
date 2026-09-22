<template>
  <component
    :is="expandable ? 'div' : 'button'"
    :type="expandable ? undefined : 'button'"
    :class="dropdownLabelClasses"
    @click="onClick"
  >
    <span class="ui-dropdown-label__wrapper">
      <span class="ui-dropdown-label__label">
        <ui-icon
          v-if="iconPrepend"
          :name="iconPrepend"
          size="sm"
          class="ui-dropdown-label__icon ui-dropdown-label__icon--prepend"
        />

        <span class="ui-dropdown-label__label-text">
          {{ label }}
        </span>
      </span>

      <ui-icon
        v-if="iconAppend"
        :name="iconAppend"
        size="sm"
        class="ui-dropdown-label__icon ui-dropdown-label__icon--append"
      />
    </span>
  </component>
</template>

<script setup lang="ts">
import { UiIcon } from "../ui-icon";

import type { IUiDropdownLabelProps } from "./types";

const props = defineProps<IUiDropdownLabelProps>();
const emit = defineEmits<{
  (e: "click", event: MouseEvent): void;
}>();

const dropdownLabelClasses = computed(() => [
  "ui-dropdown-label",
  {
    "ui-dropdown-label--open": props.open,
    "ui-dropdown-label--expandable": props.expandable,
  },
]);

const onClick = (event: MouseEvent) => {
  if (props.expandable) return;

  emit("click", event);
};
</script>

<style lang="scss">
.ui-dropdown-label {
  --bg-color: transparent;
  --label-color: #{$theme-heading-foreground};
  --icon-append-color: #{$theme-foreground};
  --icon-prepend-color: #{$theme-heading-foreground};

  @include button-reset;

  width: 100%;
  padding: $spacing-4 $spacing-6;
  background-color: var(--bg-color);
  user-select: none;

  &--open &__icon--prepend {
    transform: rotate(90deg);
  }

  &--expandable &__wrapper {
    cursor: default;
  }

  &__wrapper {
    display: flex;
    flex-flow: row nowrap;
    align-items: center;
    justify-content: space-between;
    gap: $spacing-2;
    cursor: pointer;
  }

  &__label {
    display: flex;
    flex-flow: row nowrap;
    align-items: center;
    justify-content: flex-start;
    gap: $spacing-4;

    &-text {
      @include body-md;

      color: var(--label-color);
      text-overflow: ellipsis;
      overflow: hidden;
      white-space: nowrap;
    }
  }

  &__icon {
    transition: transform $duration-slow $easing-standard;

    &--prepend {
      color: var(--icon-prepend-color);
    }

    &--append {
      color: var(--icon-append-color);
    }
  }
}
</style>
