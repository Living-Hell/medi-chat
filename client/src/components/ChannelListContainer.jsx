import React from 'react';
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

const ChannelListContainer = ({ isCreating, setIsCreating, setCreateType, setIsEditing }) => {

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

  return (
    <>
        <Sidebar logout = {logout}/>
        <div className = "channel-list__list__wrapper">
            <CompanyHeader />
            <ChannelSearch />
            <ChannelList 
                filters={{}}
                channelRenderFilterFn = { () => {}}
                List={(listprops) => (
                    <TeamChannelList 
                        {...listprops}
                        type = "team"
                        isCreating = {isCreating} 
                        setIsCreating = {setIsCreating} 
                        setCreateType = {setCreateType}
                        setIsEditing = {setIsEditing}
                    />
                )}
                Preview = {(previewProps) => (
                    <TeamChannelPreview
                        {...previewProps}
                        type = "team"
                    />
                )}
            />
            <ChannelList 
                filters={{}}
                channelRenderFilterFn = { () => {}}
                List={(listprops) => (
                    <TeamChannelList 
                        {...listprops}
                        type = "messaging"
                        isCreating = {isCreating} 
                        setIsCreating = {setIsCreating} 
                        setCreateType = {setCreateType}
                        setIsEditing = {setIsEditing}
                    />
                )}
                Preview = {(previewProps) => (
                    <TeamChannelPreview
                        {...previewProps}
                        type = "messaging"
                    />
                )}
            />
        </div>
    </>
  )
};

export default ChannelListContainer