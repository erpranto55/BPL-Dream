import React from 'react';
import { FaUser } from 'react-icons/fa';
import { MdDelete } from 'react-icons/md';

const SelectedCard = ({player,handleDeleteSelectedPlayer}) => {
    return (
        <div
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
    );
};

export default SelectedCard;