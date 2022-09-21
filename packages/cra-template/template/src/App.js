import { Buffer } from 'buffer/';
import { create } from 'ipfs-http-client';

import logo from './logo.svg';

import './App.css';

function App() {
  const upload = async () => {
    const projectId = '29iQPvAdeIYGWCcM2wOQZLMljbt';
    const projectSecret = '95b36673339827ad7547cf8aff56d82b';
    const auth =
      'Basic ' +
      Buffer.from(projectId + ':' + projectSecret).toString('base64');
    const client = create({
      host: 'ipfs.infura.io',
      port: 5001,
      protocol: 'https',
      headers: {
        authorization: auth,
      },
    });
    const { cid } = await client.add('Hello world!');
    console.log('cid', cid);
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Hello, edit <code>src/App.js</code> and save to reload.
        </p>
        <button onClick={() => upload()}>Upload</button>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
