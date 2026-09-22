<template>
  <component
    :is="tag"
    v-bind="actionableAttrs"
    :class="btnClasses"
    :aria-disabled="disabled || undefined"
    :aria-busy="loading || undefined"
    @click="clickBtn"
  >
    <ui-icon v-if="loading" name="ri:loader-line" size="md" class="ui-button__loader" />
    <slot v-else-if="$slots['default']" />
    <template v-else-if="btnLabel">
      <ui-icon
        v-if="iconPrepend"
        :name="iconPrepend"
        size="md"
        class="ui-button__icon ui-button__icon--prepend"
      />

      <div class="ui-button__label">
        {{ btnLabel }}
      </div>

      <ui-icon
        v-if="iconAppend"
        :name="iconAppend"
        size="md"
        class="ui-button__icon ui-button__icon--append"
      />
    </template>
  </component>
</template>

<script setup lang="ts">
import { useActionable } from "~/shared/lib/use-actionable";

import { UiIcon } from "../ui-icon";

import type { IUiButtonEmits, IUiButtonProps } from "./types";

const { variant = "default", ...props } = defineProps<IUiButtonProps>();
const emit = defineEmits<IUiButtonEmits>();

const { tag, actionableAttrs } = useActionable(props, "button");

const btnClasses = computed(() => [
  "ui-button",
  `ui-button--${variant}`,
  props.disabled ? "ui-button--disabled" : "",
]);

const clickBtn = (event: Event) => {
  if (props.loading || props.disabled) return;
  emit("click", event);
};
</script>

<style lang="scss">
$button-top-bottom: 10px;
$button-left-right: 12px;
$button-gap: 10px;

.ui-button {
  --bg-color: transparent;
  --border-color: transparent;
  --border: 1px solid var(--border-color);
  --btn-padding: #{$button-top-bottom} #{$button-left-right};
  --text-color: transparent;
  --text-color-transition: color #{$duration-base} #{$easing-standard};

  border-radius: $radius-3;
  background-color: var(--bg-color);
  border: var(--border);
  transition:
    background-color $duration-base $easing-standard,
    border-color $duration-base $easing-standard;
  padding: var(--btn-padding);
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  justify-content: center;
  gap: $button-gap;
  color: var(--text-color);

  &--primary {
    --bg-color: #{$primary-background};
    --border-color: #{$primary-background};
    --text-color: #{$primary-inverted};

    &:hover {
      --bg-color: #{$primary-hover};
      --border-color: #{$primary-hover};
      --text-color: #{$primary-hover-inverted};
    }
  }

  &--default {
    --bg-color: #{$slate-600};
    --border-color: #{$slate-600};
    --text-color: #{$theme-heading-foreground};

    &:hover {
      --bg-color: #{$slate-500};
      --border-color: #{$slate-500};
      --text-color: #{$theme-heading-foreground};
    }
  }

  &--ghost {
    --bg-color: transparent;
    --border-color: #{$theme-heading-foreground};
    --text-color: #{$theme-heading-foreground};

    &:hover {
      --bg-color: #{$slate-800};
      --border-color: #{$slate-800};
      --text-color: #{$theme-heading-foreground};
    }
  }

  &--success {
    --bg-color: #{$semantic-success-background};
    --border-color: #{$semantic-success-background};
    --text-color: #{$semantic-success-inverted};

    &:hover {
      --bg-color: #{$semantic-success-hover};
      --border-color: #{$semantic-success-hover};
      --text-color: #{$semantic-success-hover-inverted};
    }
  }

  &--error {
    --bg-color: #{$semantic-error-background};
    --border-color: #{$semantic-error-background};
    --text-color: #{$semantic-error-inverted};

    &:hover {
      --bg-color: #{$semantic-error-hover};
      --border-color: #{$semantic-error-hover};
      --text-color: #{$semantic-error-hover-inverted};
    }
  }

  &--warning {
    --bg-color: #{$semantic-warning-background};
    --border-color: #{$semantic-warning-background};
    --text-color: #{$semantic-warning-inverted};

    &:hover {
      --bg-color: #{$semantic-warning-hover};
      --border-color: #{$semantic-warning-hover};
      --text-color: #{$semantic-warning-hover-inverted};
    }
  }

  &--link {
    --btn-padding: 0;
    --bg-color: transparent;
    --border: none;
    --border-color: transparent;
    --text-color: #{$theme-link-foreground};

    &:hover {
      --text-color: #{$theme-link-hover-foreground};
    }
  }

  &:disabled,
  &--disabled {
    --bg-color: #{$slate-700};
    --border-color: #{$slate-700};
    --text-color: #{$slate-500};

    pointer-events: none;
  }

  &--link &__label {
    text-decoration: underline;
    text-decoration-style: solid;
    text-underline-offset: 14%;
    text-decoration-thickness: 10%;
    text-decoration-skip-ink: auto;
  }

  &__icon,
  &__loader {
    color: var(--text-color);
    transition: var(--text-color-transition);
  }

  &__loader {
    animation: round 1.5s infinite ease;
  }

  &:has(.ui-button__loader) {
    pointer-events: none;
  }

  &:visited &__label,
  &:visited &__icon,
  &:visited &__loader {
    color: var(--text-color);
  }

  &__label {
    @include body-sm;

    color: var(--text-color);
    transition: var(--text-color-transition);
  }
}

@keyframes round {
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
}
</style>
