import DisciplinesBody from "@/components/disciplines-body/disciplines-body";
import Footer from "@/components/footer/footer";
import Header from "@/components/header/header";
import { ReactElement } from "react";

export function DisciplineView(): ReactElement {
  return (
    <div className="flex w-full flex-col bg-background min-h-screen">
      <Header></Header>
      <DisciplinesBody></DisciplinesBody>
      <Footer></Footer>
    </div>
  );
}

export default DisciplineView;
