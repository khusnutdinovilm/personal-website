<template>
  <div class="ui-accordion">
    <slot />
  </div>
</template>

<script setup lang="ts">
import { ACCORDION_KEY } from "./types";
import type { AccordionItemKey, IUiAccordionProps } from "./types";

const props = defineProps<IUiAccordionProps>();

const openKeys = ref<AccordionItemKey[]>(props.activeItemKey != null ? [props.activeItemKey] : []);

const isOpen = (key: AccordionItemKey) => openKeys.value.includes(key);

const toggle = (key: AccordionItemKey) => {
  if (isOpen(key)) {
    openKeys.value = openKeys.value.filter((k) => k !== key);
    return;
  }
  openKeys.value = props.alwaysOpen ? [...openKeys.value, key] : [key];
};

provide(ACCORDION_KEY, { isOpen, toggle });
</script>
