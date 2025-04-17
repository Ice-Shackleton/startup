import React from 'react';
import { Message } from './message';
import { Conversation }  from './conversation';

export function Chat({ chat, username }) {
  return (
    <main>
      <Message user={username} socket={chat} />
      <Conversation socket={chat} />
    </main>
  );
}
