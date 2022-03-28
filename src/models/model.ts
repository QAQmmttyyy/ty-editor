export enum ModelType {
  Project = "Project",
  Page = "Page",
  Artboard = "Artboard",
  Rectangle = "Rectangle",
}

export interface ModelInterface {
  id: string;
  name: string;
  type: ModelType;
  components: ModelInterface[];
  size: SizeInterface;
}

export interface SizeInterface {
  width: number;
  height: number;
}
