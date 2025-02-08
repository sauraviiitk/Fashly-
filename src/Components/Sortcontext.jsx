import { createContext, useContext, useState } from "react";

const SortContext = createContext(); // Fix naming convention

export const SortProvider = ({ children }) => {
    const [sortoption, setsortoption] = useState(''); // Fix variable names
    return (
        <SortContext.Provider value={{ sortoption, setsortoption }}>
            {children}
        </SortContext.Provider>
    );
};

// Custom hook for using the sort context
export const useSort = () => {
    const context = useContext(SortContext);
    if (!context) {
        throw new Error("useSort must be used within a SortProvider");
    }
    return context;
};
