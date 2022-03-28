import React from "react";
import { useDrag } from "@use-gesture/react";
import { useAppStore } from "../stores/app";
import { createModel, createModelSubject, ModelType } from "../models";

import "./Viewer.scss";

export default function View() {
  // 订阅创建组件是的预览数据
  const { previewComps, updatePreviewComps } = useAppStore();

  // 处理创建组件交互
  const bindDrag = useDrag((dragState) => {
    // TODO judge create tool type
    // TODO position calc
    console.log(dragState);

    const { event, movement, tap } = dragState;
    switch (event.type) {
      case "pointerdown": {
        const model = createModel({ type: ModelType.Rectangle });
        const subject = createModelSubject(model);
        console.log(subject);

        updatePreviewComps([subject]);
        break;
      }

      case "pointermove": {
        const [width, height] = movement.map(Math.abs).map(Math.round);
        const subject = previewComps[0].updateSize({ width, height });
        updatePreviewComps([subject]);
        break;
      }

      case "pointerup": {
        if (tap) {
          const subject = previewComps[0].updateSize({
            width: 100,
            height: 100,
          });
          updatePreviewComps([subject]);
        }
        console.log(previewComps);
        // updatePreviewComps([]);
        break;
      }

      default:
        // noop
        break;
    }
  });

  return (
    <div className="View" {...bindDrag()}>
      <div className="preview-comps-layer">
        <pre style={{ fontFamily: "Consolas, monospace" }}>
          {JSON.stringify(previewComps, null, 2)}
        </pre>
      </div>
    </div>
  );
}
