import React from 'react';
import ReactDOM from 'react-dom';
import '../public/css/MyStyle.css';
import '../public/css/nav.css';
import Cursor from './cursor';
import CollapsiblePanel from './collapsiblePanel';
import MainPanel from './mainPanel';


  function app() {
    return (
      <div className="app">
        <Cursor/>
        <CollapsiblePanel/>
        <MainPanel />
      </div>
    )
  }
  
  ReactDOM.render(
    app(),
    document.getElementById('root')
  );
  