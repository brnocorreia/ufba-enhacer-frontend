"use client";

import HomeCards from "./home-cards";
import HomeTitle from "./home-title";

function HomeBody() {
  return (
    <div className="w-full h-full items-center justify-center shadow-sm flex-col border-background border-0 py-3">
      <HomeTitle></HomeTitle>
      <HomeCards></HomeCards>
    </div>
  );
}

export default HomeBody;
