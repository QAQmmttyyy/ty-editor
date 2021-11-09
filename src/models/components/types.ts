import { IArtboard } from "./Artboard";
import { ArtboardSubject } from "./ArtboardSubject";
import { IRectangle } from "./Rectangle";
import { RectangleSubject } from "./RectangleSubject";

export type IComponent = IArtboard | IRectangle;
export type ComponentSubject = ArtboardSubject | RectangleSubject;
