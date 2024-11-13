import React, { useEffect } from 'react';
import { Provider } from 'react-redux';
import store from './redux/store';
import ChatInput from './components/chatInput';
import ChatMessages from './components/chatMessages';
import socket from './socket';

const App = () => {
  useEffect(() => {
    socket.connect();
    
    return () => {
      socket.disconnect();
    };
  }, []);

  return (
    <Provider store={store}>
      <div style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          maxWidth: '600px',
          height: '90vh',
          margin: '20px auto',
          padding: '20px',
          borderRadius: '15px',
          backgroundImage: "url('https://wallpapercave.com/wp/wp3998726.jpg')",
          backgroundSize: 'cover',
          boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
          color: 'white',
        }}
      >
        <div style={{
            flex: 1,
            overflowY: 'auto',
            padding: '20px',
            backgroundColor: 'rgba(0, 0, 0, 0.6)',
            borderRadius: '10px',
            marginBottom: '10px',
          }}
        >
          <ChatMessages />
        </div>
        
        <div style={{
            display: 'flex',
            alignItems: 'center',
            padding: '10px',
            backgroundColor: 'rgba(0, 0, 0, 0.7)',
            borderRadius: '10px',
          }}
        >
          <ChatInput />
        </div>
      </div>
    </Provider>
  );
};

export default App;


