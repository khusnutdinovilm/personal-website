<template>
  <div class="project-card">
    <div class="project-card__heading">
      <slot name="heading" />
    </div>

    <UiCard :src="project.imgSrc" :alt="`project-image-${project.name}`" class="project-card__card">
      <template #icon-box>
        <UiIconBox
          v-for="technology in technologies"
          :key="technology.id"
          :icon-name="technology.icon"
          :box-color="technology.boxColor"
          :icon-color="technology.iconColor"
          class="project-card__technology-icons"
        />
      </template>

      <template #text-container>
        <p class="project-card__description">
          {{ project.description }}
        </p>

        <UiButton btn-label="view-project" :href="project.projectUrl" />
      </template>
    </UiCard>
  </div>
</template>

<script setup lang="ts">
import { UiCard } from "~/shared/ui/ui-card";
import type { IProject } from "../../model/types";
import { UiIconBox } from "~/shared/ui/ui-icon-box";
import { UiButton } from "~/shared/ui/ui-button";

interface IProjectCardTechnology {
  id: string;
  icon: string;
  iconColor: string;
  boxColor: string;
}

defineProps<{
  project: IProject;
  technologies: IProjectCardTechnology[];
}>();
</script>

<style lang="scss">
.project-card {
  display: flex;
  flex-direction: column;
  gap: $spacing-5;

  &__heading {
    display: flex;
    flex-flow: row nowrap;
    align-items: center;
    justify-content: flex-start;
    gap: $spacing-3;
  }

  &__technology-icons {
    display: flex;
    flex-flow: row nowrap;
    align-items: center;
    gap: $spacing-3;
  }

  &__description {
    @include body-lg;
    color: $theme-foreground;
  }

  &__card {
    & .ui-card__header {
      position: relative;
    }

    & .ui-card__icon-box {
      position: absolute;
      top: 12px;
      right: 12px;
    }
  }
}
</style>
