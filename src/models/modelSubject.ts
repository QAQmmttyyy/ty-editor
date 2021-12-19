import { createModelSubject } from "./factory";
import { IModel } from "./model";

// 把抽象接口放在这里
export class ModelSubject<T extends IModel> {
  public data: T;
  public components: ModelSubject<IModel>[];

  constructor(data: T) {
    this.data = data;
    this.components = data.components.map((component) =>
      createModelSubject(component)
    );
  }

  get id() {
    return this.data.id;
  }

  get name() {
    return this.data.name;
  }
}
