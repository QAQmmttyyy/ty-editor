import { nanoid } from "nanoid";
import { IModel, ModelType } from "../model";

export interface IArtboard extends IModel {}

export function createArtboard(): IArtboard {
  return {
    id: nanoid(),
    type: ModelType.Project,
    name: "画板", // TODO name 编号
    components: [],
    size: {
      width: 0,
      height: 0,
    },
  };
}
