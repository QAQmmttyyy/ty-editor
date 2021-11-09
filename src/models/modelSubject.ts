import { IBase } from "./model";

// 把抽象接口放在这里
export class BaseSubject<T extends IBase> {
  public data: T;

  constructor(data: T) {
    this.data = data;
  }

  get id() {
    return this.data.id;
  }

  get name() {
    return this.data.name;
  }
}
