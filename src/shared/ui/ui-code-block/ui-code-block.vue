<template>
  <!-- eslint-disable vue/no-v-html -->
  <div class="ui-code-block" :class="codeBlockClasses" :style="codeBlockStyles" v-html="html" />
  <!-- eslint-enable vue/no-v-html -->
</template>

<script setup lang="ts">
import { getHighlighter, THEME_NAME } from "../../lib/highlighter";

import type { IUiCodeBlockProps } from "./types";

const {
  code,
  lang = "ts",
  lineNumbers = false,
  size = "sm",
  numberGap = 24,
} = defineProps<IUiCodeBlockProps>();

const highlighter = await getHighlighter();

const html = computed(() => highlighter.codeToHtml(code, { lang, theme: THEME_NAME }));

const codeBlockClasses = computed(() => [
  `ui-code-block--${size}`,
  { "ui-code-block--numbered": lineNumbers },
]);

const codeBlockStyles = computed(() => ({ "--cb-number-gap": `${numberGap}px` }));
</script>

<style lang="scss">
.ui-code-block {
  --cb-number-gap: #{$spacing-6};

  .shiki {
    margin: 0;
    padding: 0;
    background: transparent !important;
    overflow-x: auto;

    code {
      font-family: inherit;
    }
  }

  &--sm .shiki {
    @include body-sm;
  }

  &--md .shiki {
    @include body-md;
  }

  &--lg .shiki {
    @include body-lg;
  }

  &--numbered {
    .shiki code {
      counter-reset: step;
      counter-increment: step 0;
    }

    .line::before {
      counter-increment: step;
      content: counter(step);
      display: inline-block;
      width: 1.5rem;
      margin-right: var(--cb-number-gap);
      color: $slate-600;
      text-align: right;
      user-select: none;
    }
  }
}
</style>
