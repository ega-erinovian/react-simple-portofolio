import React from "react";
import TypingEffect from "react-typing-effect";

const Header = () => {
  return (
    <div className="header-container">
      <div className="container-fluid d-flex flex-column justify-content-center align-items-center">
        <h1>I Am Pietra</h1>
        <TypingEffect className="typing-effect" text={["Graphic Designer", "Photographer", "Model"]} />
      </div>
    </div>
  );
};

export default Header;
