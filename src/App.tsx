import React from "react";
import Toolbar from "./ui/Toolbar";
import Viewer from "./ui/Viewer";
import { useAppStore } from "./stores/app";
import { Editor } from "./controllers/editor";

import "./styles.scss";

export default function App() {
  const setEditor = useAppStore((state) => state.setEditor);

  React.useEffect(() => {
    setEditor(new Editor());
  }, []);

  return (
    <div className="App">
      <Toolbar />
      <Viewer />
    </div>
  );
}
