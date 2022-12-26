import Chatbot from 'react-chatbot-kit'
import 'react-chatbot-kit/build/main.css';

import ActionProvider from './components/actionProvider';
import MessageParser from './components/messageParser';
import config from './components/config';
import { useState } from 'react';
import { ReactComponent as ButtonIcon } from "./image/robot.svg";

const saveMessages = (messages, HTMLString) => {
  console.log('in')
  // localStorage.setItem('chat_messages', JSON.stringify(messages));
};

const loadMessages = () => {
  const messages = JSON.parse(localStorage.getItem('chat_messages'));
  return messages;
};

const AppReactBot =()=> {
  
  const [showChatbot, toggleChatbot] = useState(false);

  return (
    
    <div className="App">
      <div className="App-header">
        {showChatbot && (
          <Chatbot config={config} actionProvider={ActionProvider} messageParser={MessageParser} />
        ) }

        <button
          className="app-chatbot-button"
          onClick={() => toggleChatbot((prev) => !prev)}
        >
          <ButtonIcon className="app-chatbot-button-icon" />
        </button>
        {/* <Chatbot config={config} actionProvider={ActionProvider} messageParser={MessageParser} /> */}
      </div>
    </div>
  );
}
export default AppReactBot;