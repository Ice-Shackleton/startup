import React from 'react';


export function Message({ user, socket }) {
  console.log('user:', user);
  console.log('socket:', socket);  
  
  const [message, setMessage] = React.useState('');
  
    function doneMessage(e) {
      if (e.key === 'Enter') {
        sendMsg();
      }
    }
  
    function sendMsg() {
      socket.sendMessage(user, message);
      setMessage('');
    }
  
    const disabled = user === '' || !socket.connected;
    return (
      <main style={{ position: 'fixed', bottom: 0, width: '100%' }}>
        <fieldset id='chat-controls'>
          <legend>Chat</legend>
          <input disabled={disabled} onKeyDown={(e) => doneMessage(e)} value={message} onChange={(e) => setMessage(e.target.value)} type='text' />
          <button disabled={disabled || !message} onClick={sendMsg}>
            Send
          </button>
        </fieldset>
      </main>
    );
    
  }