import React from "react";

const ColorModeContext = React.createContext({
  mode: "dark",
});

export default function ColorModeProvider(props) {
  return (
    <ColorModeContext.Provider>{props.children}</ColorModeContext.Provider>
  );
}
