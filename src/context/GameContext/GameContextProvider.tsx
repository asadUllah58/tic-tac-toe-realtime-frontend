import React, { createContext, Dispatch, useContext, useReducer } from "react";

import { TabeListType, GameSymbol, GameActionType } from "../../types";

const getInitialTabsList = (): TabeListType[] => [
  {
    type: GameSymbol.EMPTY,
    toggle: false,
  },
  {
    type: GameSymbol.EMPTY,
    toggle: false,
  },
  {
    type: GameSymbol.EMPTY,
    toggle: false,
  },
  {
    type: GameSymbol.EMPTY,
    toggle: false,
  },
  {
    type: GameSymbol.EMPTY,
    toggle: false,
  },
  {
    type: GameSymbol.EMPTY,
    toggle: false,
  },
  {
    type: GameSymbol.EMPTY,
    toggle: false,
  },
  {
    type: GameSymbol.EMPTY,
    toggle: false,
  },
  {
    type: GameSymbol.EMPTY,
    toggle: false,
  },
];

type GameActions =
  | {
    type: GameActionType.INITIALIZE_DATA;
  }
  | {
    type: GameActionType.CHANGE_PLAYER;
  }
  | {
    type: GameActionType.UPDATE_TABS_LIST;
    payload: any;
  }
  | {
    type: GameActionType.GAME_OVER;
  }
  | {
    type: GameActionType.DRAW;
  }
  | {
    type: GameActionType.RESET_BOARD;
  };

type GameContextStateType = {
  tabsList: TabeListType[];
  player: string;
  isGameOver: boolean;
  isDraw: boolean;
};

export type GameContextType = {
  state: GameContextStateType;
  dispatch: Dispatch<GameActions>;
};

const initialContent: GameContextStateType = {
  tabsList: getInitialTabsList(),
  player: "player1",
  isGameOver: false,
  isDraw: false,
};

export const GameContext = createContext<GameContextType>({
  state: {
    ...initialContent,
  },
  dispatch: () => undefined,
});

export const useGameContext = () => useContext(GameContext);

const reducer = (state: GameContextStateType, action: GameActions): GameContextStateType => {
  switch (action.type) {
    case GameActionType.INITIALIZE_DATA: {
      return {
        ...initialContent,
        tabsList: getInitialTabsList(),
      };
    }

    case GameActionType.UPDATE_TABS_LIST: {
      const tempTabsList = state.tabsList.map((tab, index) => {
        if (index === action.payload.tabIndex) {
          const type: GameSymbol = state.player === "player1" ? GameSymbol.O : GameSymbol.X;
          return {
            ...tab,
            type,
          };
        }
        return tab;
      });

      return {
        ...state,
        tabsList: tempTabsList,
      };
    }

    case GameActionType.CHANGE_PLAYER: {
      const player =
        !state.isGameOver && state.player === "player1" ? "player2" : "player1";

      return {
        ...state,
        player,
      };
    }

    case GameActionType.GAME_OVER: {
      console.log(state.isGameOver);
      return {
        ...state,
        isGameOver: true,
      };
    }

    case GameActionType.DRAW: {
      return {
        ...state,
        isDraw: true,
      };
    }

    case GameActionType.RESET_BOARD: {
      return {
        ...state,
        tabsList: getInitialTabsList(),
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
