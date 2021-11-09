import { ArtboardSubject } from "../components";
import { createModelSubject } from "../factory";
import { BaseSubject } from "../modelSubject";
import { IPage } from "./Page";

export class PageSubject extends BaseSubject<IPage> {
  public components: ArtboardSubject[];

  constructor(data: IPage) {
    super(data);
    this.components = data.components.map(
      (component) => createModelSubject(component) as ArtboardSubject
    );
  }
}
