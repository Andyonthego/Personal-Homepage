import React from "react";
import Home from "./Home/Home";
import About from "./About/About";
import Contact from "./Home/Contact";
import Education from "./Home/Education";
import Work from "./Home/Work";

function Page() {
  return (
    <div>
      <section id="home">
        <Home />
      </section>
      <section id="education">
        <Education  />
      </section>
      <section id="work">
        <Work  />
      </section>
      <section id="about">
        <About />
      </section>
      <section id="contact">
        <Contact />
      </section>
    </div>
  );
}

export default Page;
