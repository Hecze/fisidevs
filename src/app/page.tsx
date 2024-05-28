import Image from "next/image";
import HomeComponent from "./components/Home";
import Courses from "./components/Courses";

import About from "./components/About";


export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center  pr-20 pt-8 bg-sky-950 bg-[url('/background.png')] ">
      <About />
    </main>
  );
}
