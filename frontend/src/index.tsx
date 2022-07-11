import React from "react";
import ReactDOM from "react-dom/client";
import Routing from "./components/Routing";
import "bootstrap/dist/css/bootstrap.css";
import { SnackbarProvider } from "notistack";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <SnackbarProvider
    autoHideDuration={4000}
    anchorOrigin={{
      vertical: "bottom",
      horizontal: "right",
    }}
  >
    <Routing />
  </SnackbarProvider>
);
