<template>
  <img
    v-if="kind === 'asset'"
    :src="resolvedSrc"
    :alt="alt"
    :width="width"
    :height="height"
    :loading="eager ? 'eager' : 'lazy'"
    decoding="async"
    class="ui-image"
    :class="{ 'ui-image--rounded': rounded }"
    :style="{ objectFit }"
  />

  <NuxtImg
    v-else
    :src="src"
    :alt="alt"
    :width="width"
    :height="height"
    :sizes="sizes"
    :loading="eager ? 'eager' : 'lazy'"
    :placeholder="placeholder ? [10, 10, 75, 5] : undefined"
    decoding="async"
    class="ui-image"
    :class="{ 'ui-image--rounded': rounded }"
    :style="{ objectFit }"
  />
</template>

<script setup lang="ts">
import type { IUiImageProps, ImageKind } from "./types";

const {
  objectFit = "cover",
  eager = false,
  placeholder = false,
  ...props
} = defineProps<IUiImageProps>();

const ASSET_PREFIX = "@assets";

const assetUrls = import.meta.glob("../../assets/**/*.{png,jpg,jpeg,webp,avif,gif}", {
  eager: true,
  import: "default",
  query: "?url",
}) as Record<string, string>;

const kind = computed<ImageKind>(() => {
  if (/^https?:\/\//.test(props.src)) return "external";
  if (props.src.startsWith(ASSET_PREFIX)) return "asset";
  return "public";
});

const resolvedSrc = computed(() => {
  if (kind.value !== "asset") return props.src;

  const rel = props.src.slice(ASSET_PREFIX.length).replace(/^\//, "");

  const entry = Object.entries(assetUrls).find(([key]) => key.endsWith(`/assets/${rel}`));
  const url = entry?.[1];

  if (!url && import.meta.dev) {
    console.warn(
      `[UiImage] ассет не найден: "${props.src}" (искал "…/assets/${rel}").`,
      "Доступные:",
      Object.keys(assetUrls)
    );
  }
  return url ?? props.src;
});
</script>

<style lang="scss">
.ui-image {
  display: block;
  max-width: 100%;

  &--rounded {
    border-radius: $radius-3;
  }
}
</style>
