<template>
  <component :is="tag" v-bind="actionableAttrs" :aria-label="label" class="ui-icon-link">
    <UiIcon :name="icon" :size="size" />
  </component>
</template>

<script setup lang="ts">
import { useActionable } from "~/shared/lib/use-actionable";
import { UiIcon } from "../ui-icon";
import type { IUiIconLinkProps } from "./types";

const { size = "lg", ...props } = defineProps<IUiIconLinkProps>();

const { tag, actionableAttrs } = useActionable(props, "button");
</script>

<style lang="scss">
.ui-icon-link {
  display: inline-flex;
  align-items: center;
  padding: $spacing-5;
  color: $slate-500;

  transition: color $duration-base $easing-standard;

  &:hover {
    color: $theme-heading-foreground;
  }
}
</style>
