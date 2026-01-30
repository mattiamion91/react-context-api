// importiamo tutti i componenti di gestionde delle rotte
import { BrowserRouter, Routes, Route } from "react-router-dom";

// importiamo le varie pages da usare nelle rotte
import Homepage from "./pages/Homepage";
import ChiSiamo from "./pages/ChiSiamo";
import Prodotti from "./pages/Prodotti";
import DettaglioProdotto from "./pages/DettaglioProdotto";

// import del layout di ref
import DefaultLayout from "./layouts/DefaultLayout";

import './App.css'

function App() {

  return (<>
    <h1>sono app.jsx</h1>
    <BrowserRouter>
      <Routes>
        <Route element={<DefaultLayout />}>
          <Route index element={<Homepage />} />
          <Route path="/chisiamo" element={<ChiSiamo />} />
          <Route path="/prodotti">
            <Route index element={<Prodotti />} />
            <Route path=":id" element={<DettaglioProdotto />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  </>
  )

}

export default App
