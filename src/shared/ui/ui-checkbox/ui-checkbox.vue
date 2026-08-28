<template>
  <label class="ui-checkbox">
    <input :id="id" v-model="model" :name="name" type="checkbox" class="ui-checkbox__real" />

    <span class="ui-checkbox__fake">
      <UiIcon v-if="model" name="custom:mark-icon" />
    </span>

    <span class="ui-checkbox__label">
      <slot></slot>
    </span>
  </label>
</template>

<script setup lang="ts">
import { UiIcon } from "../ui-icon";

import type { IUiCheckboxProps } from "./types";

defineProps<IUiCheckboxProps>();

const model = defineModel<boolean>({ required: true });
</script>

<style lang="scss">
.ui-checkbox {
  --border-color: #{$slate-500};
  --bg-color: #{$theme-backdrop};
  --checkbox-label-gap: 0;
  --checkbox-label-padding: 0;

  padding-right: $spacing-4;
  padding-left: $spacing-4;
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  gap: $spacing-6;

  &__real {
    position: absolute;
    width: 1px;
    height: 1px;
    margin: -1px;
    padding: 0;
    border: 0;
    overflow: hidden;
    clip-path: inset(50%);
    white-space: nowrap;

    &:checked + .ui-checkbox__fake {
      --bg-color: #{$slate-500};
      --border-color: #{$slate-500};
    }

    &:focus-visible + .ui-checkbox__fake {
      outline: 3px solid $slate-700;
    }
  }

  &:hover .ui-checkbox__fake {
    outline: 3px solid $slate-700;
  }

  &__fake {
    width: 20px;
    height: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    border-radius: $radius-1;
    padding: $spacing-2;
    border: 1px solid var(--border-color);
    background-color: var(--bg-color);
    color: $theme-heading-foreground;
    transition:
      background-color 0.2s ease,
      border-color 0.2s ease;

    & .ui-icon {
      width: 12px;
      height: 12px;
    }
  }

  &__label {
    padding: var(--checkbox-label-padding);
    display: flex;
    flex-flow: row nowrap;
    align-items: center;
    gap: var(--checkbox-label-gap);
  }
}
</style>
