import React, { useState } from 'react';
import CodeEditor from './components/CodeEditor';
import Chat from './components/Chat';

const App = () => {
  const [code, setCode] = useState('// Start coding...');

  return (
    <div className="App">
      <h1>Collaborative Code Editor</h1>
      <CodeEditor code={code} onChange={setCode} />
      <Chat />
    </div>
  );
};

export default App;
