import { nanoid } from "nanoid";
import { IModel, ModelType } from "../model";

export interface IRectangle extends IModel {}

export function createRectangle(): IRectangle {
  return {
    id: nanoid(),
    type: ModelType.Project,
    name: "矩形", // TODO name 编号
    components: [],
    size: {
      width: 0,
      height: 0,
    },
  };
}
