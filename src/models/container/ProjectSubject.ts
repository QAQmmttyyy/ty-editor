import { createModelSubject } from "../factory";
import { BaseSubject } from "../modelSubject";
import { IProject } from "./Project";

export class ProjectSubject extends BaseSubject {
  public components: BaseSubject[];

  constructor(data: IProject) {
    super(data);
    this.components = data.components.map((component) =>
      createModelSubject(component)
    );
  }
}
