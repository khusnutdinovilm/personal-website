<template>
  <div :class="avatarClasses">
    <UiImage :src="src" :alt="alt" class="ui-avatar__image" object-fit="cover" />
  </div>
</template>

<script setup lang="ts">
import { UiImage } from "../ui-image";

import type { IUiAvatarProps } from "./types";

const { size = "md" } = defineProps<IUiAvatarProps>();

const avatarClasses = computed(() => ["ui-avatar", `ui-avatar--${size}`]);
</script>

<style lang="scss">
.ui-avatar {
  border-radius: 50%;
  overflow: hidden;

  &--sm {
    @include square($size-4);
  }

  &--md {
    @include square($size-6);
  }

  &--lg {
    @include square($size-7);
  }

  &__image {
    width: 100%;
    height: 100%;
  }
}
</style>
