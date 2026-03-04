export enum GameSymbol {
    X = "x",
    O = "o",
    EMPTY = "",
}

export enum GameActionType {
    INITIALIZE_DATA = "INITIALIZE_DATA",
    CHANGE_PLAYER = "CHANGE_PLAYER",
    UPDATE_TABS_LIST = "UPDATE_TABS_LIST",
    GAME_OVER = "GAME_OVER",
    DRAW = "DRAW",
    RESET_BOARD = "RESET_BOARD",
}

export type PlayerType = "player1" | "player2";

export type TabeListType = {
    type: GameSymbol;
    toggle: boolean;
}