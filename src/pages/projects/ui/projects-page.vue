<template>
  <ui-sidebar-layout class="projects-page" page-name="_projects">
    <template #aside>
      <technology-filter />
    </template>

    <template #tabs>
      <ui-dropdown-label
        :label="selectedLabel"
        icon-append="ri:close-fill"
        class="projects-page__selected-technologies"
        @click="reset"
      />
    </template>

    <template #content>
      <div class="projects-page__list">
        <project-card
          v-for="({ project, technologies }, index) in projectsWithTechnologies"
          :key="project.id"
          :project="project"
          :technologies="technologies"
          class="projects-page__list-item"
        >
          <template #heading>
            <span class="projects-page__list-item-num"> Project {{ index + 1 }} </span>
            <span class="projects-page__list-item-name"> // {{ project.name }} </span>
          </template>
        </project-card>
      </div>
    </template>
  </ui-sidebar-layout>
</template>

<script setup lang="ts">
import { UiDropdownLabel } from "~/shared/ui/ui-dropdown-label";
import { UiSidebarLayout } from "~/shared/ui/ui-sidebar-layout";
import { TechnologyFilter, useProjectFilter } from "~/features/filter-projects-by-technology";
import { ProjectCard } from "~/entities/project";

const { selectedLabel, reset, projectsWithTechnologies } = useProjectFilter();
</script>

<style lang="scss">
.projects-page {
  $tabs-min-width: 273px;
  $card-width: 407px;

  &__selected-technologies {
    border-right: $border-hairline;
    min-width: $tabs-min-width;
    width: auto;
  }

  &__list {
    padding: $spacing-6;
    display: flex;
    flex-direction: column;
    gap: $spacing-6;

    @include media-up($breakpoint-nav) {
      padding: $spacing-10;
      padding-bottom: 0;
      flex-flow: row wrap;
      gap: $spacing-8;
    }

    &-item {
      flex: 0 calc(33% - $spacing-6);
      display: flex;
      flex-direction: column;
      gap: $spacing-5;

      @include media-up($breakpoint-nav) {
        min-width: $card-width;
        max-width: $card-width;
      }

      &-num {
        @include body-md;

        color: $indigo-500;
      }

      &-name {
        @include body-md;

        color: $theme-foreground;
      }
    }
  }
}
</style>
