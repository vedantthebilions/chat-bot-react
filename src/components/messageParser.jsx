// in MessageParser.jsx
import React from 'react';

const MessageParser = ({ children, actions,props }) => {
  

  const parse = (message,other) => {
    if (message.includes('hello')) {
      actions.handleHello();
    }else if(message.includes('hi')) {
      actions.handleHello();
    }else if (message.includes('dog')) {
      actions.handleDog();
    }else if (message.includes('Okay, what is your case type?')) {
      actions.handleClientType();
    }else{
      actions.handleUserMessage();
    }
  };

  return (
    <div>
      {React.Children.map(children, (child) => {
        return React.cloneElement(child, {
          parse: parse,
          actions,
        });
      })}
    </div>
  );
};

export default MessageParser;