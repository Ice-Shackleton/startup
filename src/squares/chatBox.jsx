function ChatBox({ webSocket }) {
    const [chats, setChats] = React.useState([]);
    React.useEffect(() => {
      webSocket.addObserver((chat) => {
        setChats((prevMessages) => [...prevMessages, chat]);
      });
    }, [webSocket]);
  
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