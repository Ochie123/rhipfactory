import React from "react";
import { inject } from '@vercel/analytics';
import * as ReactDOMClient from "react-dom/client";

import App from "./App";

const container = document.getElementById("root");
inject();
// Create a root.
const root = ReactDOMClient.createRoot(container);

root.render(
 
    <App />

);
