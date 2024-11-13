import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addMessage } from '../redux/chatSlice';
import socket from '../socket';

const ChatMessages = () => {
  const messages = useSelector((state) => state.chat.messages);
  const dispatch = useDispatch();

  useEffect(() => {
    // Listen for 'chat message' event from the server
    socket.on('chat message', (message) => {
      // Add the received message to the Redux store
      dispatch(addMessage(message));
    });

    return () => {
      socket.off('chat message');
    };
  }, [dispatch]);

  return (
    <div
      style={{
        background: 'linear-gradient(to bottom right, #ff6a00, #ee0979)',
        borderRadius: '10px',
        padding: '15px',
        overflowY: 'auto',
        height: '100%',
        color: 'white',
      }}
    >
      <ul style={{ listStyleType: 'none', padding: 0, margin: 0 }}>
        {messages.map((msg, index) => (
          <li
            key={msg.id || index}
            style={{
              padding: '10px',
              marginBottom: '8px',
              backgroundColor: 'rgba(255, 255, 255, 0.1)',
              borderRadius: '8px',
              boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)',
              transition: 'background-color 0.3s',
            }}
            onMouseOver={(e) => e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.2)'}
            onMouseOut={(e) => e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.1)'}
          >
            <strong>{msg.user}:</strong> {msg.text}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ChatMessages;



