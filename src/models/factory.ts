import { nanoid } from "nanoid";
import { IBase, ModelType } from "./model";
import { createRectangle, IRectangle } from "./components/Rectangle";
import { RectangleSubject } from "./components/RectangleSubject";
import { createPage, IPage } from "./container/Page";
import { PageSubject } from "./container/PageSubject";

export function createModelSubject(data: IBase) {
  switch (data.type) {
    case ModelType.Page:
      return new PageSubject(data as IPage);

    case ModelType.Rectangle:
      return new RectangleSubject(data as IRectangle);
  }
}

export function createModel(option: { type: ModelType }) {
  const id = nanoid();
  switch (option.type) {
    case ModelType.Page:
      return createPage({ id });

    case ModelType.Rectangle:
      return createRectangle({ id });
  }
}
