import { mockRequest } from "~/shared/api";
import { PROJECTS } from "./project.mock";
import type { IProject } from "../model/types";

class ProjectService {
  fetchProjects(): Promise<IProject[]> {
    return mockRequest(PROJECTS);
  }
}

export const projectService = new ProjectService();
