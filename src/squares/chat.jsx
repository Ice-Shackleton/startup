function Chat({ webSocket }) {
    const [name, setName] = React.useState('');
  
    return (
      <main>
        <Name updateName={setName} />
        <Message name={name} webSocket={webSocket} />
        <Conversation webSocket={webSocket} />
      </main>
    );
  }