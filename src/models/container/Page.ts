import { IContainer } from "../model";

export interface IPage extends IContainer {}

const defaultData: Partial<IPage> = {
  // TODO name 编号
  name: "页面",
};

export function createPage(): IPage {
  // 原型方式创建
  return Object.create(defaultData);
}
