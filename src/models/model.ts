export enum ModelType {
  Project = "Project",
  Page = "Page",
  Artboard = "Artboard",
  Rectangle = "Rectangle",
}

export interface IModel {
  id: string;
  name: string;
  type: ModelType;
  components: IModel[];
  size: ISize;
}

export interface ISize {
  width: number;
  height: number;
}
