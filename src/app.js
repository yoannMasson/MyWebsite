import { useState } from 'react';
import Cursor from './cursor/cursor';
import CollapsiblePanel from './app_layout/collapsiblePanel';
import ReactDOM from 'react-dom';
import ContentContainer from './app_layout/contentContainer';


export default function App() {
  
    const [cursorGlowing, setCursorGlowing] = useState(false);

    function glowCursor (bool) {
      setCursorGlowing(bool);
    }

   
    return (
      <div className="app">
        <ContentContainer glowCursor={glowCursor}/>
        <Cursor glow={cursorGlowing}/>
        <CollapsiblePanel/>
      </div>
    )
  }

 
ReactDOM.render(
  <App />,
  document.getElementById('root')
);