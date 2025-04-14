import React from 'react';
import './squares.css';

export function Squares( props ) {
  const [message, setMessage] = React.useState('');

  function doneMessage(e) {
    if (e.key === 'Enter') {
      sendMsg();
    }
  }

  function sendMsg() {
    webSocket.sendMessage(name, message);
    setMessage('');
  }
  
  
  return (

    <main>


      <div class="screen-boxes">


        {/* <div class="left-box">


          <div class="game"> </div>


        </div> */}


        <div class="right-box">


          <div class="input-group mb-3">


            <input class="form-control" type="message" placeholder="Type your message here..." />


          </div>


          <button type="submit" class="submit">Send</button>


          {/* <div class="dpad-container">


            <button class="dpad-button up">↑</button>


            <button class="dpad-button left">←</button>


            <div class="center"></div>


            <button class="dpad-button right">→</button>


            <button class="dpad-button down">↓</button>


          </div> */}


        </div>


      </div>

    </main>

  );

}