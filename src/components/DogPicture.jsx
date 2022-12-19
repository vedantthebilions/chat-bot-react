import React from "react";

import "../App.css";

const DogPicture = (props) => {
  const options = [
    { text: "New Client", handler: props.actionProvider.handleClientType, id: 1,value:'newClient' },
    { text: "Former Client", handler: () => {}, id: 2 ,value:'formerClient'},
    { text: "Current Client", handler: () => {}, id: 3, value:'currentClient' },
  ];

  const optionsMarkup = options.map((option) => (
    <button
      className="idBkdM"
      key={option.id}
      onClick={()=>{option.handler(option)}}
      value={option.value}
    >
      {option.text}
    </button>
  ));

  return null;
};

export default DogPicture;