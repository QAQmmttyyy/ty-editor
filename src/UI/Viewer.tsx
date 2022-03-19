import React from "react";
import {
  combineLatest,
  distinctUntilChanged,
  filter,
  fromEvent,
  map,
  merge,
  mergeMapTo,
  share,
  Subscription,
  take,
  takeUntil,
} from "rxjs";

import "./Viewer.scss";

export default function View() {
  const viewDomRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    if (!viewDomRef.current) {
      return;
    }

    // keyboard handle
    const keydown$ = fromEvent<KeyboardEvent>(document.body, "keydown");
    const keyup$ = fromEvent<KeyboardEvent>(document.body, "keyup");
    const keyEvent$ = merge(keydown$, keyup$).pipe(
      distinctUntilChanged(
        (prev, curr) => prev.key === curr.key && prev.type === curr.type
      ),
      share()
    );
    // Create KeyboardEvent Observable for specified KeyCode
    const createSpecialKeyEventStream = (key: string) =>
      keyEvent$.pipe(filter((event) => event.key === key));

    // usage
    const modifierKeys = ["Control", "Alt", "Shift"];
    const modifierKeys$ = modifierKeys.map((key) =>
      createSpecialKeyEventStream(key).pipe(
        map((event) => (event.type === "keydown" ? key : ""))
      )
    );
    const modifierKeyPressCombo$ = combineLatest(modifierKeys$).pipe(
      map((keys) => keys.join(""))
    );
    const modifierKeyPressComboSub = modifierKeyPressCombo$.subscribe(
      (value) => {
        console.log(value);
      }
    );

    // mouse handle
    const mousedown$ = fromEvent(viewDomRef.current, "mousedown");
    const mousemove$ = fromEvent(document, "mousemove");
    const mouseup$ = fromEvent(document, "mouseup");

    let mouseupSub: Subscription | null = null;

    const mousedownSub = mousedown$.subscribe((x) => {
      mouseupSub = mouseup$.subscribe((x) => {
        mouseupSub?.unsubscribe();
        console.log(x.type);
      });

      console.log(x.type);
    });

    const mousemoveSub = mousedown$
      .pipe(mergeMapTo(mousemove$.pipe(takeUntil(mouseup$))))
      .subscribe((x) => console.log(x.type));

    return () => {
      modifierKeyPressComboSub.unsubscribe();
      mousedownSub.unsubscribe();
      mousemoveSub.unsubscribe();
      mouseupSub?.unsubscribe();
    };
  }, []);

  return <div ref={viewDomRef} className="View"></div>;
}
