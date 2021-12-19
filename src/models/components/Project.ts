import { nanoid } from "nanoid";
import { IModel, ModelType } from "../model";

export interface IProject extends IModel {}

export function createProject(): IProject {
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
