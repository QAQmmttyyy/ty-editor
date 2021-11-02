import { BaseSubject } from "../modelSubject";
import { IRectangle } from "./Rectangle";

export class RectangleSubject extends BaseSubject {
  constructor(data: IRectangle) {
    super(data);
  }
}
