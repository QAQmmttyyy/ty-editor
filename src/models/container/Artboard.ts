import { DefaultModelData, IContainer, ModelType } from "../model";

export interface IArtboard extends IContainer {}

const defaultData: DefaultModelData<IArtboard> = {
  // TODO name 编号
  type: ModelType.Artboard,
  name: "画板",
  components: [],
};

export function createArtboard(payload: { id: string }): IArtboard {
  return Object.assign({}, defaultData, payload);
}
