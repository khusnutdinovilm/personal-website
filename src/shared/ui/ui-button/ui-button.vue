<template>
  <component
    :is="tag"
    :class="btnClasses"
    :disabled="tag === 'button' ? disabled : undefined"
    :aria-disabled="disabled || undefined"
    :aria-busy="loading || undefined"
    @click="clickBtn"
  >
    <div v-if="loading" class="ui-button__loader">
      <Icon name="ri:loader-line" />
    </div>
    <slot v-else-if="$slots['default']" />
    <template v-else-if="btnLabel">
      <div v-if="iconPrepend" class="ui-button__icon ui-button__icon--prepent">
        <Icon :name="iconPrepend" />
      </div>

      <div class="ui-button__label">
        {{ btnLabel }}
      </div>

      <div v-if="iconAppend" class="ui-button__icon ui-button__icon--append">
        <Icon :name="iconAppend" />
      </div>
    </template>
  </component>
</template>

<script setup lang="ts">
import type { IUiButtonEmits, IUiButtonProps } from "./types";

const { variant = "default", ...props } = defineProps<IUiButtonProps>();
const emit = defineEmits<IUiButtonEmits>();

const tag = computed(() => {
  if (props.disabled) return "button";
  if (props.to) return "nuxt-link";
  if (props.href) return "a";
  return "button";
});

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
  --text-color-transition: color 0.2s ease-in;

  border-radius: $radius-3;
  background-color: var(--bg-color);
  border: var(--border);
  transition:
    background-color 0.2s ease-in,
    border-color 0.2s ease-in;
  padding: var(--btn-padding);
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  justify-content: center;
  gap: $button-gap;

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
    width: 20px;
    height: 20px;
    color: var(--text-color);
    transition: var(--text-color-transition);

    & svg {
      width: 100%;
      height: 100%;
    }
  }

  &__loader {
    animation: round 1.5s infinite ease;
  }

  &:has(.ui-button__loader) {
    pointer-events: none;
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
