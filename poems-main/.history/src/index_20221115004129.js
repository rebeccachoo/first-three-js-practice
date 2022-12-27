import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/layout";
import Random from "./pages/Random";
import "./index.css";

import Home from "./pages/Home";
import Donate from "./pages/Donate";
import Bug from "./pages/Bug";
import About from "./pages/About";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="random" element={<Random />} />
          <Route path="bug" element={<Bug />} />
          <Route path="donate" element={<Donate />} />
          {/*  
          <Route path="*" element={<NoPage />} /> */}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
