import { createContext, useContext, useState, useEffect } from "react";

//creo il contesto
const BudgetContext = createContext();

//creo il provider
function BudgetProvider({ children }) {

    //creo var di stato
    const [budgetMode, setBudgetMode] = useState(false)

    return (
        <BudgetContext.Provider
            value={{
                budgetMode,
                setBudgetMode
            }}>
            {children}
        </BudgetContext.Provider>

    );
}

//definisco hook per consumare il contesto
function useBudget() {
    const contex = useContext(BudgetContext)
    return contex;
}

//esporto il provider
export { BudgetProvider, useBudget }