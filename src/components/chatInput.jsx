import React, { useState } from 'react';
import socket from '../socket';

const ChatInput = () => {
  const [message, setMessage] = useState('');
  const [name, setName] = useState(''); // Store the user's name
  const [isNameSet, setIsNameSet] = useState(false); // Check if name is set

  const handleSetName = () => {
    if (name.trim()) {
      setIsNameSet(true); // Confirm name input
    }
  };

  const sendMessage = () => {
    if (message.trim() && isNameSet) {
      const newMessage = {
        id: Date.now(),
        text: message,
        user: name, // Use the user's name in the message
      };

      // Emit the message to the server
      socket.emit('chat message', newMessage);

      // Reset input field
      setMessage('');
    }
  };

  return (
    <>
      {!isNameSet ? (
        <div style={{ display: 'flex', alignItems: 'center', padding: '10px' }}>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter your name..."
            style={{
              flex: 1,
              padding: '10px',
              borderRadius: '8px',
              border: '1px solid #ccc',
              marginRight: '8px',
              boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)',
            }}
          />
          <button
            onClick={handleSetName}
            style={{
              padding: '10px 15px',
              backgroundColor: '#007bff',
              color: 'white',
              border: 'none',
              borderRadius: '8px',
              cursor: 'pointer',
              boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)',
              transition: 'background-color 0.3s',
            }}
            onMouseOver={(e) => (e.target.style.backgroundColor = '#0056b3')}
            onMouseOut={(e) => (e.target.style.backgroundColor = '#007bff')}
          >
            Set Name
          </button>
        </div>
      ) : (
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            padding: '10px',
            background: 'linear-gradient(to bottom right, #ff6a00, #ee0979)',
            borderRadius: '10px',
          }}
        >
          <input
            type="text"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Type your message..."
            style={{
              flex: 1,
              padding: '10px',
              borderRadius: '8px',
              border: '1px solid #ccc',
              marginRight: '8px',
              boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)',
            }}
          />
          <button
            onClick={sendMessage}
            style={{
              padding: '10px 15px',
              backgroundColor: '#28a745',
              color: 'white',
              border: 'none',
              borderRadius: '50%',
              cursor: 'pointer',
              boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)',
              transition: 'background-color 0.3s, transform 0.1s',
            }}
            onMouseOver={(e) => (e.target.style.backgroundColor = '#218838')}
            onMouseOut={(e) => (e.target.style.backgroundColor = '#28a745')}
          >
            <i className="fa-solid fa-angles-right"></i>
          </button>
        </div>
      )}
    </>
  );
};

export default ChatInput;



