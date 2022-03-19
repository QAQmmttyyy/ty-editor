import create from "zustand";
import { Editor } from "../controllers/editor";

interface AppState {
  editor?: Editor;
  setEditor(editor: Editor): void;
  // project?: ProjectSubject;
  // loadProject(): void;
}

export const useAppStore = create<AppState>((set) => {
  return {
    setEditor(editor) {
      set({ editor });
    },
    // loadProject() {
    //   const projectModel = createModel({ type: ModelType.Project });
    //   const projectSubject = createModelSubject(projectModel) as ProjectSubject;
    //   set({ project: projectSubject });
    // },
  };
});
