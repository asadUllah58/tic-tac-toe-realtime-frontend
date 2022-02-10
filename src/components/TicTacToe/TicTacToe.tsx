import React, { useCallback } from "react"
import { useGameContext } from "../../context/GameContext/GameContextProvider";

import { TabeListType } from "../../types";
import { TicTacToeStyle } from "./TicTacToe.style";

const TicTacToe = () => {
    const { state, dispatch } = useGameContext();

    const handleTabClick = useCallback((tabIndex: number) => {
        if(state.tabsList[tabIndex].type !== "") return;

        if(state.isGameOver) return;

        if(!state.isGameOver) {
            dispatch({
                type: "UPDATE_TABS_LIST",
                payload: {
                    tabIndex
                }
            })
            dispatch({
                type: "CHANGE_PLAYER"
            })
        }
    }, [state, dispatch]);

    return (
        <TicTacToeStyle>
            {
                state.tabsList.map((data: TabeListType, index: number) => {
                    const { type } = data;
                    return (
                        <div className="tab" key={`tab-${index}`} onClick={() => handleTabClick(index)}>{type}</div>
                    )
                })
            }
        </TicTacToeStyle>
    )
}

export default TicTacToe;