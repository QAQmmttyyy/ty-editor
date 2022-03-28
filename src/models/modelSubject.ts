import { createModelSubject } from "./factory";
import { ModelInterface } from "./model";

// 把抽象接口放在这里
export class ModelSubject<T extends ModelInterface> {
  public data: T;
  public components: ModelSubject<ModelInterface>[];

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
