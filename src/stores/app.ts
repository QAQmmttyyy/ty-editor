import create from "zustand";
import { Editor } from "../controllers/editor";
import { ComponentSubject } from "../models/components";

interface AppState {
  editor?: Editor;
  previewComps: ComponentSubject[];
  updatePreviewComps(previewComps: ComponentSubject[]): void;
  setEditor(editor: Editor): void;
}

export const useAppStore = create<AppState>((set) => {
  return {
    previewComps: [],
    updatePreviewComps(previewComps) {
      set({ previewComps });
    },
    setEditor(editor) {
      set({ editor });
    },
  };
});
