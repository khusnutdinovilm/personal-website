<template>
  <ui-accordion :active-item-key="1" class="technology-filter">
    <ui-accordion-item :item-key="1" class="technology-filter__item">
      <ui-accordion-header>
        <template #default="{ open, toggle: toggleLabel }">
          <ui-dropdown-label
            label="projects"
            icon-prepend="ri:arrow-drop-right-fill"
            :open="open"
            class="technology-filter__dropdown-label"
            @click="toggleLabel"
          />
        </template>
      </ui-accordion-header>

      <ui-accordion-body content-class="technology-filter__body">
        <ui-checkbox
          v-for="tech in technologies"
          :id="`tech-${tech.id}`"
          :key="tech.id"
          class="technology-filter__row"
          :model-value="isSelected(tech.id)"
          @update:model-value="toggle(tech.id)"
        >
          <ui-icon :name="tech.icon" size="lg" class="technology-filter__row-icon" />

          <span class="technology-filter__row-label">
            {{ tech.label }}
          </span>
        </ui-checkbox>
      </ui-accordion-body>
    </ui-accordion-item>
  </ui-accordion>
</template>

<script setup lang="ts">
import { useProjectFilter } from "~/features/filter-projects-by-technology";
import {
  UiAccordion,
  UiAccordionItem,
  UiAccordionHeader,
  UiAccordionBody,
} from "~/shared/ui/ui-accordion";
import { UiCheckbox } from "~/shared/ui/ui-checkbox";
import { UiDropdownLabel } from "~/shared/ui/ui-dropdown-label";
import { UiIcon } from "~/shared/ui/ui-icon";

const { technologies, isSelected, toggle } = useProjectFilter();
</script>

<style lang="scss">
.technology-filter {
  & .ui-dropdown-label {
    --bg-color: #{$slate-700};

    @include media-up($breakpoint-nav) {
      --bg-color: transparent;
    }
  }

  &__dropdown-label {
    @include media-up($breakpoint-nav) {
      border-bottom: $border-hairline;
    }
  }

  &__body {
    padding: $spacing-4;
    display: flex;
    flex-direction: column;
    gap: $spacing-3;
  }

  &__row {
    &.ui-checkbox {
      --checkbox-label-gap: #{$spacing-3};
      --checkbox-label-padding: #{$spacing-1};
    }

    &-icon {
      color: $slate-500;
    }

    &-label {
      @include body-md;
      color: $theme-heading-foreground;
    }
  }
}
</style>
