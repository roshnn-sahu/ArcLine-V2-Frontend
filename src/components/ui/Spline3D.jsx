import React from "react";

import Spline from "@splinetool/react-spline";
export default function Spline3D() {
  function onLoad(spline) {
    console.log("Spline loaded", spline);
  }

  function onMouseDown(e) {
    console.log("Clicked object:", e.target.name);
  }

  return (
    <div className="mx-auto h-full w-full mask-y-from-60% mask-y-to-90% mask-x-from-60% mask-x-to-90%">
      <Spline
        style={{
          height: "100%",
          width: "100%",
        }}
        className="overflow-none spline-container object-center"
        scene="https://prod.spline.design/q2JiBhhjiJgHWP3N/scene.splinecode"
        onLoad={onLoad}
        onMouseDown={onMouseDown}
      />
    </div>
  );
}
