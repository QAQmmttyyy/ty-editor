import { ArtboardSubject } from "../components";
import { createModelSubject } from "../factory";
import { BaseSubject } from "../modelSubject";
import { IProject } from "./Project";

export class ProjectSubject extends BaseSubject<IProject> {
  public components: ArtboardSubject[];

  constructor(data: IProject) {
    super(data);
    this.components = data.components.map(
      (component) => createModelSubject(component) as ArtboardSubject
    );
  }
}
