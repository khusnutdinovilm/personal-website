import type { IProject } from "~/entities/project";
import type { ITechnology } from "~/entities/technology";

export function getProjectTechnologies(
  project: IProject,
  technologyById: Map<string, ITechnology>
): ITechnology[] {
  return project.technologyIds
    .map((id) => technologyById.get(id))
    .filter((t): t is ITechnology => Boolean(t));
}
