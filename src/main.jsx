import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./main.scss";

import { Counter } from "./components/Counter/Counter";
import { Modal } from "./components/Modal/Modal";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    {/* <Counter /> */}
    <Modal />
  </StrictMode>
);
