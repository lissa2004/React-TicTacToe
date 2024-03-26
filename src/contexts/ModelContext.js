import { useState, createContext } from "react";
import { useModal} from "../hooks/useModal"
import ModalTempate from "../components/Modal/ModalTempate";

export const ModelContext = createContext({});

export function ModelContextProvider({children}) {
    const {modal, modalContext, handelModel} = useModal();

    return (
        <ModelContext.Provider value={{ modal, modalContext, handelModel }}>
          <ModalTempate />
          {children}
        </ModelContext.Provider>
    );
}