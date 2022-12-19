import Chatbot from 'react-chatbot-kit'
import 'react-chatbot-kit/build/main.css';

import ActionProvider from './components/actionProvider';
import MessageParser from './components/messageParser';
import config from './components/config';

const saveMessages = (messages, HTMLString) => {
  console.log('in')
  localStorage.setItem('chat_messages', JSON.stringify(messages));
};

const loadMessages = () => {
  const messages = JSON.parse(localStorage.getItem('chat_messages'));
  return messages;
};

const AppReactBot =()=> {
  return (
    <div className="App">
      <header className="App-header">
        <Chatbot config={config} actionProvider={ActionProvider}  messageHistory={loadMessages()} saveMessages={saveMessages}  messageParser={MessageParser} />
      </header>
    </div>
  );
}
export default AppReactBot;