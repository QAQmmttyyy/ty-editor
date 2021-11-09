export type DefaultModelData<T> = Omit<T, "id">;

export enum ModelType {
  Project = "Project",
  Page = "Page",
  Artboard = "Artboard",
  Rectangle = "Rectangle",
}

export interface IBase {
  id: string;
  name: string;
  type: ModelType;
}

export interface IContainer<T> extends IBase {
  components: T[];
}

export interface ISize {
  width: number;
  height: number;
}
