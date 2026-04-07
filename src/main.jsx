

import { StrictMode } from "react"; 
import { createRoot } from "react-dom/client";
<<<<<<< HEAD
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import "./App.css";
import App from "./App.jsx";
import { AuthProvider } from "./contexts/AuthContext.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <App />
      </AuthProvider>
    </BrowserRouter>
  </StrictMode>
);
=======
 import { BrowserRouter } from "react-router-dom";
  import "./index.css"; import "./App.css"; 
  import App from "./App.jsx"; 
  createRoot(document.getElementById("root")).render(
     <StrictMode>
       <BrowserRouter>
        <App /> 
        </BrowserRouter> 
        </StrictMode> );
>>>>>>> 45fb7b8bb1f1040cf4efe91de4ae41e695dd2d93
