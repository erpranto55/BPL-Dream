import React from 'react';
import { FaUser } from 'react-icons/fa';
import { MdDelete } from 'react-icons/md';

const SelectedPlayers = ({ selectedPlayers, setSelectedPlayers, coin, setCoin }) => {

    const handleDeleteSelectedPlayer = (player) => {
        const filteredPlayers = selectedPlayers.filter(selectedPlayer => selectedPlayer.player_name != player.player_name);
        setSelectedPlayers(filteredPlayers);
        setCoin(coin + player.price);
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
                    <div
                        key={player.id}
                        className="flex justify-between items-center bg-white border border-gray-200 rounded-2xl p-3 mx-10 shadow-sm"
                    >
                        <div className="flex items-center gap-4">
                            <img
                                src={player.image}
                                alt={player.player_name}
                                className="h-20 rounded-md"
                            />

                            <div>
                                <h2 className="font-semibold text-lg flex items-center gap-2">
                                    <FaUser></FaUser>
                                    {player.player_name}
                                </h2>
                                <p className="text-gray-600 text-sm font-semibold">
                                    {player.playerType}
                                </p>
                            </div>
                        </div>

                        <button
                            className="text-red-500 text-2xl"
                            onClick={() => handleDeleteSelectedPlayer(player)}>
                            <MdDelete />
                        </button>
                    </div>
                ))
            )}

        </div>
    );
};

export default SelectedPlayers;