import React, { createContext, useState } from "react";

interface RefreshContextType {
    refresh: boolean;
    setRefresh: React.Dispatch<React.SetStateAction<boolean>>
}

export const RefreshContext = createContext<RefreshContextType>({
    refresh: false,
    setRefresh: ()=>{}
});

interface ResfreshContextChildren{
    children: React.ReactNode 
}

export const RefreshContextProvider: React.FC<ResfreshContextChildren> = ({ children }) => {
    const [refresh, setRefresh] = useState(false);

    return (
        <RefreshContext.Provider value={{ refresh, setRefresh }}>
            {children}
        </RefreshContext.Provider>
    );
};
