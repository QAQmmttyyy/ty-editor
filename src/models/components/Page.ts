import { nanoid } from "nanoid";
import { IModel, ModelType } from "../model";

export interface IPage extends IModel {}

export function createPage(): IPage {
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
