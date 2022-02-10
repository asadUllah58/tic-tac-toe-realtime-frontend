import React, { createContext, Dispatch, useContext, useReducer } from "react";

import { TabeListType } from "../../types";

const TABS_LIST: TabeListType[] = [
  {
    type: "",
    toggle: false,
  },
  {
    type: "",
    toggle: false,
  },
  {
    type: "",
    toggle: false,
  },
  {
    type: "",
    toggle: false,
  },
  {
    type: "",
    toggle: false,
  },
  {
    type: "",
    toggle: false,
  },
  {
    type: "",
    toggle: false,
  },
  {
    type: "",
    toggle: false,
  },
  {
    type: "",
    toggle: false,
  },
];

type GameActions =
  | {
      type: "INITIALIZE_DATA";
    }
  | {
      type: "CHANGE_PLAYER";
    }
  | {
      type: "UPDATE_TABS_LIST";
      payload: any;
    }
  | {
      type: "GAME_OVER";
    }
  | {
      type: "RESET_BOARD";
    };

type GameContextStateType = {
  tabsList: TabeListType[];
  player: string;
  isGameOver: boolean;
};

export type GameContextType = {
  state: GameContextStateType;
  dispatch: Dispatch<GameActions>;
};

const initialContent: GameContextStateType = {
  tabsList: TABS_LIST,
  player: "player1",
  isGameOver: false,
};

export const GameContext = createContext<GameContextType>({
  state: {
    ...initialContent,
  },
  dispatch: () => undefined,
});

export const useGameContext = () => useContext(GameContext);

const reducer = (state: GameContextStateType, action: GameActions) => {
  switch (action.type) {
    case "INITIALIZE_DATA": {
      return {
        ...state,
        ...initialContent,
      };
    }

    case "UPDATE_TABS_LIST": {
      const tempTabsList = state.tabsList;
      tempTabsList[action.payload.tabIndex].type =
        state.player === "player1" ? "o" : "x";

      return {
        ...state,
        tabsList: tempTabsList,
      };
    }

    case "CHANGE_PLAYER": {
      const player =
        !state.isGameOver && state.player === "player1" ? "player2" : "player1";

      return {
        ...state,
        player,
      };
    }

    case "GAME_OVER": {
      console.log(state.isGameOver);
      return {
        ...state,
        isGameOver: true,
      };
    }

    case "RESET_BOARD": {
      return {
        ...state,
        tabsList: TABS_LIST,
      };
    }

    default:
      return state;
  }
};

export default function GameContextProvider(props: {
  children: React.ReactChild;
}) {
  const { children } = props;
  const [state, dispatch] = useReducer(reducer, initialContent);

  return (
    <GameContext.Provider value={{ state, dispatch }}>
      {children}
    </GameContext.Provider>
  );
}
