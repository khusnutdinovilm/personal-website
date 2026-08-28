import { technologyService } from "~/entities/technology";
import { filterProjectsByTechnology, projectService } from "~/entities/project";
import { getProjectTechnologies } from "../lib/get-project-technologies";

export function useProjectFilter() {
  const { data: technologies } = useAsyncData(
    "technologies",
    () => technologyService.fetchTechnologies(),
    {
      default: () => [],
    }
  );

  const { data: projects } = useAsyncData("projects", () => projectService.fetchProjects(), {
    default: () => [],
  });

  const route = useRoute();
  const router = useRouter();

  const selectedIds = computed<string[]>(() => {
    const raw = route.query.tech;
    if (!raw) return [];
    return (Array.isArray(raw) ? raw.join(",") : raw).split(",").filter(Boolean);
  });

  const isSelected = (id: string) => selectedIds.value.includes(id);

  const toggle = (id: string) => {
    const next = isSelected(id)
      ? selectedIds.value.filter((x) => x !== id)
      : [...selectedIds.value, id];

    router.replace({
      query: {
        ...route.query,
        tech: next.length ? next.join(",") : undefined,
      },
    });
  };

  const reset = () => router.replace({ query: { ...route.query, tech: undefined } });

  const visibleProjects = computed(() =>
    filterProjectsByTechnology(projects.value, selectedIds.value)
  );

  const technologyById = computed(() => new Map(technologies.value.map((t) => [t.id, t])));

  const selectedLabel = computed(() => {
    const labels = technologies.value.filter((t) => isSelected(t.id)).map((t) => t.label);
    return labels.length ? labels.join("; ") : "Выберите технологию";
  });

  const projectsWithTechnologies = computed(() =>
    visibleProjects.value.map((project) => ({
      project,
      technologies: getProjectTechnologies(project, technologyById.value),
    }))
  );

  return {
    technologies,
    isSelected,
    toggle,
    reset,
    selectedLabel,
    projectsWithTechnologies,
  };
}
