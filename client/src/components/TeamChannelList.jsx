import React from 'react';
import { AddChannel } from '../assets';

const TeamChannelList = ({ children,  error = false, laoding, type }) => {
    if(error){
        return type === 'team' ? (
            <div className='team-channel-list'>
                <p className='team-channel-list__message'>
                    Connection error, please wait a moment and try again.
                </p>
            </div>
        ) : null
    }

    if(laoding){
        return (
            <div className='team-channel-list'>
                <p className='team-channel-list__message laoding'>
                    {type === 'team' ? 'Channels' : 'Messages'} loading...
                </p>
            </div>
        )
    }

    return (
        <div className='team-channel-list'>
            <div className='team-channel-list__header'>
                <p className='team-channel-list__header__title'>
                    {type === 'team' ? 'Channels' : 'Direct Message'}
                </p>

            </div>
            {children}
        </div>
    )
}

export default TeamChannelList