import React from "react";
import DisciplinesTitle from "./disciplines-title";
import DisciplinesSearch from "./form/disciplines-search";

export default function DisciplinesBody() {
  return (
    <div className="w-full h-full items-center justify-center flex-col border-background border-0 py-3">
      <DisciplinesTitle></DisciplinesTitle>
      <DisciplinesSearch></DisciplinesSearch>
    </div>
  );
}
