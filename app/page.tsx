"use client";
import Image from "next/image";
import dynamic from "next/dynamic";

const Styler = dynamic(() => import("../styles"), {
  ssr: false
});

export default function Home() {
  return (
    <Styler>
      <main className="w-1440px h-mn-100vh mx-auto p-2rem bg-blue">
        <section>
          <header>
            <h1 className="tc-red">Hello World</h1>
            <h1></h1>
          </header>
        </section>
      </main>
    </Styler>
  );
}
