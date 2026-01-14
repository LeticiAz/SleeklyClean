import React from "react";
import Hero from "./Components/Hero.js";
import Company from "./Components/Company.js";
import AskButton from "./Components/AskButton.js";
import Services from "./Components/Services.js";
import Feedback from "./Components/Feedback.js";
import Gallery from "./Components/Gallery.js";
import Footer from "./Components/Footer.js";

export default function App() {
  return (
    <>
      <Hero />
      <Company /> //Vantagens de contratar a Sleekly
      <AskButton />
      <Services />
      <AskButton />
      <Feedback />
      <AskButton />
      <Gallery />
      <AskButton />
      <Footer />
    </>
  );
}
