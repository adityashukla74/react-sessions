import React from "react";
import { createRoot } from "react-dom/client";
import Pet from "./pet";

const App = () => {
  return (
    <>
      <h1>Adopt Me!</h1>
      <Pet name='Luna' animal='dog' breed='Havanese' />
      <Pet name='Pepper' animal='bird' breed='Cockateil' />
      <Pet name='Kiri' animal='cat' breed='Mixed' />
    </>
  )
};

const container = document.getElementById("root");
const root = createRoot(container);

root.render(<App />);
