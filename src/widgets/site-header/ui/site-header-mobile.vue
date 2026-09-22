<template>
  <header class="site-header-mobile">
    <div class="site-header-mobile__wrapper">
      <site-logo />

      <button
        type="button"
        :aria-expanded="open"
        aria-controls="header-menu"
        :aria-label="open ? 'Закрыть меню' : 'Открыть меню'"
        class="site-header-mobile__toggle-menu"
        @click="open = !open"
      >
        <ui-icon :name="iconName" size="lg" />
      </button>
    </div>

    <ClientOnly>
      <Teleport to="#header-menu-outlet">
        <Transition name="menu">
          <div v-show="open" id="header-menu" class="site-header-mobile__menu-dropdown">
            <div class="site-header-mobile__navigate-caption"># navigate:</div>

            <nav class="site-header-mobile__navigate">
              <site-nav
                :items="ALL_NAV_ITEMS"
                item-class="site-header-mobile__navigate-menu-item"
              />
            </nav>
          </div>
        </Transition>
      </Teleport>
    </ClientOnly>
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

// TODO: сделать позже — убрать «моргание» 1px-границ пунктов при открытии/закрытии меню.
// Что уже пробовали (не помогло): translateZ(0), will-change: transform, translate3d в кадре,
// анимация только по opacity. В покое меню стабильно (0 мутаций, границы на целых px),
// артефакт возникает во время перехода — похоже на сабпиксельный композитинг оверлея на GPU.
// Куда копать: выравнивание границ на целые device-px (учесть devicePixelRatio и дробную
// позицию из-за padding/border-radius карточки-обёртки); overflow-y: auto держит элемент
// scroll-контейнером даже когда контент влезает; как вариант — анимировать без композитинг-слоя
// или отказаться от анимации оверлея.
.menu-enter-active,
.menu-leave-active {
  transition: opacity $duration-base $easing-standard;
}

.menu-enter-from,
.menu-leave-to {
  opacity: 0;
}
</style>
