import React from 'react';
import { FaUser } from 'react-icons/fa';
import { MdDelete } from 'react-icons/md';
import SelectedCard from '../../../ui/SelectedCard';
import { toast } from 'react-toastify';

const SelectedPlayers = ({ selectedPlayers, setSelectedPlayers, coin, setCoin }) => {

    const handleDeleteSelectedPlayer = (player) => {
        const filteredPlayers = selectedPlayers.filter(selectedPlayer => selectedPlayer.player_name != player.player_name);
        setSelectedPlayers(filteredPlayers);
        setCoin(coin + player.price);
        toast.info(`${player.player_name} is Removed.`);
    }

    return (
        <div className='space-y-5'>
            {selectedPlayers.length === 0 ? (
                <div className='min-h-80 flex flex-col justify-center items-center text-center space-y-4'>
                    <h2 className='text-3xl font-bold'>No players selected</h2>
                    <p className='text-gray-600 '>Go to Available For Selected Players</p>
                </div>
            ) : (
                selectedPlayers.map(player => (
                    <SelectedCard
                        key={player.id}
                        player={player}
                        handleDeleteSelectedPlayer={handleDeleteSelectedPlayer}
                    ></SelectedCard>
                ))
            )}

        </div>
    );
};

export default SelectedPlayers;