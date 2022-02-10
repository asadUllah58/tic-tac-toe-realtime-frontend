import React, { useEffect } from "react"

import { CustomModal, TicTacToe } from "../../components"
import { useGameContext } from "../../context/GameContext/GameContextProvider";
import { HomeStyle } from "./Home.style"

export default function Home() {
    
    const { state, dispatch } = useGameContext();
    console.log("state.isGameOver: ", state, state.isGameOver)
    useEffect(() => {
        if ( state.isGameOver ) return;

        if(
            (!state.isGameOver && state.tabsList[0].type !== "" && state.tabsList[0].type === state.tabsList[1].type && state.tabsList[1].type === state.tabsList[2].type) ||
            (!state.isGameOver && state.tabsList[3].type !== "" && state.tabsList[3].type === state.tabsList[4].type && state.tabsList[4].type === state.tabsList[5].type) ||
            (!state.isGameOver && state.tabsList[6].type !== "" && state.tabsList[6].type === state.tabsList[7].type && state.tabsList[7].type === state.tabsList[8].type) ||
            (!state.isGameOver && state.tabsList[0].type !== "" && state.tabsList[0].type === state.tabsList[3].type && state.tabsList[3].type === state.tabsList[6].type) ||
            (!state.isGameOver && state.tabsList[1].type !== "" && state.tabsList[1].type === state.tabsList[4].type && state.tabsList[4].type === state.tabsList[7].type) ||
            (!state.isGameOver && state.tabsList[2].type !== "" && state.tabsList[2].type === state.tabsList[5].type && state.tabsList[5].type === state.tabsList[8].type) ||
            (!state.isGameOver && state.tabsList[0].type !== "" && state.tabsList[0].type === state.tabsList[4].type && state.tabsList[4].type === state.tabsList[8].type) ||
            (!state.isGameOver && state.tabsList[2].type !== "" && state.tabsList[2].type === state.tabsList[4].type && state.tabsList[4].type === state.tabsList[6].type) 
        ) {
            dispatch({
                type: "GAME_OVER"
            })
            dispatch({
                type: "RESET_BOARD"
            })
        }
    }, [state, dispatch])
    
    return (
        <HomeStyle>
            <TicTacToe />

            {
                state.isGameOver && (
                    <CustomModal 
                        title={`${state.player} Win!`}
                        isVisible={state.isGameOver}
                    />
                )
            }
        </HomeStyle>
    )
}