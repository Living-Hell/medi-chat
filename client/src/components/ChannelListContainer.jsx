import React, { useState } from 'react';
import Cookies from 'universal-cookie';
import { ChannelList, useChatContext } from 'stream-chat-react';
import { ChannelSearch, TeamChannelList, TeamChannelPreview } from './';
import HospitalIcon from '../assets/hospital.png';
import LogoutIcon from '../assets/logout.png';

const cookies = new Cookies();

const Sidebar = ({ logout }) => (
    <div className = "channel-list__sidebar">
        <div className = "channel-list__sidebar__icon1">
            <div className = "icon1__inner">
                <img src = {HospitalIcon} alt="Hospital" width="30" />
            </div>
        </div>
        <div className = "channel-list__sidebar__icon2">
            <div className = "icon1__inner" onClick={logout}>
                <img src = {LogoutIcon} alt="Logout" width="30" />
            </div>
        </div>
    </div>
);

const CompanyHeader = () => (
    <div className = "channel-list__header">
        <h1 className = "channel-list__header__text">Medi Chat</h1>
    </div>
);

const customChannelTeamFilter = (channels) => {
    return channels.filter((channel) => channel.type === 'team' );
}

const customChannelMessagingFilter = (channels) => {
    return channels.filter((channel) => channel.type === 'messaging' );
}

const ChannelListContent = ({ isCreating, setIsCreating, setCreateType, setIsEditing, setToggleContainer }) => {
    const { client } = useChatContext();

    const logout = () => {
        cookies.remove("token");
        cookies.remove('userId');
        cookies.remove('username');
        cookies.remove('fullName');
        cookies.remove('avatarURL');
        cookies.remove('hashedPassword');
        cookies.remove('phoneNumber');

        window.location.reload();

    }

    const filter = { members: { $in: [client.userID] }};

  return (
    <>
        <Sidebar logout = {logout}/>
        <div className = "channel-list__list__wrapper">
            <CompanyHeader />
            <ChannelSearch />
            <ChannelList 
                filters={filter}
                channelRenderFilterFn = {customChannelTeamFilter}
                List={(listprops) => (
                    <TeamChannelList 
                        {...listprops}
                        type = "team"
                        isCreating = {isCreating} 
                        setIsCreating = {setIsCreating} 
                        setCreateType = {setCreateType}
                        setIsEditing = {setIsEditing}
                        setToggleContainer = {setToggleContainer}
                    />
                )}
                Preview = {(previewProps) => (
                    <TeamChannelPreview
                        {...previewProps}
                        setIsCreating = {setIsCreating}
                        setIsEditing = {setIsEditing}
                        setToggleContainer = {setToggleContainer}
                        type = "team"
                    />
                )}
            />
            <ChannelList 
                filters={filter}
                channelRenderFilterFn = {customChannelMessagingFilter}
                List={(listprops) => (
                    <TeamChannelList 
                        {...listprops}
                        type = "messaging"
                        isCreating = {isCreating} 
                        setIsCreating = {setIsCreating} 
                        setCreateType = {setCreateType}
                        setIsEditing = {setIsEditing}
                        setToggleContainer = {setToggleContainer}
                    />
                )}
                Preview = {(previewProps) => (
                    <TeamChannelPreview
                        {...previewProps}
                        setIsCreating = {setIsCreating}
                        setIsEditing = {setIsEditing}
                        setToggleContainer = {setToggleContainer}
                        type = "messaging"
                    />
                )}
            />
        </div>
    </>
  )
};

const ChannelListContainer = ({ setIsCreating, setCreateType, setIsEditing }) => {
    const [toggleContainer, setToggleContainer] = useState(false);

    return(
        <>
            <div className='channel-list__container'>
                <ChannelListContent
                    setIsCreating = {setIsCreating}
                    setCreateType = {setCreateType}
                    setIsEditing = {setIsEditing}
                />
            </div>

            <div className='channel-list__container-responsive'
                style={{ left: toggleContainer ? "0%" : "-89%", backgroundColor: "#005fff"}}
            >
                <div className='channel-list__container-toggle' onClick={() => setToggleContainer((prevToggleContainer) => !prevToggleContainer)}>
                </div>
                <ChannelListContent
                    setIsCreating = {setIsCreating}
                    setCreateType = {setCreateType}
                    setIsEditing = {setIsEditing}
                    setToggleContainer = {setToggleContainer}
                />
            </div>
        </>
    )
}

export default ChannelListContainer