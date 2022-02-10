import React from "react"
import { useGameContext } from "../../context/GameContext/GameContextProvider";

import { CustomModalStyle } from "./CustomModal.style";

type CustomModalProps = {
    title: string;
    isVisible: boolean;
}

const CustomModal = (props: CustomModalProps) => {
    const { title, isVisible } = props;
    
    const { dispatch } = useGameContext();
    
    const handleClose = () => {
        dispatch({
            type: "INITIALIZE_DATA",
        })
    }

    return (
        <CustomModalStyle
        title="Game Over!"
        visible={isVisible} 
        onOk={handleClose} 
        onCancel={handleClose}
        >
            {title}
        </CustomModalStyle>
    )
}

export default CustomModal;