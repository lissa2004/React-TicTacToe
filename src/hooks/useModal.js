import { useState } from "react";

export const useModal = () => {
    const [modal, setModal] = useState(false);
    const [madalContent, setModalContent] = useState("IM A MODAL");

    const handleModal = (content = false) => {
        setModal(!modal);
        if(content){
           setModalContent(content)
        }
      };
    
    return{modal, madalContent, handleModal}
};