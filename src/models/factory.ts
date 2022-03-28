import { ModelInterface, ModelType } from "./model";
import { ModelSubject } from "./modelSubject";
import {
  ArtboardSubject,
  RectangleSubject,
  createArtboard,
  createRectangle,
  createPage,
  createProject,
  PageSubject,
  ProjectSubject,
} from "./components";

export function createModelSubject(data: ModelInterface): ModelSubject<ModelInterface> {
  switch (data.type) {
    case ModelType.Project:
      return new ProjectSubject(data);

    case ModelType.Page:
      return new PageSubject(data);

    case ModelType.Artboard:
      return new ArtboardSubject(data);

    case ModelType.Rectangle:
      return new RectangleSubject(data);
  }
}

export function createModel(option: { type: ModelType }): ModelInterface {
  switch (option.type) {
    case ModelType.Project:
      return createProject();

    case ModelType.Page:
      return createPage();

    case ModelType.Artboard:
      return createArtboard();

    case ModelType.Rectangle:
      return createRectangle();
  }
}
