import { nanoid } from "nanoid";
import { ModelInterface, ModelType } from "../model";

export interface ArtboardInterface extends ModelInterface {}

export function createArtboard(): ArtboardInterface {
  return {
    id: nanoid(),
    type: ModelType.Artboard,
    name: "画板", // TODO name 编号
    components: [],
    size: {
      width: 0,
      height: 0,
    },
  };
}
