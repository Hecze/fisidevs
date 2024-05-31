import Image from "next/image";
import HomeComponent from "./components/Home";
import Courses from "./components/Courses";
import About from "./components/About";

export default function Home() {
  return (
    <main className="relative max-w-screen min-h-screen pt-12 bg-sky-950 bg-[url('/background.png')]">
      <About />
      <div className="relative w-full h-48 bg-gradient-to-b from-transparent to-black pointer-events-none -mt-48"></div>
    </main>
  );
}
