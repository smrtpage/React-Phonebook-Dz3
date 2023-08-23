import { createRoot } from "react-dom/client";

import App from "./App";
import "./components/config/axios";

const rootElem = document.querySelector("#root");

createRoot(rootElem).render(<App />);
