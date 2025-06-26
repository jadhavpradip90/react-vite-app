import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { store } from "./store/store.ts";
import { Provider } from "react-redux";
import { FluentProvider, webLightTheme } from "@fluentui/react-components";

const rootElement = document.getElementById("root");
if (rootElement) {
  createRoot(rootElement).render(
    <StrictMode>
      <Provider store={store}>
        <FluentProvider theme={webLightTheme}>
          <App />
        </FluentProvider>
      </Provider>
    </StrictMode>,
  );
} else {
  throw new Error("Root element not found");
}
