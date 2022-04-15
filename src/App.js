import React from "react";
import TitleSection from "./component/TitleSection.js";
import Information from "./component/Information.js";

function App() {
  return (
    <>
      <img src="#" alt="Profile Picture" />
      <TitleSection />
      <button>Email</button>
      <Information
        heading="About"
        content="I am a frontend developer with a particular interest in making things simple and automating daily tasks. I try to keep up with security and best practices, and am always looking for new things to learn."
      />
      <Information heading="Intrests" content="Food expert. Music scholar. Reader. Internet fanatic. Bacon buff. Entrepreneur. Travel geek. Pop culture ninja. Coffee fanatic." />
    </>
  );
}

export default App;
