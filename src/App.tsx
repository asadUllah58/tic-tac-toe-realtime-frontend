import React from 'react';
import { Home } from './pages';

import 'antd/dist/antd.css'; // or 'antd/dist/antd.less'
import { GameContextProvider } from './context';

function App() {
  return (
    <GameContextProvider>
      <div className="App">
        <header className="App-header">
          <h1>Tic Tac Toe</h1>
        </header>

        <Home />
      </div>
    </GameContextProvider>
  );
}

export default App;
