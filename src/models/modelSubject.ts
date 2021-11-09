import { IBase } from "./model";

export class BaseSubject {
  public data: IBase;

  constructor(data: IBase) {
    this.data = data;
  }

  get id() {
    return this.data.id;
  }

  get name() {
    return this.data.name;
  }
}
