import Footer from "@/components/footer/footer";
import Header from "@/components/header/header";
import { ReactElement } from "react";

export function HomeView(): ReactElement {
  return (
    <div className="relative flex min-h-screen flex-col bg-background">
      <Header></Header>
      <Footer></Footer>
    </div>
  );
}

export default HomeView;
