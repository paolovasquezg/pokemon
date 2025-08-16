import { BrowserRouter, Routes, Route } from "react-router-dom";
import Pokemon from "./pages/pokemon";
import Types from "./pages/types";
import Template from "./Template";


function App() {
  return (
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<Template left="/types" right="/types"><Pokemon/></Template>} />
          <Route path="types/" element={<Template left="/" right="/"><Types/></Template>} />
        </Routes>
    </BrowserRouter>
  );
}

export default App
