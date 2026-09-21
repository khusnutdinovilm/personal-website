<template>
  <component :is="tag" v-bind="actionableAttrs" :class="menuItemClasses" @click="clickMenuItem">
    <span class="ui-menu-item__wrapper">
      <span class="ui-menu-item__label">
        {{ label }}
      </span>

      <ui-icon v-if="icon" :name="icon" size="lg" class="ui-menu-item__icon" />
    </span>
  </component>
</template>

<script setup lang="ts">
import { useActionable } from "~/shared/lib/use-actionable";

import { UiIcon } from "../ui-icon";

import type { IUiMenuItemEmits, IUiMenuItemProps } from "./types";

const props = defineProps<IUiMenuItemProps>();
const emit = defineEmits<IUiMenuItemEmits>();

const { tag, actionableAttrs } = useActionable(props, "button");

const menuItemClasses = computed(() => [
  "ui-menu-item",
  { "ui-menu-item--selected": props.selected },
]);

const clickMenuItem = (event: Event) => {
  emit("click", event);
};
</script>

<style lang="scss">
.ui-menu-item {
  $underline-height: 3px;

  @include button-reset;

  --text-color: #{$theme-foreground};
  --color-transition: color $duration-base $easing-standard;

  @mixin menu-item-active {
    --text-color: #{$theme-heading-foreground};

    .ui-menu-item__wrapper::before,
    .ui-menu-item__wrapper::after {
      width: 50%;
    }
    .ui-menu-item__wrapper::before {
      transform: translateX(-100%);
    }
  }

  &--selected {
    @include menu-item-active();
  }

  &.router-link-exact-active {
    @include menu-item-active();
  }

  &:hover {
    --text-color: #{$theme-heading-foreground};
  }

  & &__wrapper::before,
  & &__wrapper::after {
    content: "";
    position: absolute;
    bottom: var(--menu-item-underline-offset, 0);
    width: 0;
    left: 50%;
    height: $underline-height;
    background: $primary-background;
    transition: all $duration-slow $easing-standard;
  }

  &__wrapper {
    display: flex;
    flex-flow: row nowrap;
    align-items: center;
    gap: $spacing-3;
    padding: $spacing-4 $spacing-6;
    position: relative;
    cursor: pointer;

    @include media-up($breakpoint-nav) {
      padding: $spacing-5 $spacing-7;
    }
  }

  &__label {
    @include body-md;
    color: var(--text-color);
    transition: var(--color-transition);
  }

  &__icon {
    color: var(--text-color);
    transition: var(--color-transition);
  }
}
</style>
