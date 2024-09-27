import React from 'react';
import { Topbar } from './global/Topbar';
import { Sidebar } from './global/Sidebar';

function App() {
  return (
    <div className="app">
      <div><Topbar/></div>
       <div><p>Application in Building State......" look here"</p></div>
       <div><Sidebar/></div> 
    </div>
  );
}

export default App;
