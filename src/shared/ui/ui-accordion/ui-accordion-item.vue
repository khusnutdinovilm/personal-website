<template>
  <div class="ui-accordion__item">
    <slot />
  </div>
</template>

<script setup lang="ts">
import { ACCORDION_KEY, ACCORDION_ITEM_KEY } from "./types";
import type { IUiAccordionItemProps } from "./types";

const props = defineProps<IUiAccordionItemProps>();

const accordion = inject(ACCORDION_KEY);
if (!accordion) throw new Error("UiAccordionItem должен быть внутри UiAccordion");

const uid = useId()!;
const key = computed(() => props.itemKey ?? uid);
const headerId = `${uid}-header`;
const bodyId = `${uid}-body`;

const open = computed(() => accordion.isOpen(key.value));
const toggle = () => accordion.toggle(key.value);

provide(ACCORDION_ITEM_KEY, { open, toggle, headerId, bodyId });
</script>

<style lang="scss">
.ui-accordion__item {
  display: flex;
  flex-direction: column;
}
</style>
