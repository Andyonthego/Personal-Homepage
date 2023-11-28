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
    </div>
  );
}

export default Page;
