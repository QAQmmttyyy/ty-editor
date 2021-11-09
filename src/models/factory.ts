import { nanoid } from "nanoid";
import { IBase, ModelType } from "./model";
import {
  ArtboardSubject,
  IArtboard,
  RectangleSubject,
  IRectangle,
  createArtboard,
  createRectangle,
} from "./components";
import {
  ProjectSubject,
  IProject,
  PageSubject,
  IPage,
  createProject,
  createPage,
} from "./container";

export function createModelSubject(data: IBase) {
  switch (data.type) {
    case ModelType.Project:
      return new ProjectSubject(data as IProject);

    case ModelType.Page:
      return new PageSubject(data as IPage);

    case ModelType.Artboard:
      return new ArtboardSubject(data as IArtboard);

    case ModelType.Rectangle:
      return new RectangleSubject(data as IRectangle);
  }
}

export function createModel(option: { type: ModelType }) {
  const id = nanoid();
  switch (option.type) {
    case ModelType.Project:
      return createProject({ id });

    case ModelType.Page:
      return createPage({ id });

    case ModelType.Artboard:
      return createArtboard({ id });

    case ModelType.Rectangle:
      return createRectangle({ id });
  }
}
