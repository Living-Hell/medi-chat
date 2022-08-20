import React from 'react';
import { StreamChat } from 'stream-chat';
import { Chat } from 'stream-chat-react';
import Cookies from 'universal-cookie';
import './App.css';
import { ChannelContainer, ChannelListContainer } from './components';

const apiKey = '96bypmfsvj3h';

const client = StreamChat.getInstance(apiKey);

const App = () => {
  return (
    <div className="app__wrapper">
        <Chat client={client} theme = "dark">
            <ChannelListContainer
            
            />
            <ChannelContainer
            
            />
        </Chat>
    </div>
  )
}

export default App