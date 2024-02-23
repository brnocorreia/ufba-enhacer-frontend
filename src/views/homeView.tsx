import Header from "@/components/header";
import { ReactElement } from "react";

export function HomeView(): ReactElement {
  return (
    <div className="relative flex min-h-screen flex-col bg-background">
      <Header></Header>
    </div>
  );
}

export default HomeView;
