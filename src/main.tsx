import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import router from "./routes";
import "./index.css";
import  TitleProvider  from "./components/proviers/title";
import { ConfirmDialogProvider } from "./components/reuseable/delete-model";

// Render the App
createRoot(document.getElementById("root") as HTMLElement).render(
  <StrictMode>
    <ConfirmDialogProvider
    >
      <TitleProvider>
        <RouterProvider router={router} />
      </TitleProvider>
    </ConfirmDialogProvider>

  </StrictMode>
);
