import React from 'react';

export function Conversation({ socket }) {
    const [chats, setChats] = React.useState([]);
    React.useEffect(() => {
      socket.addObserver((chat) => {
        setChats((prevMessages) => [...prevMessages, chat]);
      });
    }, [socket]);
  
    const chatEls = chats.map((chat, index) => (
      <div key={index}>
        <span className={chat.event}>{chat.from}</span> {chat.msg}
      </div>
    ));
  
    return (
      <main>
        <div id='chat-text'>{chatEls}</div>
      </main>
    );
  }