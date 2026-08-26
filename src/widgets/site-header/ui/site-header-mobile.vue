<template>
  <header class="site-header-mobile">
    <div class="site-header-mobile__wrapper">
      <SiteLogo />

      <button
        type="button"
        :aria-expanded="open"
        aria-controls="header-menu"
        :aria-label="open ? 'Закрыть меню' : 'Открыть меню'"
        class="site-header-mobile__toggle-menu"
        @click="open = !open"
      >
        <UiIcon :name="iconName" size="lg" />
      </button>
    </div>

    <Teleport defer to="#header-menu-outlet">
      <Transition name="menu">
        <div v-show="open" id="header-menu" class="site-header-mobile__menu-dropdown">
          <div class="site-header-mobile__navigate-caption"># navigate:</div>

          <nav class="site-header-mobile__navigate">
            <SiteNav :items="ALL_NAV_ITEMS" item-class="site-header-mobile__navigate-menu-item" />
          </nav>
        </div>
      </Transition>
    </Teleport>
  </header>
</template>

<script setup lang="ts">
import { UiIcon } from "~/shared/ui/ui-icon";
import { ALL_NAV_ITEMS } from "../model/nav";

import SiteLogo from "./site-logo.vue";
import SiteNav from "./site-nav.vue";

const open = ref(false);

const iconName = computed(() => (open.value ? "ri:close-large-fill" : "ri:menu-line"));

const route = useRoute();
watch(
  () => route.fullPath,
  () => (open.value = false)
);
watch(open, (v) => (document.body.style.overflow = v ? "hidden" : ""));

onMounted(() => {
  const onKey = (e: KeyboardEvent) => e.key === "Escape" && (open.value = false);
  window.addEventListener("keydown", onKey);
  onBeforeUnmount(() => window.removeEventListener("keydown", onKey));
});

onBeforeUnmount(() => (document.body.style.overflow = ""));
</script>

<style lang="scss">
.site-header-mobile {
  &__wrapper {
    display: flex;
    flex-flow: row nowrap;
    align-items: center;
    justify-content: space-between;
    border-bottom: $border-hairline;
  }

  &__toggle-menu {
    @include button-reset;

    padding: $spacing-5;
    color: $slate-500;
  }

  &__menu-dropdown {
    overscroll-behavior: contain;
    position: absolute;
    inset: 0;
    z-index: 10;
    overflow-y: auto;
    padding-top: $spacing-4;
    background-color: $theme-background;

    @include media-up($breakpoint-nav) {
      display: none;
    }
  }

  &__navigate {
    display: flex;
    flex-direction: column;

    &-caption {
      padding: $spacing-4 $spacing-6;
      border-bottom: $border-hairline;

      @include body-md;
      color: $theme-foreground;
    }

    &-menu-item {
      border-bottom: $border-hairline;
    }
  }
}

.menu-enter-active,
.menu-leave-active {
  transition:
    transform $duration-base $easing-standard,
    opacity $duration-base $easing-standard;
}

.menu-enter-from,
.menu-leave-to {
  opacity: 0;
  transform: translateY(-$spacing-5);
}
</style>
