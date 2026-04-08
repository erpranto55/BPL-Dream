import React from 'react';
import { FaFlag, FaUser } from 'react-icons/fa';


const Card = ({player}) => {
    return (
        <div>
            <div className="card bg-base-100 shadow-sm">
                <figure>
                    <img
                        src={player.image}
                        alt="Shoes"
                        className='max-h-60' />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">
                        <FaUser />{player.player_name}
                    </h2>
                    <div className='flex justify-between items-center'>
                        <div className='flex gap-2 items-center text-gray-400'>
                            <FaFlag />
                            <p>{player.country}</p>
                        </div>
                        <button className='btn'>{player.type}</button>
                    </div>

                    <div className='divider'></div>

                    <h2 className='font-bold'>Rating:{player.rating}</h2>
                    <div className='flex justify-between'>
                        <p className='font-semibold'>{player.batting_style}</p>
                        <p className='text-right'>{player.bowling_style}</p>
                    </div>

                    <div className="card-actions justify-between items-center">
                        <p className='font-semibold'>Price: ${player.price}</p>
                        <button className="btn ">Choose Player</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Card;