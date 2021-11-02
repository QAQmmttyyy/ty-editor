import { createModelSubject } from "../factory";
import { BaseSubject } from "../modelSubject";
import { IPage } from "./Page";

export class PageSubject extends BaseSubject {
  public components: BaseSubject[];

  constructor(data: IPage) {
    super(data);
    this.components = data.components.map((component) =>
      createModelSubject(component)
    );
  }
}
