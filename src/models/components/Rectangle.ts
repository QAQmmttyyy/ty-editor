import { DefaultModelData, IBase, ISize, ModelType } from "../model";

export interface IRectangle extends IBase {
  size: ISize;
}

const defaultData: DefaultModelData<IRectangle> = {
  // TODO name 编号
  type: ModelType.Rectangle,
  name: "矩形",
  size: {
    width: 100,
    height: 100,
  },
};

export function createRectangle(payload: { id: string }): IRectangle {
  return Object.assign({}, defaultData, payload);
}
