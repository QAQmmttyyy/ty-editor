import { nanoid } from "nanoid";
import { ModelInterface, ModelType } from "../model";

export interface PageInterface extends ModelInterface {}

export function createPage(): PageInterface {
  return {
    id: nanoid(),
    type: ModelType.Project,
    name: "页面", // TODO name 编号
    components: [],
    size: {
      width: 0,
      height: 0,
    },
  };
}
