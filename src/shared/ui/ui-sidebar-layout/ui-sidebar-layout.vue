<template>
  <div class="ui-sidebar-layout">
    <aside v-if="$slots['aside']" class="ui-sidebar-layout__aside">
      <slot name="aside" />
    </aside>

    <div v-if="$slots['content'] || $slots['tabs']" class="ui-sidebar-layout__content-wrapper">
      <div v-if="$slots['tabs']" class="ui-sidebar-layout__content-tabs">
        <slot name="tabs" />
      </div>

      <div v-if="$slots['content']" class="ui-sidebar-layout__content">
        <slot name="content" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style lang="scss">
.ui-sidebar-layout {
  $aside-width: 311px;

  flex: 1;
  display: flex;
  flex-direction: column;

  @include media-up($breakpoint-nav) {
    flex-flow: row nowrap;
    align-items: stretch;
  }

  &__aside {
    @include media-up($breakpoint-nav) {
      flex: 0 $aside-width;
      border-right: $border-hairline;
    }
  }

  &__content {
    flex: 1;

    &-wrapper {
      flex: 1;
      display: flex;
      flex-direction: column;
    }

    &-tabs {
      display: flex;
      border-bottom: $border-hairline;
    }
  }
}
</style>
