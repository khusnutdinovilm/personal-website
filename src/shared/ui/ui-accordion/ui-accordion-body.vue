<template>
  <div :id="bodyId" role="region" :aria-labelledby="headerId" :class="accordionBodyClasses">
    <div class="ui-accordion__body-inner" :inert="!open">
      <div class="ui-accordion__body-content" :class="contentClass">
        <slot :open="open" :header-id="headerId" :body-id="bodyId" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ACCORDION_ITEM_KEY } from "./types";

defineProps<{
  contentClass?: string;
}>();
const item = inject(ACCORDION_ITEM_KEY);
if (!item) throw new Error("UiAccordionBody должен быть внутри UiAccordionItem");

const { open, headerId, bodyId } = item;

const accordionBodyClasses = computed(() => [
  "ui-accordion__body",
  {
    "ui-accordion__body--open": open.value,
  },
]);
</script>

<style lang="scss">
.ui-accordion__body {
  display: grid;
  grid-template-rows: 0fr;
  transition: grid-template-rows $duration-base $easing-standard;

  &--open {
    grid-template-rows: 1fr;
  }

  &-inner {
    overflow: hidden;
    min-height: 0;
  }
}
</style>
