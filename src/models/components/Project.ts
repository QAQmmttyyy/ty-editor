import { nanoid } from "nanoid";
import { ModelInterface, ModelType } from "../model";

export interface ProjectInterface extends ModelInterface {}

export function createProject(): ProjectInterface {
  return {
    id: nanoid(),
    type: ModelType.Project,
    name: "项目", // TODO name 编号
    components: [],
    size: {
      width: 0,
      height: 0,
    },
  };
}
