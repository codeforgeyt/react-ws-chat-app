import { Fragment } from 'react';
import './App.css';
import Bar from './components/bar/Bar';
import Chat from './components/chat/Chat';

function App() {
  return (
    <Fragment>
      <Bar />
      <Chat />
    </Fragment>
  );
}

export default App;
