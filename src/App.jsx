// importiamo tutti i componenti di gestionde delle rotte
import { BrowserRouter, Routes, Route } from "react-router-dom";
//importo budgetprovider
import { BudgetProvider } from "./contexts/BudgetContext";

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
    {/* wrappo tutto qunato in modo tale che qualsiasi componente contenuto qui e i componenti figli possono usare i dati creati nel contesto */}
    <BudgetProvider> 
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
    </BudgetProvider>
  </>
  )

}

export default App
