import create from "zustand";
import { ProjectSubject } from "../models/components";
import { createModel, createModelSubject } from "../models/factory";
import { ModelType } from "../models/model";

interface AppState {
  project?: ProjectSubject;
  loadProject(): void;
}

export const useAppStore = create<AppState>((set) => {
  return {
    loadProject() {
      const projectModel = createModel({ type: ModelType.Project });
      const projectSubject = createModelSubject(projectModel) as ProjectSubject;
      set({ project: projectSubject });
    },
  };
});
