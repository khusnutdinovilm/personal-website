<template>
  <article class="ui-panel">
    <header class="ui-panel__header">
      <div class="ui-panel__heading">
        <slot name="heading" :toggle="toggleFooter" />
      </div>

      <div class="ui-panel__actions">
        <slot name="actions" :toggle="toggleFooter" />
      </div>
    </header>

    <main class="ui-panel__content">
      <slot name="content" :toggle="toggleFooter" />
    </main>

    <Transition name="ui-panel-footer">
      <footer v-if="open" class="ui-panel__footer">
        <div class="ui-panel__footer-inner">
          <slot name="footer" :toggle="toggleFooter" />
        </div>
      </footer>
    </Transition>
  </article>
</template>

<script setup lang="ts">
const open = defineModel<boolean>({ default: false });

const toggleFooter = () => (open.value = !open.value);
</script>

<style lang="scss">
.ui-panel {
  display: flex;
  flex-direction: column;
  gap: $spacing-5;

  &__footer {
    display: grid;
    grid-template-rows: 1fr;
  }

  &__footer-inner {
    overflow: hidden;
    min-height: 0;
  }
}

.ui-panel-footer-enter-active,
.ui-panel-footer-leave-active {
  transition:
    grid-template-rows $duration-base $easing-standard,
    opacity $duration-base $easing-standard;
}

.ui-panel-footer-enter-from,
.ui-panel-footer-leave-to {
  grid-template-rows: 0fr;
  opacity: 0;
}
</style>
