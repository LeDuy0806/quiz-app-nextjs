"use client";

//redux
import { Provider } from "react-redux";
import store from "./redux/store";

//components
import Navbar from "src/components/landing/Header/Navbar";
import Intro from "src/components/landing/Intro/Intro";
import Footer from "src/components/landing/Footer/Footer";
import AutomaticRun from "src/components/landing/AutomaticRun/AutomaticRun";
import Manage from "src/components/landing/Manage/Manage";

export default function Home() {
  return (
    <Provider store={store}>
      <main className="w-full max-w-full min-h-screen z-[100] flex flex-col  items-end font-fontFamily bg-bgGray overflow-hidden mx-auto mt-auto">
        <Navbar />
        <Intro />
        <Manage />
        <AutomaticRun />
        <Footer />
      </main>
    </Provider>
  );
}
