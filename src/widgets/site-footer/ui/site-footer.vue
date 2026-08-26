<template>
  <footer class="site-footer">
    <div class="site-footer__wrapper">
      <div class="site-footer__find-me">
        <span class="site-footer__find-me-caption"> find me in: </span>
      </div>

      <nav class="site-footer__social" aria-label="Мои соцсети">
        <div class="site-footer__social-icons">
          <UiIconLink
            v-for="link in SOCIAL_LINKS"
            :key="link.href"
            :label="link.label"
            :icon="link.icon"
            :href="link.href"
            class="site-footer__social-icon"
          />
        </div>

        <UiMenuItem
          :label="GITHUB_PROFILE.label"
          :icon="GITHUB_PROFILE.icon"
          :href="GITHUB_PROFILE.href"
          class="site-footer__social-github"
        />
      </nav>
    </div>
  </footer>
</template>

<script setup lang="ts">
import { UiMenuItem } from "~/shared/ui/ui-menu-item";
import { UiIconLink } from "~/shared/ui/ui-icon-link";

import { GITHUB_PROFILE, SOCIAL_LINKS } from "../model/social";
</script>

<style lang="scss">
.site-footer {
  &__wrapper {
    border-top: $border-hairline;

    display: flex;
    flex-flow: row nowrap;
    align-items: stretch;
  }

  &__find-me {
    user-select: none;
    border-right: $border-hairline;
    padding: $spacing-5 $spacing-6;

    flex: 1;

    @include media-up($breakpoint-nav) {
      flex: 0 0 auto;
    }

    &-caption {
      @include body-md;
      color: $theme-foreground;
    }
  }

  &__social {
    flex: 0 0 auto;
    display: flex;
    align-items: stretch;

    @include media-up($breakpoint-nav) {
      flex: 1;
    }

    &-icons {
      display: flex;
      align-items: stretch;
    }

    &-icon {
      border-right: $border-hairline;

      &:last-child {
        border-right: none;
        @include hidden-up($breakpoint-nav);
      }
    }

    &-github {
      display: flex;
      margin-left: auto;
      border-left: $border-hairline;

      @include hidden-down($breakpoint-nav);
    }
  }
}
</style>
