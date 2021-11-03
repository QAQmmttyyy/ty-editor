import { DefaultModelData, IContainer, ModelType } from "../model";

export interface IPage extends IContainer {}

const defaultData: DefaultModelData<IPage> = {
  // TODO name 编号
  type: ModelType.Page,
  name: "页面",
  components: [],
};

export function createPage(payload: { id: string }): IPage {
  return Object.assign({}, defaultData, payload);
}
