import React, { Component } from "react";
import PropTypes from "prop-types";
import ChatBot from "react-simple-chatbot";
import Review from "./Review";
import "./App.css";
import {steps} from './steps';
import { ThemeProvider } from 'styled-components';
import * as logo from './image/logo.png';
import Contreras from './image/logo.png'

class App extends Component {
  render() {
    const theme = {
      background: '#f5f8fb',
      fontFamily: 'Helvetica Neue',
      headerBgColor: '#EF6C00',
      headerFontColor: '#fff',
      headerFontSize: '15px',
      botBubbleColor: '#EF6C00',
      botFontColor: '#fff',
      userBubbleColor: '#fff',
      userFontColor: '#4a4a4a'
    };
    
    return (
      <ThemeProvider theme={theme}>
      <div id="Main_Page">
        <ChatBot
          steps={steps}
          botAvatar= {Contreras}
          headerTitle=" "
        />
      </div>
      </ThemeProvider>
    );
  }
}
export default App;
