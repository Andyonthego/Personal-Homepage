import React from "react";
import Home from "./Home/Home";
import About from "./About/About";

function Page() {
  return (
    <div>
      <section id="home">
        <Home />
      </section>
      <section id="abput">
        <About />
      </section>
    </div>
  );
}

export default Page;
