import { DefaultModelData, IContainer, ModelType } from "../model";

export interface IProject extends IContainer {}

const defaultData: DefaultModelData<IProject> = {
  // TODO name 编号
  type: ModelType.Project,
  name: "项目",
  components: [],
};

export function createProject(payload: { id: string }): IProject {
  return Object.assign({}, defaultData, payload);
}
