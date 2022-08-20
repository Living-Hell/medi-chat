import React from 'react';
import Cookies from 'universal-cookie';
import { ChannelList, useChatContext } from 'stream-chat-react';
import { ChannelSearch, TeamChannelList, TeamChannelPreview } from './';
import HospitalIcon from '../assets/hospital.png';
import LogoutIcon from '../assets/logout.png';

const Sidebar = () => (
    <div className = "channel-list__sidebar">
        <div className = "channel-list__sidebar__icon1">
            <div className = "icon1__inner">
                <img src = {HospitalIcon} alt="Hospital" width="30" />
            </div>
        </div>
        <div className = "channel-list__sidebar__icon2">
            <div className = "icon1__inner">
                <img src = {LogoutIcon} alt="Logout" width="30" />
            </div>
        </div>
    </div>
);

const CompanyHeader = () => {
    <div className = "channel-list__header">
        <h1 className = "channel-list__header__text">Medi Chat</h1>
    </div>
};

const ChannelListContainer = () => {
  return (
    <>
        <Sidebar />
        <div className = "channel-list__list__wrapper">
            <CompanyHeader />
        </div>
    </>
  )
};

export default ChannelListContainer