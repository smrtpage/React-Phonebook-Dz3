import { createRoot } from "react-dom/client";

import App from "./App";

const rootElem = document.querySelector("#root");

createRoot(rootElem).render(<App />);
