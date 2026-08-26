<template>
  <UiMenuItem
    v-for="{ name, label } in items"
    :key="name"
    :label="label"
    :to="{ name }"
    :class="itemClass"
  />
</template>

<script setup lang="ts">
import { UiMenuItem } from "~/shared/ui/ui-menu-item";
import type { INavItem } from "../model/nav";

defineProps<{
  items: INavItem[];
  itemClass?: string;
}>();
</script>
