import {
  createContext,
  useContext,
  useState
} from "react";

import type { Player } from "../types/Player";

interface GameContextData {
  bluePlayer: Player;
  redPlayer: Player;

  totalPerguntas: number;

  setBluePlayer: React.Dispatch<
    React.SetStateAction<Player>
  >;

  setRedPlayer: React.Dispatch<
    React.SetStateAction<Player>
  >;

  setTotalPerguntas: React.Dispatch<
    React.SetStateAction<number>
  >;
}

const GameContext =
  createContext({} as GameContextData);

export function GameProvider({
  children
}: {
  children: React.ReactNode;
}) {

  const [bluePlayer, setBluePlayer] =
    useState<Player>({
      id: 1,
      nome: "",
      pontos: 0,
      cor: "blue"
    });

  const [redPlayer, setRedPlayer] =
    useState<Player>({
      id: 2,
      nome: "",
      pontos: 0,
      cor: "red"
    });

  const [totalPerguntas,
    setTotalPerguntas] =
    useState(3);

  return (
    <GameContext.Provider
      value={{
        bluePlayer,
        redPlayer,
        totalPerguntas,
        setBluePlayer,
        setRedPlayer,
        setTotalPerguntas
      }}
    >
      {children}
    </GameContext.Provider>
  );
}

// eslint-disable-next-line react-refresh/only-export-components
export function useGame() {
  return useContext(GameContext);
}