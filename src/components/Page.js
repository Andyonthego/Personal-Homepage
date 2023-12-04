import React from "react";
import Home from "./Home/Home";
import About from "./About/About";

function Page() {
  return (
    <div>
      <section id="home">
        <Home />
      </section>
      <section id="about">
        <About />
      </section>
      <section id="home2">
        <Home />
      </section>
    </div>
  );
}

export default Page;
