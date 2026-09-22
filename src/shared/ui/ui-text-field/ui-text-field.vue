<template>
  <div :class="textFieldClasses">
    <label v-if="label" :for="id" class="ui-text-field__label">
      {{ label }}
    </label>

    <div class="ui-text-field__field">
      <slot />
    </div>

    <span v-if="hintText" class="ui-text-field__hint-text">
      {{ hintText }}
    </span>
  </div>
</template>

<script setup lang="ts">
import type { IUiTextFieldProps } from "./types";

const { variant = "default", ...props } = defineProps<IUiTextFieldProps>();

const textFieldClasses = computed(() => [
  "ui-text-field",
  `ui-text-field--${variant}`,
  props.disabled ? "ui-text-field--disabled" : "",
]);
</script>

<style lang="scss">
.ui-text-field {
  --border-color: transparent;
  --bg-color: transparent;
  --icon-color: transparent;
  --hint-color: transparent;

  display: flex;
  flex-direction: column;
  gap: $spacing-3;

  &:focus-within {
    --border-color: #{$slate-300};
  }

  &--default {
    --hint-color: #{$theme-foreground};
    --bg-color: #{$theme-backdrop};
    --border-color: #{$theme-stroke};
    --icon-color: #{$slate-300};
  }

  &--success {
    --hint-color: #{$semantic-success-background};
    --bg-color: #{$semantic-success-alpha};
    --border-color: #{$semantic-success-background};
    --icon-color: #{$semantic-success-background};
  }

  &--error {
    --hint-color: #{$semantic-error-background};
    --bg-color: #{$semantic-error-alpha};
    --border-color: #{$semantic-error-background};
    --icon-color: #{$semantic-error-background};
  }

  &--warning {
    --hint-color: #{$semantic-warning-background};
    --bg-color: #{$semantic-warning-alpha};
    --border-color: #{$semantic-warning-background};
    --icon-color: #{$semantic-warning-background};
  }

  &--disabled {
    --hint-color: #{$theme-heading-foreground};
  }

  &__label {
    @include body-sm;

    color: $theme-foreground;
  }

  &__field {
    position: relative;
    flex: 1;
  }

  &__hint-text {
    @include body-sm;

    color: var(--hint-color);
  }
}
</style>
