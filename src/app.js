import { useState } from 'react';
import Cursor from './cursor';
import CollapsiblePanel from './collapsiblePanel';
import MainPanel from './mainPanel';
import SideBar from './sidebar/sidebar';


export default function App() {
  
    const [cursorGlowing, setCursorGlowing] = useState(false);

    function glowCursor (bool) {
      setCursorGlowing(bool);
    }

    return (
      <div className="app">
        <SideBar glowCursor={glowCursor}/>
        <Cursor glow={cursorGlowing}/>
        <CollapsiblePanel/>
        <MainPanel />
      </div>
    )
  }