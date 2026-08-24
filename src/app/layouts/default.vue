<template>
  <div class="layout">
    <div class="layout__wrapper">
      <!-- header -->

      <main>
        <slot />
      </main>

      <!-- footer -->
    </div>
  </div>
</template>

<style lang="scss">
.layout {
  min-height: 100dvh;
  display: flex;
  flex-direction: column;
  padding: $spacing-5;

  @include desktop {
    padding: 70px;
  }

  &__wrapper {
    flex: 1;
    border: 1px solid $theme-stroke;
    border-radius: $radius-3;
    background-color: $theme-background;
  }
}
</style>
