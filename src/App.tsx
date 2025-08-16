import { BrowserRouter, Routes, Route } from "react-router-dom";
import Begin from "./pages/begin";
import Pokemon from "./pages/pokemon";
import Types from "./pages/types";
import Template from "./Template";


function App() {
  return (
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<Begin/>}></Route>
          <Route path="/pokemon" element={<Template left="/types" right="/types"><Pokemon/></Template>} />
          <Route path="types/" element={<Template left="/pokemon" right="/pokemon"><Types/></Template>} />
        </Routes>
    </BrowserRouter>
  );
}

export default App
