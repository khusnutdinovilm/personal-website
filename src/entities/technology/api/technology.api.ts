import { mockRequest } from "~/shared/api";
import { TECHNOLOGIES } from "./technology.mock";
import type { ITechnology } from "../model/types";

class TechnologyService {
  fetchTechnologies(): Promise<ITechnology[]> {
    return mockRequest(TECHNOLOGIES);
  }
}

export const technologyService = new TechnologyService();
