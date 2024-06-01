import Image from "next/image";
import About from "./components/About";
import HomeComponent from "./components/Home";

export default function Home() {
  return (
    <main className="relative max-w-screen min-h-screen pt-12 bg-sky-950 bg-[url('/background.png')]">
      <HomeComponent />
      <About />
      <div className="relative w-full h-20 bg-gradient-to-b from-transparent to-[#0B1B33] pointer-events-none -mt-20"/>
    </main>
  );
}
