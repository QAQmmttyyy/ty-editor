export enum ModelType {
  Page = "Page",
  Rectangle = "Rectangle",
}

export interface IBase {
  id: string;
  name: string;
  type: ModelType;
}

export interface IContainer extends IBase {
  components: IBase[];
}

export interface ISize {
  width: number;
  height: number;
}
