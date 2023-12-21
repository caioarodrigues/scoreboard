import { createContext, Context } from 'react';
import { Player } from '../types/Player';

interface PlayersContextProps {
  players: Player[];
  setPlayers: React.Dispatch<React.SetStateAction<Player[]>>;
}

const PlayersContext: Context<PlayersContextProps> = createContext<PlayersContextProps>({
  players: [],
  setPlayers: () => {}, // ou pode ser setPlayers: () => undefined;
});

export default PlayersContext;