import type { IProject } from "../model/types";

export function filterProjectsByTechnology(projects: IProject[], techIds: string[]): IProject[] {
  if (!techIds.length) return projects;
  return projects.filter((p) => p.technologyIds.some((id) => techIds.includes(id)));
}
