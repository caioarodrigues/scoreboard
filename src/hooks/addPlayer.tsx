/* eslint-disable react-hooks/rules-of-hooks */
import { useContext } from "react";
import PlayersContext from "../context/PlayersContext";

export default function addPlayer (name: string) {
  const { players, setPlayers } = useContext(PlayersContext);

  const newPlayer = {
    id: players.length + 1,
    name,
    score: 0,
  };

  setPlayers([...players, newPlayer]);
  console.log(players);
  
}