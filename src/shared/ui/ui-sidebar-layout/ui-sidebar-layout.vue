<template>
  <div class="ui-sidebar-layout">
    <div v-if="pageName" class="ui-sidebar-layout__page-name">
      {{ pageName }}
    </div>

    <aside v-if="$slots['aside']" class="ui-sidebar-layout__aside">
      <slot name="aside" />
    </aside>

    <div v-if="$slots['content'] || $slots['tabs']" class="ui-sidebar-layout__content">
      <div v-if="$slots['tabs']" class="ui-sidebar-layout__content-tabs">
        <slot name="tabs" />
      </div>

      <div v-if="$slots['content']" class="ui-sidebar-layout__content-body">
        <slot name="content" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  pageName?: string;
}>();
</script>

<style lang="scss">
.ui-sidebar-layout {
  $aside-width: 311px;

  flex: 1;
  min-height: 0;
  display: flex;
  flex-direction: column;
  overflow-y: auto;

  @include media-up($breakpoint-desktop) {
    flex-flow: row nowrap;
    align-items: stretch;
    overflow: hidden;
  }

  &__page-name {
    display: flex;
    flex-flow: row nowrap;
    align-items: center;
    justify-content: flex-start;
    padding: $spacing-6;

    @include body-sm;

    color: $theme-heading-foreground;

    @include media-up($breakpoint-desktop) {
      display: none;
    }
  }

  &__aside {
    @include media-up($breakpoint-desktop) {
      @include scroll-y("hidden");

      flex: 0 0 $aside-width;
      border-right: $border-hairline;
    }
  }

  &__content {
    flex: 1;
    display: flex;
    flex-direction: column;

    @include media-up($breakpoint-desktop) {
      min-height: 0;
      min-width: 0;
    }

    &-tabs {
      display: flex;
      border-bottom: $border-hairline;
      flex: 0 0 auto;

      @include hidden-down($breakpoint-desktop);
    }

    &-body {
      flex: 1;
      display: flex;
      flex-direction: column;

      @include media-up($breakpoint-desktop) {
        min-height: 0;
        min-width: 0;
      }
    }
  }
}
</style>
