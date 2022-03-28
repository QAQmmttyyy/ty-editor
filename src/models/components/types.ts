import { ArtboardInterface } from "./Artboard";
import { ArtboardSubject } from "./ArtboardSubject";
import { RectangleInterface } from "./Rectangle";
import { RectangleSubject } from "./RectangleSubject";

export type ComponentInterface = ArtboardInterface | RectangleInterface;
export type ComponentSubject = ArtboardSubject | RectangleSubject;
