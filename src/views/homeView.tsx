import Footer from "@/components/footer/footer";
import Header from "@/components/header/header";
import HomeBody from "@/components/home-body/home-body";
import { ReactElement } from "react";

export function HomeView(): ReactElement {
  return (
    <div className="flex w-full flex-col bg-background min-h-screen">
      <Header></Header>
      <HomeBody></HomeBody>
      <Footer></Footer>
    </div>
  );
}

export default HomeView;
