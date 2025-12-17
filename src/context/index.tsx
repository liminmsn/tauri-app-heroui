import React, { ActionDispatch, createContext, useContext, useReducer } from "react";
import { data, reducer, reducerType } from "./state";

type BZHContextType = [typeof data, ActionDispatch<[action: reducerType]>]
const BZHContext = createContext<BZHContextType | null>(null)
function useBZHContext() {
    const context = useContext(BZHContext)
    if (!context) {
        throw new Error("useThemeData must be used within a ThemeProvider");
    }
    return context
}
function BZHProvider({ children }: { children: React.ReactNode }) {
    const [state, dispatch] = useReducer(reducer, data);
    return <BZHContext.Provider value={[state, dispatch]}>
        {children}
    </BZHContext.Provider>
}

export { useBZHContext, BZHProvider }