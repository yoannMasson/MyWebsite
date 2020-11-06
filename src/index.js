import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import '../public/css/MyStyle.css';
import '../public/css/nav.css';
import Cursor from './cursor';
import CollapsiblePanel from './collapsiblePanel';
import MainPanel from './mainPanel';
import SideBar from './sidebar/sidebar';


  function App() {

    // Add this in node_modules/react-dom/index.js
    window.React1 = require('react');
    require('react-dom');
    window.React2 = require('react');
    console.log(window.React1 === window.React2);

  //  let [cursorGlowing, setCursorGlowing] = useState(false);
    
    let cursorGlowing = false;
    const glowCursor = (bool) => {
      cursorGlowing = true;
    }
    return (
      <div className="app">
        <SideBar glowCursor={() => glowCursor}/>
        <Cursor glow={cursorGlowing}/>
        <CollapsiblePanel/>
        <MainPanel />
      </div>
    )
  }
  
  ReactDOM.render(
    App(),
    document.getElementById('root')
  );
  