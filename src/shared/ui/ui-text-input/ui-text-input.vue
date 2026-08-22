<template>
  <UiTextField
    :id="id"
    :label="label"
    :variant="variant"
    :hint-text="hintText"
    :class="textInputClasses"
    :disabled="disabled"
  >
    <input
      :id="id"
      v-model="model"
      :type="type"
      class="ui-text-input__input"
      :disabled="disabled"
    />

    <div v-if="icon" class="ui-text-input__icon">
      <Icon :name="icon" style="width: inherit; height: inherit" />
    </div>
  </UiTextField>
</template>

<script setup lang="ts">
import { UiTextField, useTextControl } from "../ui-text-field";
import type { IUiTextInputProps } from "./types";

const { type = "text", ...props } = defineProps<IUiTextInputProps>();

const model = defineModel<string>({
  required: true,
  get: (v) => v ?? "",
});

const { rootClasses: textInputClasses, variant } = useTextControl(props, "ui-text-input");
</script>

<style lang="scss">
.ui-text-input {
  &__input {
    width: 100%;
    max-height: 40px;
    border-radius: $radius-3;
    border: 1px solid var(--border-color);
    padding: $spacing-4;
    padding-right: $spacing-7;
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
    top: 50%;
    transform: translateY(-50%);
    width: 20px;
    height: 20px;
    color: var(--icon-color);
    transition: color 0.2s ease-in;
  }
}
</style>
