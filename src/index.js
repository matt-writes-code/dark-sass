import React from "react";
import ReactDOM from "react-dom";
import useDarkMode from "use-dark-mode";
import Card from "./components/card";
import Img from "./components/img";

import "./sass/main.scss";

function App() {
  const darkMode = useDarkMode(false);
  const Toggle = () => {
    return (
      <button class="toggle" onClick={darkMode.toggle}>
        ☼
      </button>
    );
  };

  return (
    <div class="index">
      <h1>Dark Mode and SCSS</h1>
      <Toggle />
      <Card
        header="Nesting"
        div="SCSS can be nested like components in React"
      />
      <Card header="Variables" div="Use $ to initiate variables" />
      <Card
        header="@mixin"
        div="Functions that can accept none or multiple parameters. Use @mixin to write the function and @include to call it."
      />
      <Card
        header="@import"
        div="The whole project should only be managed by a single main.scss file which imports all other scss files. The individual 'smaller' ones should be named _button.scss to hold off compiling. SCSS will generate the main CSS from only one file, which is main.scss."
      />
      <Card
        header="@extend"
        div="Use @extend to reuse the class you've written."
      />
      <Img
        img="https://images.pexels.com/photos/618833/pexels-photo-618833.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
        title="Bright Image"
        description="compare it in both modes"
      />
      <Img
        img="https://images.pexels.com/photos/1451040/pexels-photo-1451040.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
        title="Colourful Image"
        description="compare it in both modes"
      />
      <Img
        img="https://images.pexels.com/photos/333850/pexels-photo-333850.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
        title="Dark Image"
        description="compare it in both modes"
      />
      <Img
        img="https://images.pexels.com/photos/460237/pexels-photo-460237.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
        title="Light Skin"
        description="compare it in both modes"
      />
      <Img
        img="https://images.pexels.com/photos/1308786/pexels-photo-1308786.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
        title="Dark Skin"
        description="compare it in both modes"
      />
      <a
        href="https://material.io/design/color/dark-theme.html"
        target="_blank"
      >
        Dark Theme design principles by Material UI
      </a>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
