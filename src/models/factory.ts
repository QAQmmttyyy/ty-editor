import { IBase, ModelType } from "./model";
import { IRectangle } from "./components/Rectangle";
import { RectangleSubject } from "./components/RectangleSubject";
import { IPage } from "./container/Page";
import { PageSubject } from "./container/PageSubject";

export function createModelSubject(data: IBase) {
  switch (data.type) {
    case ModelType.Page:
      return new PageSubject(data as IPage);

    case ModelType.Rectangle:
      return new RectangleSubject(data as IRectangle);
  }
}
