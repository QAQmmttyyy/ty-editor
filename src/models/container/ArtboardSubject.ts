import { createModelSubject } from "../factory";
import { BaseSubject } from "../modelSubject";
import { IArtboard } from "./ArtBoard";

export class ArtboardSubject extends BaseSubject {
  public components: BaseSubject[];

  constructor(data: IArtboard) {
    super(data);
    this.components = data.components.map((component) =>
      createModelSubject(component)
    );
  }
}
