import { createModelSubject } from "../factory";
import { BaseSubject } from "../modelSubject";
import { IArtboard } from "./Artboard";
import { ComponentSubject } from "./types";

export class ArtboardSubject extends BaseSubject<IArtboard> {
  public components: ComponentSubject[];

  constructor(data: IArtboard) {
    super(data);
    this.components = data.components.map((component) =>
      createModelSubject(component)
    );
  }
}
