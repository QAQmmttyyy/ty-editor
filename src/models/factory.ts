import { nanoid } from "nanoid";
import { IBase, ModelType } from "./model";
import { createRectangle, IRectangle } from "./components/Rectangle";
import { RectangleSubject } from "./components/RectangleSubject";
import { createPage, IPage } from "./container/Page";
import { PageSubject } from "./container/PageSubject";
import { createArtboard, IArtboard } from "./container/ArtBoard";
import { ArtboardSubject } from "./container/ArtboardSubject";
import { createProject, IProject } from "./container/Project";
import { ProjectSubject } from "./container/ProjectSubject";

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
