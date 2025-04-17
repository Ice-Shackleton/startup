import React from 'react';
import ReactDOM from 'react-dom/client';
import { AuthState } from '../login/authState';
import { Chat } from './chat.jsx';
import ChatClient from './chatClient.jsx'; // could be a problem
import './squares.css';

export function Squares({userName, authState}) {
  const [webSocket] = React.useState(new ChatClient());
  console.log("Squares rendered");
  console.log("authState:", authState);

  return (
    <main className='container-fluid text-center text-white-50'>
      <div>
        {authState !== AuthState.Unknown && <h1>Coolsquares Incorporated</h1>}
        {authState === AuthState.Unauthenticated && <h1>Coolsquares Incorporated</h1>}
        {authState === AuthState.Authenticated && (
          <>
            <Chat chat={webSocket} name={userName} />
          </>
        )}
        {authState === AuthState.Authenticated && (
          <>
            <p>Rendering Chat...</p>
            <Chat chat={webSocket} username={userName} />
          </>
        )}
      </div>
    </main>
  );
}
