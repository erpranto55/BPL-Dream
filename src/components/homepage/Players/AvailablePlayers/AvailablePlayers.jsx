import React from 'react';
import { FaFlag, FaUser } from "react-icons/fa";
import Card from '../../../ui/card';


const AvailablePlayers = ({ players, setCoin, coin, setSelectedPlayers, selectedPlayers }) => {
    // console.log(players);
    return (
        <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-5 mx-auto '>
            {
                players.map(player => {
                    return (
                        <Card player={player}
                            key={player.id}
                            setCoin={setCoin}
                            coin={coin}
                            setSelectedPlayers={setSelectedPlayers}
                            selectedPlayers={selectedPlayers} />
                    )
                })
            }


        </div>
    );
};

export default AvailablePlayers;