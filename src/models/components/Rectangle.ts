import { IBase, ISize } from "../model";

export interface IRectangle extends IBase {
  size: ISize;
}

const defaultData: Partial<IRectangle> = {
  // TODO name 编号
  name: "矩形",
  size: {
    width: 100,
    height: 100,
  },
};

export function createRectangle(): IRectangle {
  // 原型方式创建
  return Object.create(defaultData);
}
