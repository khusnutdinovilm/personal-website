<template>
  <div :id="headerId" class="ui-accordion__header">
    <slot :open="open" :toggle="toggle" :header-id="headerId" :body-id="bodyId" />
  </div>
</template>

<script setup lang="ts">
import { ACCORDION_ITEM_KEY } from "./types";

const item = inject(ACCORDION_ITEM_KEY);
if (!item) throw new Error("UiAccordionHeader должен быть внутри UiAccordionItem");

const { open, toggle, headerId, bodyId } = item;
</script>
