import produce from "immer";
import { createModelSubject } from "./factory";
import { ModelInterface } from "./model";
import { SizeInterface } from ".";

// 把抽象接口放在这里
export class ModelSubject<T extends ModelInterface> {
  private _data!: T;
  public components: ModelSubject<ModelInterface>[];

  constructor(data: T) {
    this.data = data;
    this.components = data.components.map((component) =>
      createModelSubject(component)
    );
  }

  get data(): T {
    return this._data;
  }

  set data(value: T) {
    console.log("set data");

    this._data = value;
  }

  get id() {
    return this.data.id;
  }

  get name() {
    return this.data.name;
  }

  updateSize(nextSize: Partial<SizeInterface>) {
    this.data = produce(this.data, (draftData) => {
      draftData.size = {
        ...draftData.size,
        ...nextSize,
      };
    });
    return this;
  }
}
