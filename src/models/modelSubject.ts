import { IBase } from "./model";

export class BaseSubject {
  constructor(public data: IBase) {}

  get id() {
    return this.data.id;
  }

  get name() {
    return this.data.name;
  }
}
