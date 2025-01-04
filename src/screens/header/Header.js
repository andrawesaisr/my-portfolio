import React from "react";
import Typed from "react-typed";
import "./header.css";
function Header() {
  return (
    <div class="main-info">
      <h1>Who Am I ?</h1>
      <Typed
        strings={[
          "",
          "A Software Engineer",
          "Also known as a",
          "Front-end Engineer",
          "Back-end Engineer",
          "Full stack Engineer",
          "Or!",
          "a Coder",
          "",
        ]}
        typeSpeed={70}
        backSpeed={50}
        loop
      ></Typed>
    </div>
  );
}

export default Header;
