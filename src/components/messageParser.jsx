// in MessageParser.jsx
import React from 'react';

const MessageParser = ({ children, actions }) => {
  const parse = (message) => {
    if (message.includes('hello')) {
      actions.handleHello();
    }else if(message.includes('hi')) {
      actions.handleHello();
    }

    if (message.includes('dog')) {
      actions.handleDog();
    } 
    if (message.includes('Okay, what is your case type?')) {
      actions.handleClientType();
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