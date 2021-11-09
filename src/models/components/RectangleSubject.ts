import { BaseSubject } from "../modelSubject";
import { IRectangle } from "./Rectangle";

export class RectangleSubject extends BaseSubject<IRectangle> {
  constructor(data: IRectangle) {
    super(data);
  }
}
