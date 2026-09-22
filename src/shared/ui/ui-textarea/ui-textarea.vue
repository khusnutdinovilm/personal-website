<template>
  <ui-text-field
    :id="id"
    :label="label"
    :variant="variant"
    :hint-text="hintText"
    :class="textareaClasses"
    :disabled="disabled"
  >
    <textarea :id="id" v-model="model" class="ui-textarea__input" :disabled="disabled"></textarea>

    <ui-icon v-if="icon" :name="icon" class="ui-textarea__icon" />
  </ui-text-field>
</template>

<script setup lang="ts">
import { UiIcon } from "../ui-icon";
import { UiTextField, useTextControl } from "../ui-text-field";

import type { IUiTextareaProps } from "./types";

const props = defineProps<IUiTextareaProps>();

const model = defineModel<string>({
  required: true,
  get: (v) => v ?? "",
});

const { variant, rootClasses: textareaClasses } = useTextControl(props, "ui-textarea");
</script>

<style lang="scss">
.ui-textarea {
  &__input {
    resize: none;
    width: 100%;
    height: 120px;
    border-radius: $radius-3;
    border: 1px solid var(--border-color);
    padding: $spacing-4;
    padding-right: $spacing-8;
    background-color: var(--bg-color);
    outline: none;
    transition:
      border-color 0.2s ease-in,
      background-color 0.2s ease-in;

    @include body-md;

    color: $theme-foreground;

    &:disabled {
      cursor: not-allowed;
    }
  }

  &__icon {
    position: absolute;
    right: $spacing-4;
    top: $spacing-4;
    width: 24px;
    height: 24px;
    color: var(--icon-color);
    transition: color 0.2s ease-in;
  }
}
</style>
