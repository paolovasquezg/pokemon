import { BrowserRouter, Routes, Route } from "react-router-dom";
import Pokemon from "./pages/pokemon";
import Template from "./Template";


function App() {
  return (
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<Template left="/" right="/"><Pokemon/></Template>} />
        </Routes>
    </BrowserRouter>
  );
}

export default App
