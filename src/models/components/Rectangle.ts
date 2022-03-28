import { nanoid } from "nanoid";
import { ModelInterface, ModelType } from "../model";

export interface RectangleInterface extends ModelInterface {}

export function createRectangle(): RectangleInterface {
  return {
    id: nanoid(),
    type: ModelType.Rectangle,
    name: "矩形", // TODO name 编号
    components: [],
    size: {
      width: 0,
      height: 0,
    },
  };
}
